import React from "react";

function Component(){
    var[tech,setTech]=React.useState([])
    function handleTechs(e){
        if(e.target.checked===false){
            var temp = [...tech];
            var i = temp.indexOf(e.target.value);
            temp.splice(i,1);
            setTech([...temp])
          }
          else{
            setTech([...tech,e.target.value])
          }
        }
    return(
        <div className="main">
                <input type="checkbox" onChange={handleTechs}  value='React'/>:ReactJS <br />
                <input type="checkbox" onChange={handleTechs}  value='angular'/>:Angular <br />
                <input type="checkbox" onChange={handleTechs}  value='nodejs'/>:Nodejs  <br />
                <input type="checkbox" onChange={handleTechs}  value='express'/>:Express <br />
                <input type="checkbox" onChange={handleTechs}  value='mongo'/>:Mongodb <br />
                <input type="checkbox" onChange={handleTechs}  value='mongoose'/>:Mongoose <br />
                <input type="checkbox" onChange={handleTechs}  value='mysql'/>:MySql <br />
                <ul>
                    {
                        tech.map((a)=>{
                            return <li>{a}</li>
                        })
                    }
                </ul>
        </div>
    )
}
export default Component;