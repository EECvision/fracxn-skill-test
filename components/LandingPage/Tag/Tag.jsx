import classes from "./Tag.style";

const Tag = ({ children, transparent }) => {
  return (
    <div
      style={{ background: transparent ? "transparent" : "", color: "#37f2ade1" }}
      className={classes.container}
    >
      {children}
    </div>
  );
};

export default Tag;
