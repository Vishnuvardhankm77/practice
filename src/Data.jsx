import React from "react";

function Component(){
  var[text,setText]=React.useState("");
  function handleInput(e){
    setText(e.target.value)
  }
  return(
    <div className="main">
        <input type="text" onChange={handleInput} id="inp"/><br />
        <h1 id="d1">You Have Entered:{text}</h1>

    </div>
  )
}
export default Component;