import React from "react";

function Students(){
    var[student,setStudent]=React.useState([
        {
            "firstname": "praveen",
            "lastname": "gubbala",
            "age": 36,
            "gender": "female",
            "city": "hyd",
            "salary": 10000
          },
          {
            "firstname": "srikanth",
            "lastname": "gubbala",
            "age": 32,
            "gender": "male",
            "city": "bengaluru",
            "salary": 20000
          },
          {
            "firstname": "pradeep",
            "lastname": "reddy",
            "age": 21,
            "gender": "male",
            "city": "hyd",
            "salary": 25000
          },
          {
            "firstname": "preeti",
            "lastname": "haia",
            "age": 31,
            "gender": "female",
            "city": "delhi",
            "salary": 30000
          },
          {
            "firstname": "kiran",
            "lastname": "gubbala",
            "age": 52,
            "gender": "male",
            "city": "bengaluru",
            "salary": 29000
          },
          {
            "firstname": "jayaram",
            "lastname": "reddy",
            "age": 54,
            "gender": "male",
            "city": "mumbai",
            "salary": 99000
          }
    ])
     function asc(){
        var temp=[...student];
        temp.sort((a,b)=>{
            if(a.firstname>b.firstname){
                return 1
            }
            else{
                return -1
            }
        });
        setStudent([...temp])
     }
     function dsc(){
        var temp=[...student];
        temp.sort((a,b)=>{
            if(a.lastname>b.lastname){
                return 1
            }
            else{
                return -1
            }
        });
        setStudent([...temp])
     }
    var[newstudent,setNewstudent]=React.useState({
        firstname:"",
        lastname:"",
        age:"",
        gender:"",
        city:""
    })
    function newfn(e){
        setNewstudent({...newstudent,firstname:e.target.value})
    }
    function newln(e){
        setNewstudent({...newstudent,lastname:e.target.value})
    }
    function newage(e){
        setNewstudent({...newstudent,age:e.target.value})
    }
    function newgender(e){
        setNewstudent({...newstudent,gender:e.target.value})
    }
    function newcity(e){
        setNewstudent({...newstudent,city:e.target.value})
    }
    function add(){
        setStudent([...student,{...newstudent}])
    }
    return(
        <div>
            <h1>React Students</h1>
            <input type="text"  onKeyUp={newfn}/><br />
            <input type="text"  onKeyUp={newln}/><br />
            <input type="text"  onKeyUp={newage}/><br />
            <input type="text"  onKeyUp={newgender}/><br />
            <input type="text"  onKeyUp={newcity}/><br />
            <button onClick={add}>Add Student</button>
            <table border={2}>
                <thead>
                    <th onClick={asc}>firstname</th>
                    <th onClick={dsc}>lastname</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>city</th>
                </thead>
                <tbody>
                    {
                    student.map((a)=>{
                        return  <tr>
                                    <td>{a.firstname}</td>
                                    <td>{a.lastname}</td>
                                    <td>{a.age}</td>
                                    <td>{a.gender}</td>
                                    <td>{a.city}</td>
                                </tr>
                    }) 
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Students;