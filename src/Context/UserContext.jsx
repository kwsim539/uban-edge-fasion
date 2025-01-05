import {createContext, useEffect, useReducer} from 'react';
import {createAction} from "../utils/reducer/reducer";
import {createUserDocFromAuth, onAuthStateChangedListener, signOutUser} from "../utils/firebase/firebase";

// The actual value you ant to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            throw new Error(`Unhandled type ${action.type} in userReducer`);
    }
}



export const UserProvider = ({ children }) => {

    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    console.log('currentUser: ', currentUser);
    const setCurrentUser = (user) => dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));



    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocFromAuth(user);
            }
            console.log('user: ', user);
            setCurrentUser(user);
        });
        return unsubscribe;
    },[]);

    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
