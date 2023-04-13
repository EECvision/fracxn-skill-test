import { useEffect, useState } from "react";
import classes from "./Paginate.module.css";
import Control from "./Control";

const Paginate = ({ items, countPerPage = 6, renderItem }) => {
  const [state, setState] = useState({
    currentPage: 1,
    paginate: {},
  });

  const { paginate, currentPage } = state;

  const handleSetState = (payload) => {
    setState((states) => ({ ...states, ...payload }));
  };

  const handlePrev = () => {
    if (currentPage <= 1) {
      handleSetState({ currentPage: Object.keys(paginate).length });
    } else {
      handleSetState({ currentPage: currentPage - 1 });
    }
  };

  const handleNext = () => {
    if (currentPage >= Object.keys(paginate).length) {
      handleSetState({ currentPage: 1 });
    } else {
      handleSetState({ currentPage: currentPage + 1 });
    }
  };

  const handleGoto = (page) => {
    handleSetState({ currentPage: Number(page) });
  };

  useEffect(() => {
    const numberOfPages = Math.ceil(items.length / countPerPage);
    let startIndex = 0;
    let endIndex = startIndex + countPerPage;
    const paginate = {};
    for (let i = 1; i <= numberOfPages; i += 1) {
      paginate[i] = items.slice(startIndex, endIndex);
      startIndex = endIndex;
      endIndex = startIndex + countPerPage;
    }
    handleSetState({ paginate });
  }, [items, countPerPage]);

  return (
    <>
      {Object.keys(paginate).length ? (
        renderItem(paginate[currentPage], {
          handleNext,
          handlePrev,
          handleGoto,
          ...state,
          handleSetState,
        })
      ) : (
        <div>Nothing to display</div>
      )}
      {Object.keys(paginate).length > 1 ? (
        <Control
          controlProps={{
            handleGoto,
            handleNext,
            handlePrev,
            currentPage,
            paginate,
          }}
        />
      ) : null}
    </>
  );
};

export default Paginate;
