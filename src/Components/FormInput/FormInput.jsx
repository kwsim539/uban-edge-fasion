import "./form-input.styles.scss";

const FormInput = ({inputProps}) => {
    return (
        <div className="form-row">
            {inputProps.label && (
                <label htmlFor={inputProps.labelFor} className={inputProps.labelClass}>{inputProps.label}</label>
            )}
            <input name={inputProps.inputName} id={inputProps.inputId} type={inputProps.inputType} className={inputProps.inputClass} onChange={inputProps.OnChange} value={inputProps.displayName} required={inputProps.required} />
        </div>
    );
};

export default FormInput;
