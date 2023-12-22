import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Pokemon = () => {
  const [num, setNum] = useState(1);
  const [details, setdetails] = useState({
    pokemon: "",
    move: "",
  });

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setdetails(() => {
        return {
          pokemon: res.data.name,
          move: res.data.moves.length,
        };
      });
    }
    getData();
  }, [num]);
  return (
    <>
      <h1>You chose {num}</h1>
      <h1>My name is {details.pokemon}</h1>
      <h1>I have {details.move} moves</h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};
export default Pokemon;
