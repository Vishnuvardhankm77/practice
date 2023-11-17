import React from "react";

function Table(){
  var[student,setStudent]=React.useState([
    {
      firstname:'ravi',
      lastname:'sastri',
      gender:'male'
    },
    {
      firstname:'sachin',
      lastname:'tendulkar',
      gender:'male'
    },
    {
      firstname:'mithali',
      lastname:'raj',
      gender:'female'
    },
    {
      firstname:'Rohit',
      lastname:'Sharma',
      gender:'male'
    },
    {
      firstname:'Smriti',
      lastname:'Mandhana',
      gender:'female'
    },
    {
      firstname:'Virat',
      lastname:'Kohli',
      gender:'male'
    },
  ])
  return(
    <div className="main"> 
      <center>
      <table border={2}>
        <thead>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Gender</th>
        </thead>
        <tbody>{
          student.map((a)=>{
            return  <tr style={a.gender==="male" ? {backgroundColor:"lightblue"}:{backgroundColor:"lightpink"}}>
                        <td>{a.firstname}</td>
                        <td>{a.lastname}</td>
                        <td>{a.gender}</td>
                    </tr>
          })
        }
        </tbody>
      </table>
      </center>
    </div>
  )
}
export default Table;