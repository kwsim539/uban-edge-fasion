import {useState} from "react";
import FormInput from "../FormInput/FormInput";
import {createAuthUserWithEmailAndPassword, createUserDocFromAuth} from "../../utils/firebase/firebase";
import './sign-up-form.styles.scss';
import Button from "../Button/Button";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    /*console.log(formFields);*/

    const handleFormReset = () => {
        setFormFields(defaultFormFields);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (password !== password) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocFromAuth(user, {displayName});
            handleFormReset();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot register user, email already in use');
            } else {
                console.log('User creation encountered an error: ', error);
            }

            //alert(error.message);
        }
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className="sign-up-form">
            <h2 className="">Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleOnSubmit} className="">
                <FormInput
                    inputProps = {{
                        labelFor: "displayName",
                        label: "Display Name",
                        labelClass: "form-input-label",
                        inputName: "displayName",
                        inputId: "displayName",
                        inputType: "text",
                        inputClass: "form-input",
                        onChange: handleOnChange,
                        value: displayName,
                        required:"required",
                    }}
                     />
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
                <FormInput
                    inputProps = {{
                        labelFor: "confirmPassword",
                        label: "Confirm Password",
                        labelClass: "form-input-label",
                        inputName: "confirmPassword",
                        inputId: "confirmPassword",
                        inputType: "password",
                        inputClass: "form-input",
                        onChange: handleOnChange,
                        value: confirmPassword,
                        required:"required",
                    }}
                     />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
