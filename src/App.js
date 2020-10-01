import React from "react";
import Wizzard from "./Wizzard";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const App = () => {
  return (
    <Wizzard>
      <StepOne></StepOne>
      <StepTwo></StepTwo>
      <StepThree></StepThree>
    </Wizzard>
  );
};

export default App;
