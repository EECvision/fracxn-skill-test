import classes from "./Paginate.module.css";

const Control = ({ controlProps }) => {
  const { handleGoto, handleNext, handlePrev, currentPage, paginate } =
    controlProps;

  return (
    <div className={classes.container}>
      <div className={classes.control}>
        <div onClick={handlePrev} className={classes.btn}>
          Previous
        </div>
        <div className={classes.indicators}>
          <div
            onClick={() =>
              handleGoto(currentPage - 1 > 0 ? currentPage - 1 : 1)
            }
            className={classes.indicator}
          >
            {currentPage - 1 > 0 ? currentPage - 1 : ""}
          </div>
          <div className={classes.indicator}>{currentPage}</div>
          <div
            onClick={() =>
              handleGoto(
                currentPage + 1 > Object.keys(paginate).length
                  ? Object.keys(paginate).length
                  : currentPage + 1
              )
            }
            className={classes.indicator}
          >
            {currentPage + 1 > Object.keys(paginate).length
              ? ""
              : currentPage + 1}
          </div>
        </div>
        <div onClick={handleNext} className={classes.btn}>
          Next
        </div>
      </div>
    </div>
  );
};

export default Control;
