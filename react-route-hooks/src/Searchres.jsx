import React from "react";

const Searchres = (props) => {
  const img = `https://source.unsplash.com/300x300/?${props.inp}`;
  return (
    <>
      <div>{props.inp && <img src={img} alt="search-img" />}</div>
    </>
  );
};
export default Searchres;
