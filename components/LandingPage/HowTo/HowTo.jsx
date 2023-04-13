import classes from "./HowTo.module.css";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";
import CarbonCircle from "./CarbonCircle";
import { useState } from "react";
import { toSentenceCase } from "../../../utils";
import BuyerInfo from "./BuyerInfo";
import SupplierInfo from "./SupplierInfo";

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
                onClick={() => setIsActive(item)}
                className={`${classes.actionBtn} ${
                  item === isActive && classes.active
                }`}
              >
                {`Credit ${toSentenceCase(item)}`}
              </div>
            ))}
          </div>
          {isActive === "buyer" ? <BuyerInfo /> : <SupplierInfo />}
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
