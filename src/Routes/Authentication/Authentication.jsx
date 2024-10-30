import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import SignInForm from "../../Components/SignInForm/SignInForm";
import './authentication.styles.scss';

const Authentication = () => {

    return (
        <div className="account-forms-wrapper">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;
