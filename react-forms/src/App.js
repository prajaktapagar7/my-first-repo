import React, { useState } from "react";

const App = () => {
  const [fullname, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  const[fName, lName,email]=fullname;

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFullName((prevVal) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevVal.lName,
          email: prevVal.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevVal.fName,
          lName: value,
          email: prevVal.email,
        };
      } else if (name === "email") {
        return {
          fName: prevVal.fName,
          lName: prevVal.lName,
          email: value,
        };
      }
    });
  };

  const OnSubmit = (event) => {
    event.preventDefault(); //to prevent default behaviour of form
  };
  return (
    <>
      <form onSubmit={OnSubmit}>
        <h1>
          Hello {fName} {lName}
        </h1>
        <p>{email}</p>
        <input
          type="text"
          placeholder="Enter Your first Name"
          name="fName"
          onChange={inputEvent}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your Last Name"
          name="lName"
          onChange={inputEvent}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your Email"
          name="email"
          onChange={inputEvent}
        />
        <br />
        <button type="submit">Submit</button>
        {/* This is controlled component where formdata is handled by react component */}
      </form>
    </>
  );
};
export default App;
