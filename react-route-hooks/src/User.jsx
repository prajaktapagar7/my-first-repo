import React from "react";
import { useParams, useLocation , useNavigate} from "react-router-dom";

const User = () => {
  const { fName, lName } = useParams();
  const location = useLocation();
  return (
    <>
      <h1>
        This is {fName} {lName}
      </h1>
      <p>
        My current location is {location.pathname}
      </p>
      {location.pathname === "/user/prajakta/pagar" ? (
          <button>Click Me</button>
        ) : null}
    </>
  );
};
export default User;
