import classes from "./HowTo.module.css";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";
import CarbonCircle from "./CarbonCircle";
import { useState } from "react";
import { toSentenceCase } from "../../../utils";

const HowTo = () => {
  const [isActive, setIsActive] = useState("supplier");

  return (
    <FadeAnimation width={"100%"}>
      <div className={classes.container}>
        <div className={classes.lhs}>
          <div className={classes.btnContainer}>
            {["supplier", "buyer"].map((item, idx) => (
              <div
                key={idx}
                isActive={isActive}
                onClick={() => setIsActive(item)}
                className={`${classes.actionBtn} ${
                  item === isActive && classes.active
                }`}
              >
                {`Credit ${toSentenceCase(item)}`}
              </div>
            ))}
          </div>
          <h1 className={classes.title}>
            <span>How to make your</span>{" "}
            <span className={classes.accent}>carbon credits</span> <br />
            <span>worth more</span>
          </h1>
          <p className={classes.description}>
            Bring your carbon projects on-chain into the Open Climate Registry
            to increase value and transparency, discover new sales channels, and
            improve project value.
          </p>
          <button className={classes.btn}>Learn more</button>
        </div>
        <div className={classes.rhs}>
          <CarbonCircle isActive={isActive} />
        </div>
        <button className={`${classes.btn} ${classes.mobile}`}>
          Learn more
        </button>
      </div>
    </FadeAnimation>
  );
};

export default HowTo;
