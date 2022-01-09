import "./Button.css";
const Button = ({ btnContent, onClick }) => {
  return (
    <button onClick={onClick} className={"btn-container"}>
      {btnContent}
    </button>
  );
};

export default Button;
