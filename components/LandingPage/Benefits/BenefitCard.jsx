import classes from "./BenefitCard.style";

const BenefitCard = ({ data }) => {
  return (
    <div className={classes.container}>
      <div>{data.icon}</div>
      <div className={classes.wrapper}>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.description}>{data.description}</div>
      </div>
    </div>
  );
};

export default BenefitCard;
