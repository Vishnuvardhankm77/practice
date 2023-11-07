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
    return(
        <div >
            <div className="home">
                <div>The Cocktail DB</div>
                <div>Home</div>
                <div>About</div>
            </div>
            <div className="search">
                <h3>Search your favorite Cocktail</h3>
                <input type="text" className="inp"/>
            </div>
           <div className="main">
           {
                tails.drinks?.map((a)=>{
                    return  <div className="maindiv">
                                <img className="img" src={a.strDrinkThumb} alt="" />
                                <div>
                                    <h1>{a.strDrink}</h1>
                                    <h3>{a.strGlass}</h3>
                                    <h3>{a.strAlcoholic}</h3>
                                    <button>Details</button>
                                </div>
                            </div>
                })
            }
           </div>
        </div>
    )
}
export default Drinks;