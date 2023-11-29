import React from "react";
import add, {sub,div,mult} from "./Calc";

function App(){
    return(
        <>
        <ol>
            <li>Sum of two numbers is {add(4,2)} </li>
            <li>Subtraction of two numbers is {sub(4,2)} </li>
            <li>Division of two numbers is {div(4,2)} </li>
            <li>Multiplication of two numbers is {mult(4,2)} </li>
        </ol>
        </>
    )
}
export default App;