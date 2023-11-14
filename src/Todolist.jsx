import React from "react";

function Todolist(){
    var[list,setList]=React.useState(["college bus fee"," sweet biscuts","movies Tickets","cooldrinks"])
    function add(){
        var x=document.getElementById("d1").value;
        setList([...list,x])
    }
    return(
        <div className="main">
                <h1>Todolist</h1>
                <input type="text" id="d1"/>
                <button onClick={add}>Add Task</button>
                <ul>
                    {
                        list.map((a)=>{
                            return <li>{a}</li>
                        })
                    }
                </ul>
        </div>
    )
}
export default Todolist;
