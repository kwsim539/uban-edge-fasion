import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPbBTzxirrCNjEj4BCEYlsosCWCxp2nnw",
    authDomain: "uban-edge-fasion-db.firebaseapp.com",
    projectId: "uban-edge-fasion-db",
    storageBucket: "uban-edge-fasion-db.appspot.com",
    messagingSenderId: "370653640175",
    appId: "1:370653640175:web:0c86630217200be308721a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return ;
    const userDocRef = doc(db, 'users', userAuth.uid);

    //console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    //console.log(userSnapshot);
    //console.log(userSnapshot.exists()); // Check whether based on a document and the data you're looking for in that document, if any of it exists or not,

    // Access or Set the data in the firebase db

    // If user data does not exist
    // Create / set the document with the data from userAuth in the firebase db collection
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
        } catch (error) {
            console.error('Error creating the user', error.message);
        }
    }

    // If user data exists
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
