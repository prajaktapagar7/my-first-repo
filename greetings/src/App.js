import React from "react";
const hour = new Date().getHours();
let greeting = "";
const cssStyle = {};
if (hour >= 1 && hour <= 11) {
  greeting = "Morning";
  cssStyle.color = "Green";
} else if (hour >= 12 && hour <= 7) {
  greeting = "Noon";
  cssStyle.color = "Orange";
} else {
  greeting = "Night";
  cssStyle.color = "Red";
}

function App() {
  return (
    <h1>
      Hello Sir, Good <span style={cssStyle}>{greeting}</span>
    </h1>
  );
}

export default App;
