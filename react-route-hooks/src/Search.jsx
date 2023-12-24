import React, {useState} from "react";
import Searchres from "./Searchres";

const Search = () => {
    const [state, setState] = useState("");
    return(
        <>
        <div className="searchbar">
        <input type ="text" placeholder="Search Anything" onChange={(event) => {
            setState(event.target.value);
        }}/>
        <Searchres inp ={state}/>
        </div>
        </>
    );
}
export default Search;