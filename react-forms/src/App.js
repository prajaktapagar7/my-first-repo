import React, { useState } from "react";

const App = () => {
  const [fullname, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });
  const { fName, lName, email, phone } = fullname;

  const inputEvent = (event) => {
    const { name, value } = event.target;

    // setFullName((prevVal) => {
    //  return{
    //   ...prevVal,
    //   [name] : value
    //  }
    // });
    setFullName({ ...fullname, [name]: value });
  };

  const OnSubmit = (event) => {
    event.preventDefault(); //to prevent default behaviour of form
    alert("Form submitted successfully");
  };
  return (
    <>
      <form onSubmit={OnSubmit}>
        <h1>
          Hello {fName} {lName}
        </h1>
        <h4>{email}</h4>
        <h4>{phone}</h4>
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
          type="email"
          placeholder="Enter your Email"
          name="email"
          onChange={inputEvent}
        />
        <br />
        <input
          type="number"
          placeholder="Enter your Phone Number"
          name="phone"
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
