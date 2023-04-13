import classes from "./HowTo.module.css";

const SupplierInfo = () => {
  return (
    <div className={classes._container}>
      <h1 className={classes.title}>
        <span>How to make your</span>{" "}
        <span className={classes.accent}>carbon credits</span> <br />
        <span>worth more</span>
      </h1>
      <p className={classes.description}>
        Bring your carbon projects on-chain into the Open Climate Registry to
        increase value and transparency, discover new sales channels, and
        improve project value.
      </p>
      <button className={classes.btn}>Learn more</button>
    </div>
  );
};

export default SupplierInfo;
