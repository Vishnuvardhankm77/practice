import React from "react";

function Adding(){
    var[count,setCount]=React.useState(0)
    function add(){
        var x=+document.getElementById("d1").value;
        var y=+document.getElementById("d2").value;
        setCount(x+y)
    }
    return (
        <div>
            <h2>Calculator</h2>
            <input type="text" id="d1"/>
            <input type="text" id="d2"/>
            <button onClick={add}>Add Numbers</button>
            <h2>{count}</h2>
        </div>
    )
}
export default Adding;