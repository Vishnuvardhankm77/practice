import React from "react";

function Students(){
    var[student,setStudent]=React.useState([
        {
            firstname:'Ravi',
            lastname:'Sastri',
            gender:'male'
          },
          {
            firstname:'Sachin',
            lastname:'Tendulkar',
            gender:'male'
          },
          {
            firstname:'Mithali',
            lastname:'Raj',
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
          }
    ])

    function sortStudents(key,order){
        var temp = [...student];
        temp.sort((s1,s2)=>{
          if(order==='asc'){
            if(s1[key]>s2[key]){
              return 1
            }
            else{
              return -1
            }
          }
          if(order==='dsc'){
            if(s1[key]>s2[key]){
              return -1
            }
            else{
              return 1
            }
          }
        });
        setStudent([...temp])
      }
      
    return (
        <div className="main">
            <h1>Students</h1>
            <button onClick={()=>{sortStudents('firstname','asc')}}>sort by FirstName(A-z)</button>
            <button onClick={()=>{sortStudents('firstname','dsc')}}>sort by FirstName(z-A)</button>
            <button onClick={()=>{sortStudents('lastname','asc')}}>sort by LastName(A-z)</button>
            <button onClick={()=>{sortStudents('lastnme','dsc')}}>sort by LastName(z-A)</button>
            <button onClick={()=>{sortStudents('gender','asc')}}>sort by Gender(z-A)</button>
            <button onClick={()=>{sortStudents('gender','dsc')}}>sort by Gender(z-A)</button>
            <table border={2} width={700}>
                <thead>
                    <th>Firstname</th>
                    <th>lastname</th>
                    <th>Gender</th>
                </thead>
                <tbody>{
                    student.map((a)=>{
                        return  <tr>
                                    <td>{a.firstname}</td>
                                    <td>{a.lastname}</td>
                                    <td>{a.gender}</td>
                                </tr>
                    })
                }
                </tbody>
            </table>
        </div>

    )
}
export default Students;