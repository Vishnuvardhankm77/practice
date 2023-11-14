import React from "react";

function Component(){
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
    return (
        <div>
            <h1>React Students</h1>
            <table border={2}>
                <thead>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Gender</th>
                </thead>
                <tbody>{
                    student.map((a)=>{
                        return  <tr>
                                    <td>{a.firstname}</td>
                                    <td>{a.lastname}</td>
                                    <td>{a.age}</td>
                                    <td>{a.salary}</td>
                                    <td>{a.gender}</td>
                                </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default Component;