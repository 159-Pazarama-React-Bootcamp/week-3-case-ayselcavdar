import './Button.css'
const Button = ({ btnContent, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={"btn-container"}>
        {btnContent}
      </button>
    </div>
  );
};

export default Button
