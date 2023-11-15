import React from "react";

function Courses(){
    var[course,setCourse]=React.useState([
        {
            cname:'PHP',
            trainer:'Ramesh',
            cost:20000
          },
          {
            cname:'CCNA',
            trainer:'Jayaram',
            cost:40000
          },
          {
            cname:'C++',
            trainer:'Kavya',
            cost:20000
          },
          {
            cname:'Java',
            trainer:'Venkat',
            cost:30000
          },
    ])
    return (
        <div>
            {
                course.map((a)=>{
                    return <h1>CourseName:{a.cname}</h1>
                            
                })
            }
        </div>
    )
}
export default Courses;