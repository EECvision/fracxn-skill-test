import classes from "./HowTo.module.css";

const BuyerInfo = () => {
  return (
    <div className={classes._container}>
      <h1 className={classes.title}>
        <span>Purchase reliable</span>{" "}
        <span className={classes.accent}>credits</span> <br />
        <span>in total transparency</span>
      </h1>
      <p className={classes.description}>
        Use Sustainology to rapidly purchase and retire carbon credits, as well
        as to share your impact narrative with data that is openly verifiable.
      </p>
      <button className={classes.btn}>Learn more</button>
    </div>
  );
};

export default BuyerInfo;
