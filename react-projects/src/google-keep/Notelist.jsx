import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Notelist = (props) => {
  return (
    <>
      <div className="notelist">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn">
          <DeleteOutlineIcon
            onClick={() => {
              props.onSelect(props.id);
            }}
          />
        </button>
      </div>
    </>
  );
};
export default Notelist;
