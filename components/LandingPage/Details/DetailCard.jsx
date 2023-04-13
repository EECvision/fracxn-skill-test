import classes from "./DetailCard.module.css";
import Marker from "./Marker";

const DetailCard = ({ data, withLine, setIsActive, isActive, index }) => {
  return (
    <div className={classes.container}>
      <Marker
        complete={index < isActive}
        active={index === isActive}
        withLine={withLine}
        index={index}
      />
      <div className={classes.wrapper}>
        <div className={classes.title}>{data.title}</div>
        <div
          className={`${classes.description} ${
            index === isActive && classes.active
          }`}
        >
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
