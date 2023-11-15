import React from "react";

function Todolist(){
    var[todo,setTodo]=React.useState(["promotions","react Assignments","campaign","ppts"])
    return (
        <div className="main">
            <h1>Todolist</h1>
            {
                todo.map((a)=>{
                    return <todo todo={todo}></todo>
                })
            }
        </div>
    )
}
export default Todolist;