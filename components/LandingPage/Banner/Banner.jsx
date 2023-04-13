import Tag from "../Tag/Tag";
import classes from "./Banner.module.css";
import carbonCalculator from "../../../assets/carbon-calculator.png";
import robotArm from "../../../assets/robot-arm.png";
import Token from "../../../assets/token.svg";
import ArrowIcon from "../../../assets/icon-arrow-2.svg";
import Image from "next/image";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";

const Banner = () => {
  return (
    <div className={classes.container}>
      <FadeAnimation width={"auto"}>
        <div className={`${classes.about}`}>
          <Tag>The World’s First Company To</Tag>
          <h1 className={`${classes.title} ${classes.title}`}>
            <span>Offset Carbon Emissions Using Innovative</span>{" "}
            <span className={classes.accent}>Blockchain</span>{" "}
            <span>Technology</span>
          </h1>
          <p className={classes.description}>
            Creating Sustainable Solutions through Blockchain-Based Carbon
            Offsetting Solutions
          </p>
          <button className={classes.btn}>
            <div>Get started</div>
            <ArrowIcon />
          </button>
        </div>
      </FadeAnimation>

      <div className={`${classes.demo} ${classes.demo}`}>
        <div className={classes.cardImage}>
          <Image className={classes.card} src={carbonCalculator} alt="" />
          <Token className={`${classes.token} ${classes.token1}`} />
          <Token className={`${classes.token} ${classes.token2}`} />
          <Token className={`${classes.token} ${classes.token3}`} />
        </div>
        <Image className={classes.robotArm} src={robotArm} alt="" />
      </div>
    </div>
  );
};

export default Banner;
