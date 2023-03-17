import Tag from "../Tag/Tag";
import FeatureCard from "./FeatureCard";
import { features } from "./Features.script";
import classes from "./Features.style";
import carbonOffset from "../../../assets/carbon-offset.png";
import carbonOffsetMobile from "../../../assets/carbon-offset-mobile.png";
import Image from "next/image";

const Features = () => {
  return (
    <div className={classes.container}>
      <Tag>WHY WORK WITH US?</Tag>
      <div className={classes.wrapper}>
        <div className={classes.lhs}>
          <h1 className={classes.title}>
            <span>Scaling Carbon Markets with Tokenized</span> <span className={classes.accent}>Carbon Credits</span>
          </h1>
          <p className={classes.textMobile}>
            Tokenized carbon credits can solve a key market problem, which also
            enables carbon markets to scale quickly beyond their current
            constraints.
          </p>
          <Image className={classes.img1} src={carbonOffset} />
          <Image className={classes.img2} src={carbonOffsetMobile} />
        </div>
        <div className={classes.rhs}>
          <p className={classes.text}>
            Tokenized carbon credits can solve a key market problem, which also
            enables carbon markets to scale quickly beyond their current
            constraints.
          </p>
          <div className={classes.featuresList}>
            {features.map((data, index) => (
              <FeatureCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
