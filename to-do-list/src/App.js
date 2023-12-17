import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems([...items, inputList]);
    setInputList("");
  };
  const deleteItems = (id) => {
    setItems((oldArr) => {
      return oldArr.filter((currItem, i) => {
        return i !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((val, i) => {
              return (
                <ToDoList key={i} id={i} text={val} onSelect={deleteItems} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
