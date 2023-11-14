import React from "react";
import axios from "axios";
function Drinks(){
    var[tails,setTails]=React.useState([])
    React.useEffect(()=>{
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((res,data)=>{
            setTails(res.data)
        })
    },[])
    console.log(tails)

    function home(){

    }

    return(
        <div >
            <div className="home">
                <div style={{color:"green"}}>The Cocktail DB</div>
                <div onClick={home()}>Home</div>
                <div >About</div>
            </div>
            <div className="search">
                <h3 style={{fontFamily:"Segoe UI",color:"green"}}>Search your favorite Cocktail</h3>
                <input type="text" className="inp" placeholder="Enter Here"/>
            </div>
                <h1 style={{fontFamily:"Segoe UI"}}>Cocktails</h1>
           <div className="main">
           {
                tails.drinks?.map((a)=>{
                    return  <div className="maindiv">
                                <img className="img" src={a.strDrinkThumb} alt="" />
                                <div className="div">
                                    <h1>{a.strDrink}</h1>
                                    <h3>{a.strGlass}</h3>
                                    <h5>{a.strAlcoholic}</h5>
                                    <button className="btn" >Details</button>
                                </div>
                            </div>
                })
            }
           </div>
        </div>
    )
}
export default Drinks;