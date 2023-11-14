import React from "react";

function Component(props){
    var[count,setCount]=React.useState(props.p);
    function inc(){
        setCount(count+ props.q)
    }
    function dec(){
        setCount(count- props.q)
    }
    return(
        <div className="main">
            <h1>Count:{count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default Component;