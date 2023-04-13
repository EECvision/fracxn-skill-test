import classes from "./Marker.module.css";

const Marker = ({ active, complete, withLine, index }) => {
  return (
    <div
      className={`${classes.wrapper} ${false && classes.active} ${
        false && classes.complete
      }`}
    >
      <div
        className={`${classes.container} ${false && classes.containerActive}`}
      >
        <div className={classes.index}>{index + 1}</div>
      </div>
      <div className={`${classes.line} ${withLine && classes.draw}`}>
        <div className={classes.innerLine}></div>
      </div>
    </div>
  );
};

export default Marker;
