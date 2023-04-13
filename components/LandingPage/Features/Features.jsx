import Tag from "../Tag/Tag";
import FeatureCard from "./FeatureCard";
import { features } from "./Features.script";
import classes from "./Features.module.css";
import carbonOffset from "../../../assets/carbon-offset.png";
import carbonOffsetMobile from "../../../assets/carbon-offset-mobile.png";
import Image from "next/image";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";

const Features = () => {
  return (
    <div className={classes.container}>
      <FadeAnimation>
        <Tag>WHY WORK WITH US?</Tag>
      </FadeAnimation>
      <div className={classes.wrapper}>
        <FadeAnimation>
          <div className={classes.lhs}>
            <h1 className={classes.title}>
              <span>Scaling Carbon Markets with Tokenized</span>{" "}
              <span className={classes.accent}>Carbon Credits</span>
            </h1>
            <p className={`${classes.text} ${classes.mobile}`}>
              Tokenized carbon credits can solve a key market problem, which
              also enables carbon markets to scale quickly beyond their current
              constraints.
            </p>
            <FadeAnimation>
              <Image className={classes.img1} src={carbonOffset} alt="" />
              <Image className={classes.img2} src={carbonOffsetMobile} alt="" />
            </FadeAnimation>
          </div>
        </FadeAnimation>
        <FadeAnimation>
          <div className={classes.rhs}>
            <p className={`${classes.text}`}>
              Tokenized carbon credits can solve a key market problem, which
              also enables carbon markets to scale quickly beyond their current
              constraints.
            </p>
            <div className={classes.featuresList}>
              {features.map((data, index) => (
                <FadeAnimation key={index} width={"100%"}>
                  <FeatureCard key={index} data={data} />
                </FadeAnimation>
              ))}
            </div>
          </div>
        </FadeAnimation>
      </div>
    </div>
  );
};

export default Features;
