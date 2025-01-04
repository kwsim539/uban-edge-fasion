import {FormInputLabel, FormInputContainer, FormRow} from "./form-input.styles";

const FormInput = ({inputProps}) => {
    return (
        <FormRow>
            {inputProps.label && (
                <FormInputLabel shrink={inputProps.value.length} htmlFor={inputProps.labelFor} >{inputProps.label}</FormInputLabel>
            )}
            <FormInputContainer name={inputProps.inputName}  type={inputProps.inputType} onChange={inputProps.onChange} value={inputProps.value} required={inputProps.required} />
        </FormRow>
    );
};

export default FormInput;
