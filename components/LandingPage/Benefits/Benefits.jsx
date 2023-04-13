import Tag from "../Tag/Tag";
import BenefitCard from "./BenefitCard";
import { benefits } from "./Benefits.script";
import classes from "./Benefits.module.css";
import carbonOffset from "../../../assets/carbon-offset-1.png";
import Image from "next/image";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";

const Benefits = () => {
  return (
    <div className={classes.container}>
      <FadeAnimation>
        <Tag>WHY WORK WITH US?</Tag>
      </FadeAnimation>
      <div className={classes.wrapper}>
        <div className={classes.lhs}>
          <FadeAnimation>
            <h1 className={classes.title}>
              <span>Benefits of Tokenized</span>{" "}
              <span className={classes.accent}>Carbon Credits</span>
            </h1>
          </FadeAnimation>
          <FadeAnimation>
            <Image className={classes.image} src={carbonOffset} alt="" />
          </FadeAnimation>
        </div>
        <div className={classes.benefitsList}>
          {benefits.map((data, index) => (
            <FadeAnimation key={index} width={"100%"}>
              <BenefitCard key={index} data={data} />
            </FadeAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
