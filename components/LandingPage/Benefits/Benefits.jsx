import Tag from "../Tag/Tag";
import BenefitCard from "./BenefitCard";
import { benefits } from "./Benefits.script";
import classes from "./Benefits.style";
import carbonOffset from "../../../assets/carbon-Offset-1.png";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={classes.container}>
      <Tag>WHY WORK WITH US?</Tag>
      <div className={classes.wrapper}>
        <div className={classes.lhs}>
          <h1 className={classes.title}>
            <span>Benefits of Tokenized</span>{" "}
            <span className={classes.accent}>Carbon Credits</span>
          </h1>
          <Image className={classes.image} src={carbonOffset} alt="" />
        </div>
        <div className={classes.benefitsList}>
          {benefits.map((data, index) => (
            <BenefitCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
