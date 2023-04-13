import classes from "./CarbonCircle.module.css";
import CarbonIcon from "../../../assets/icon-carbon.svg";

const CarbonCircle = ({ isActive }) => {
  return (
    <div className={classes.outerCircle}>
      <div
        className={`${classes.innerCircle} ${
          isActive === "buyer" ? classes.half : classes.full
        }`}
      >
        <CarbonIcon className={classes.carbonIcon} />
        <div
          className={`${classes.action} ${classes.buyer} ${
            isActive === "buyer" && classes.active
          }`}
        >
          Credit Buyer
        </div>
        <div
          className={`${classes.action} ${classes.supplier} ${
            isActive === "supplier" && classes.active
          }`}
        >
          Credit Supplier
        </div>
      </div>
    </div>
  );
};

export default CarbonCircle;
