import { useState } from "react";
import DetailCard from "./DetailCard";
import { details } from "./Details.script";
import classes from "./Details.module.css";
import hexagon from "../../../assets/hexagon.png";
import Image from "next/image";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";

const Details = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className={classes.container}>
      <FadeAnimation width={"100%"}>
        <div className={classes.detailsList}>
          {details.map((data, index) => (
            <DetailCard
              withLine={index !== details.length - 1}
              setIsActive={setIsActive}
              isActive={isActive}
              index={index}
              key={index}
              data={data}
            />
          ))}
        </div>
      </FadeAnimation>

      <div className={classes.rhs}>
        <FadeAnimation>
          <div className={classes.title}>
            <span>Introducing the</span>{" "}
            <span className={classes.accent}>Carbon</span>{" "}
            <span className={classes.accent}>Based Token</span>:{" "}
            <span>A Novel Cryptocurrency for Sustainable Development</span>
          </div>
        </FadeAnimation>
        <FadeAnimation>
          <Image className={classes.image} src={hexagon} alt="" />
        </FadeAnimation>
      </div>
    </div>
  );
};

export default Details;
