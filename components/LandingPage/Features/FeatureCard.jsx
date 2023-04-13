import classes from "./FeatureCard.module.css";

const FeatureCard = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}> {data.icon}</div>
      <div>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.description}>{data.description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
