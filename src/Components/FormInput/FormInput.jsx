import "./form-input.styles.scss";

const FormInput = ({inputProps}) => {
    return (
        <div className="form-row">
            {inputProps.label && (
                <label htmlFor={inputProps.labelFor} className={`${inputProps.value.length ? 'shrink' : ''} ${inputProps.labelClass}`}>{inputProps.label}</label>
            )}
            <input name={inputProps.inputName} id={inputProps.inputId} type={inputProps.inputType} className={inputProps.inputClass} onChange={inputProps.onChange} value={inputProps.value} required={inputProps.required} />
        </div>
    );
};

export default FormInput;
