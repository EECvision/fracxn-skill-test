import Tag from "../Tag/Tag";
import classes from "./HowTo.style";
import carbonCredits from "../../../assets/carbon-credits.png";
import Image from "next/image";

const HowTo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.lhs}>
        <div className={classes.tagContainer}>
          <Tag>Credit Supplier</Tag>
          <Tag transparent>Credit Buyer</Tag>
        </div>
        <h1 className={classes.title}>
          <span>How to make your</span> <span className={classes.accent}>carbon credits</span> <span>worth more</span>
        </h1>
        <p className={classes.description}>
          Bring your carbon projects on-chain into the Open Climate Registry to
          increase value and transparency, discover new sales channels, and
          improve project value.
        </p>
        <button className={classes.btn}>Learn more</button>
      </div>
      <div className={classes.rhs}>
        <Image src={carbonCredits} alt="" />
      </div>
      <button className={classes.btnMobile}>Learn more</button>
    </div>
  );
};

export default HowTo;
