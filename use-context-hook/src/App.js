import React from "react";
import CompA from "./CompA";
import { createContext } from "react";

const FName = createContext({
  nname: "",
  surname: "",
});
const LName = createContext();

const App = () => {
  return (
    <>
      <FName.Provider value={{ nname: "praju", surname: "pagar" }}>
        <LName.Provider value="pagar">
          <CompA />
        </LName.Provider>
      </FName.Provider>
    </>
  );
};
export default App;
export { FName, LName };
