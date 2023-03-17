import classes from "./Marker.module.css";

const Marker = ({ active, complete, withLine, index }) => {
  return (
    <div
      className={`${classes.wrapper} ${active && classes.active} ${
        complete && classes.complete
      }`}
    >
      <div
        className={`${classes.container} ${active && classes.containerActive}`}
      >
        <div className={classes.index}>{index+1}</div>
      </div>
      <div className={`${classes.line} ${withLine && classes.draw}`}>
        <div className={classes.innerLine}></div>
      </div>
    </div>
  );
};

export default Marker;
