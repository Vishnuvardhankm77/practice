import React from "react";

function Counter(){
    var[count,setCount]=React.useState(10);
        function inc(){
            setCount(count+10)
        }
        function incre(){
            setCount(count+100)
        }
        function dec(){
            setCount(count-10)
        }
    return(
        <div>
            <h3>Welcome to ClassComponents</h3>
            <h2>{count}</h2>
            <button onClick={inc}>Inc Count by 10</button>
            <button onClick={incre}>Inc Count by 100</button>
            <button onClick={dec}>Dec Count by 10</button>
        </div>
    )
}
export default Counter;