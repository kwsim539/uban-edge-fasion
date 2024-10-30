import {useState} from "react";
import FormInput from "../FormInput/FormInput";
import {signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase";
import './sign-in-form.styles.scss';
import Button from "../Button/Button";

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    /*console.log(formFields);*/

    const handleFormReset = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            handleFormReset();

        } catch (error) {

        }
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className="sign-up-form">
            <h2 className="">Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleOnSubmit} className="">
                <FormInput
                    inputProps = {{
                        labelFor: "email",
                        label: "Email",
                        labelClass: "form-input-label",
                        inputName: "email",
                        inputId: "email",
                        inputType: "text",
                        inputClass: "form-input",
                        onChange: handleOnChange,
                        value: email,
                        required:"required",
                    }}
                     />
                <FormInput
                    inputProps = {{
                        labelFor: "password",
                        label: "Password",
                        labelClass: "form-input-label",
                        inputName: "password",
                        inputId: "password",
                        inputType: "password",
                        inputClass: "form-input",
                        onChange: handleOnChange,
                        value: password,
                        required:"required",
                    }}
                     />
                <div className="button-group">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
