import classes from "./Tag.module.css";

const Tag = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>{children}</div>
    </div>
  );
};

export default Tag;
