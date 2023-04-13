import Tag from "../Tag/Tag";
import classes from "./CarbonCard.module.css";
import Card from "../../../assets/carbon-card.png";
import Check from "../../../assets/icon-check.svg";
import Image from "next/image";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";

const list = [
  "Multi-currency IBAN",
  "Instant Issuance",
  "Instant Issuance",
  "Merchant Acceptance",
];

const CardbonCard = () => {
  return (
    <FadeAnimation>
      <div className={classes.container}>
        <div className={classes.lhs}>
          <Image className={classes.image} src={Card} alt="" />
          <div className={classes.cardShadow}></div>
        </div>
        <div className={classes.rhs}>
          <Tag>YOUR OWN CARBON CARD</Tag>
          <h1 className={classes.title}>
            <span>Creating Your Own</span>{" "}
            <span className={classes.accent}>Carbon Card</span> powered by{" "}
            <span className={classes.accent}>0carbonbank</span>
            <span>: A Revolutionary Way to Lower Your</span>{" "}
            <span className={classes.accent}>Carbon Emissions</span>
          </h1>
          <div className={classes.list}>
            {list.map((item, index) => (
              <div key={index} className={classes.item}>
                <Check />
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeAnimation>
  );
};

export default CardbonCard;
