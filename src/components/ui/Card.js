import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <section
      className={`${classes.Card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
