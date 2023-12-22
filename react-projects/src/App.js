import React, { useState } from "react";
import Header from "./google-keep/Header";
import Footer from "./google-keep/Footer";
import Note from "./google-keep/Note";
import Notelist from "./google-keep/Notelist";

const App = () => {
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
export default App;
