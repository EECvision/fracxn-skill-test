import classes from "./DetailCard.style";
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
        <div onClick={() => setIsActive(index)} className={classes.title}>
          {data.title}
        </div>
        <div className={classes.description(index === isActive)}>
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
