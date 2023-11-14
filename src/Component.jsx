import React from "react";

function Students(){
    var[student,setStudent]=React.useState(["vishnu","sai","fazil","charan","keerthi","narendra"])
    function add(){
        var x=document.getElementById("d1").value;
        setStudent([...student,x])
    }
    function asc(){
       var temp=[...student] 
       temp.sort();
       setStudent([...temp])
    }
    function dsc(){
        var temp=[...student] 
        temp.sort().reverse();
        setStudent([...temp])
     }
    return(
        <div>
            <h1>React Students</h1>
            <input type="text" id="d1"/>
            <button onClick={add}>Add student</button>
            <br />
            <button onClick={asc}>Ascending order</button>
            <button onClick={dsc}>descending order</button>
            <ul>{
                student.map((a)=>{
                    return <li>{a}</li>
                })
            }
            </ul>
        </div>
    )
}
export default Students;