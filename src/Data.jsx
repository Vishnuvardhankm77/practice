import React from "react";

function Likes(){
    var[count,setCount]=React.useState(0);
        function like(){
            setCount(count+1)
        }
        function dislike(){
            setCount(count-1)
        }
    return(
        <div className="main">
                <button onClick={like}>Like</button>{count}
                <button onClick={dislike}>Dislike</button>{count}
        </div>
    )
}
export default Likes;