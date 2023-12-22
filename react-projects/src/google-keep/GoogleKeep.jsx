import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notelist from "./Notelist";

const GoogleKeep = () => {
  const [item, setItem] = useState([]);
  const addNote = (note) => {
    setItem([...item, note]);
  };
  const deleteItem = (id) => {
    setItem((oldData) => {
      return oldData.filter((val, i) => {
        return i !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <Note passNote={addNote} />
      {item.map((val, index) => {
        return (
          <Notelist
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            onSelect={deleteItem}
          />
        );
      })}
      <Footer />
    </>
  );
};
export default GoogleKeep;
