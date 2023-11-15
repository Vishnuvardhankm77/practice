import React from "react";
function Student(){
    var[students,setStudents]=React.useState(['Pallavi','Jaya','Dharma','Souwmya','Anu','Eshwar'])
    function asc(){
        var temp=[...students];
        temp.sort();
        setStudents([...temp])
    }
    function dsc(){
        var temp=[...students];
        temp.sort().reverse();
        setStudents([...temp])
    }
    return(
        <div className="main">
            <h1>Students</h1>
            <button onClick={asc}>Ascending</button>
            <button onClick={dsc}>Descending</button>
            <ul>
                {
                    students.map((a)=>{
                        return <li>{a}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Student;