import React from "react";
import { FName, LName } from "./App";

const CompC = () => {
  return (
    <>
      <FName.Consumer>
        {(fName) => {
          return (
            <>
              <LName.Consumer>
                {(lName) => {
                  return (
                    <h1>
                      Hi, This is {fName} {lName}
                    </h1>
                  );
                }}
              </LName.Consumer>
            </>
          );
        }}
      </FName.Consumer>
    </>
  );
};
export default CompC;
