import {useState} from "react";

import FormInput from "../FormInput/FormInput";
import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button";

import {
    signInWithGooglePopup,
    createUserDocFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase";

import {SignInFormContainer, SignInFormTitle, SinIpFormLede, SignInFormButtonGroup} from './sign-in-form.styles';


const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleFormReset = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            handleFormReset();

        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-credential':
                    alert("There was a problem your email or password. Please try again.");
                    break;
                default:
                    console.log(error);
            }

        }
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <SignInFormContainer>
            <SignInFormTitle>Already have an account?</SignInFormTitle>
            <SinIpFormLede>Sign in with your email and password</SinIpFormLede>
            <form onSubmit={handleOnSubmit} className="">
                <FormInput
                    inputProps={{
                        labelFor: "email",
                        label: "Email",
                        labelClass: "form-input-label",
                        inputName: "email",
                        inputType: "text",
                        inputClass: "form-input",
                        onChange: handleOnChange,
                        value: email,
                        required: "required",
                    }}
                />
                <FormInput
                    inputProps={{
                        labelFor: "password",
                        label: "Password",
                        labelClass: "form-input-label",
                        inputName: "password",
                        inputType: "password",
                        inputClass: "form-input",
                        onChange: handleOnChange,
                        value: password,
                        required: "required",
                    }}
                />
                <SignInFormButtonGroup>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </SignInFormButtonGroup>
            </form>
        </SignInFormContainer>
    );
};

export default SignInForm;
