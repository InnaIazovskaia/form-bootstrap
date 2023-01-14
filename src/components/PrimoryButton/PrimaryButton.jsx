const Button = ({ actionOnClick, text, className }) => {
  return (
    <button actionOnClick={actionOnClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
