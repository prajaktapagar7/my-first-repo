import React from "react";
import CompC from "./CompC";
import { FName } from "./App";
import { useContext } from "react";

const CompB = () => {
  const name = useContext(FName);
  return (
    <>
      <h1>
        Hi, This is {name.nname} {name.surname}
      </h1>
    </>
  );
};
export default CompB;
