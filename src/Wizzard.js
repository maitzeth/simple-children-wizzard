import React, { Children, useState } from "react";

function Wizzard({ children }) {
  const [activePage, setActivePage] = useState(0);
  const totalPages = Children.count(children);
  const currentPage = children[activePage];

  const setNextPage = () => {
    setActivePage((index) => index + 1);
  };

  const setPrevPage = () => {
    setActivePage((index) => index - 1);
  };

  return (
    <div className="wizzard">
      <div className="wizzard__content">{currentPage}</div>
      <div className="wizzard__buttons">
        {activePage > 0 && (
          <button
            type="button"
            className="wizzard__button-left"
            onClick={setPrevPage}
          >
            Atras
          </button>
        )}
        {activePage + 1 < totalPages && (
          <button
            type="button"
            className="wizzard__button-right"
            onClick={setNextPage}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
}

export default Wizzard;
