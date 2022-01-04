import './Button.css'
const Button = ({ btnContent }) => {
  return (
    <div>
      <button className={"btn-container"}>{btnContent}</button>
    </div>
  );
};

export default Button
