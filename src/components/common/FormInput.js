import "./formInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput">
      <label className="formLabel">{props.name}</label>
      <input className="formItem" placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
