import React, { Children, useState } from "react";
import styled from "styled-components";

function Wizzard({ children }) {
  const [activePage, setActivePage] = useState(0);
  const totalPages = Children.count(children);
  const currentPage = Children.toArray(children[activePage]);

  const setNextPage = () => {
    setActivePage((index) => index + 1);
  };

  const setPrevPage = () => {
    setActivePage((index) => index - 1);
  };

  return (
    <WizzardWrapper>
      <WizzardContent>{currentPage}</WizzardContent>
      <WizzardBottom>
        {activePage > 0 && (
          <WizzardButton type="button" onClick={setPrevPage} align="left">
            Atras
          </WizzardButton>
        )}
        {activePage + 1 < totalPages && (
          <WizzardButton type="button" onClick={setNextPage} align="right">
            Siguiente
          </WizzardButton>
        )}
      </WizzardBottom>
    </WizzardWrapper>
  );
}

const WizzardWrapper = styled.article`
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 15px;
`;

const WizzardContent = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WizzardBottom = styled.footer`
  height: 40px;
  width: 100%;
  display: flex;
`;

const WizzardButton = styled.button`
  display: block;
  border: none;
  background-color: #8e44ad;
  cursor: pointer;
  min-width: 80px;
  color: #fff;
  border-radius: 3px;
  ${(props) => props.align === "right" && "margin-left: auto"};
  ${(props) => props.align === "left" && "margin-right: auto"};
`;

export default Wizzard;
