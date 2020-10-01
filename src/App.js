import React from "react";
import Wizzard from "./Wizzard";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <Wizzard>
        <StepOne></StepOne>
        <StepTwo></StepTwo>
        <StepThree></StepThree>
      </Wizzard>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default App;
