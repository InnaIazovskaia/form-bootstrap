const FormControl = ({ controlId, labelText, inputType, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={controlId} className="form-label">
        {labelText}
      </label>
      <input
        type={inputType}
        className="form-control"
        placeholder={placeholder}
        id={controlId}
      />
    </div>
  );
};

export default FormControl;
