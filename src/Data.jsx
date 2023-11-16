import React from "react";

function Students(){
  var[order,setOrder]=React.useState('asc')
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
    function sortstudent(key){
      var temp = [...student];
        if(order==='asc'){
          temp.sort((s1,s2)=>{
            if(s1[key]>s2[key]){
              return 1
            }
            else{
              return -1
            }
          })
        }
        else{
          temp.sort((s1,s2)=>{
            if(s1[key]>s2[key]){
              return -1
            }
            else{
              return 1
            }
          })
        }
      (order==='asc')?setOrder('dsc'):setOrder('asc')
      setStudent([...temp])
    }
    
    return(
        <div className="main">
             <h1>Students</h1>
            {
             <table border={2} width={750}>
                <thead>
                    <th onClick={()=>{sortstudent('firstname')}}>Firstname</th>
                    <th onClick={()=>{sortstudent('lastname')}}>Lastname</th>
                    <th onClick={()=>{sortstudent('gender')}}>gender</th>
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
            }
        </div>
    )
}
export default Students;