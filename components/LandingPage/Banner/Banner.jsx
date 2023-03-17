import Tag from "../Tag/Tag";
import classes from "./Banner.style";
import carbonCalculator from "../../../assets/carbon-calculator.png";
import robotArm from "../../../assets/robot-arm.png";
import Token from "../../../assets/token.svg";
import bannerImage from "../../../assets/banner-image.png";
import ArrowIcon from "../../../assets/icon-arrow-2.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.about}>
        <Tag>The World’s First Company To</Tag>
        <h1 className={classes.title}>
          <span>Offset Carbon Emissions Using Innovative</span> <span className={classes.accent}>Blockchain</span> <span>Technology</span>
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
      <div className={classes.demo}>
        <Image className={classes.bannerImage} src={bannerImage} alt="" />
        {/* <div className={classes.cardImage}>
          <Image className={classes.card} src={carbonCalculator} alt="" />
          <Token style={{width: "120px", height: "121px"}} className={classes.token1} />
          <Token style={{width: "196px", height: "191px"}} className={classes.token2} />
          <Token style={{width: "196px", height: "191px"}} className={classes.token3} />
        </div>
        <Image className={classes.robot} src={robotArm} /> */}
      </div>
    </div>
  );
};

export default Banner;
