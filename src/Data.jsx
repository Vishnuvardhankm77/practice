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
          },
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

    return(
        <div className="main">
            <h1>Students</h1>
            <input type="radio"  name='sortkey'onChange={()=>{sortStudents('firstname','asc')}}/>Sort by First Name (A-z) &nbsp;&nbsp;&nbsp;
            <input type="radio"  name='sortkey'onChange={()=>{sortStudents('firstname','dsc')}}/>Sort by First Name (z-A)<br/>
            <input type="radio"  name='sortkey'onChange={()=>{sortStudents('lastname','asc')}}/>Sort by Last Name (A-z) &nbsp;&nbsp;&nbsp;
            <input type="radio"  name='sortkey'onChange={()=>{sortStudents('lastname','dsc')}}/>Sort by Last Name (z-A)<br/>
            <input type="radio"  name='sortkey'onChange={()=>{sortStudents('gender','asc')}}/>Sort by Gender (A-z) &nbsp;&nbsp;&nbsp;
            <input type="radio"  name='sortkey'onChange={()=>{sortStudents('gender','dsc')}}/>Sort by Gender (z-A)
            <table border={2} width={700}>
                <thead>
                    <th>FirstName</th>
                    <th>lasstName</th>
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