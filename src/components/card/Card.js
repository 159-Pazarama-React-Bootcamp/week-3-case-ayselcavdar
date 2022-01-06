import CardTitle from "./CardTitle";
import ArrowIcon from "../common/ArrowIcon";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card-container">
      <CardTitle title={"Hello 👋"} />
      <div className="typography content-container">
        <p>
          I hope everyone is safe and sound. I designed different type of
          lending pages,application. it can help others to develop more ideas
          from this. I keep it simple and minimal. It can also help you find
          different options in exploring and improving your skills.
          <br />
          <br />
          I am available for new projects. I hope you show me your support 😄
          <br />
          <br />I wish you luck, <br />
          Drax❤️
        </p>
      </div>
      <div className="arrow-icon-container">
        <ArrowIcon />
      </div>
      <Button
        btnContent={
          <Link to="/login">Buy me a Coffee</Link>
        }
      />
    </div>
  );
};

export default Card;
