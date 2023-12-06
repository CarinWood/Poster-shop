import "./card.css";
import astronaut from "../../assets/images/char-1.png";

export const Card = ({}) => {
  return (
    <div className="card">
      <img className="card-img" src={astronaut} alt="astronaut" />
      <h2 className="card-title">Astronaut</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto?
        Reprehenderit eaque temporibus reiciendis commodi!
      </p>

      <button className="card-btn">Oh, take my money!</button>
    </div>
  );
};
