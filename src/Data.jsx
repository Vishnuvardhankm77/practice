import React from "react";
function Component(){
    var[students,setStudents]=React.useState(['Pallavi','Jaya','Dharma','Souwmya','Anu','Eshwar'])
    return(
        <div className="main">
            <h1>Students</h1>
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
export default Component;