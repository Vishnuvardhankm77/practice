import React , { useState, useEffect } from "react";
import moment from "moment"
function Articles(){
    var[data,setData]=React.useState([
        {
            id: 1,
            title: 'the WET Codbase',
            date: new Date(2020, 9, 4),
            length: 11,
            snippet: `Come waste your time with me`,
          },
          {
            id: 2,
            title: 'goodby, clean code',
            date: new Date(2019, 10, 22),
            length: 5,
            snippet: `Let clean code guide you. Then let it go.`,
          },
          {
            id: 3,
            title: 'my decade in review',
            date: new Date(2018, 7, 11),
            length: 5,
            snippet: `A personal reflection.`,
          },
          {
            id: 4,
            title: 'what are the react team principles',
            date: new Date(2015, 5, 4),
            length: 5,
            snippet: `UI Before API.`,
          }
    ])
    const getStorageTheme = () => {
        let theme = 'light-theme';
        if (localStorage.getItem('theme')) {
          theme = localStorage.getItem('theme');
        }
        return theme;
      };
    var toggleTheme = () => {
        if (theme === 'light-theme') {
          setTheme('dark-theme');
        } else {
          setTheme('light-theme');
        }
      };
      useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
      }, [theme]);
    return(
        <div>
            <div className="main">
            <h1>Overreacted</h1>
            {
                theme==='dark-theme' && <i class="bi bi-toggle-on" style={{fontSize:'40px'}} onClick={toggleTheme}></i>
            }
            {
                theme==='light-theme' && <i class="bi bi-toggle-off"  style={{fontSize:'40px'}} onClick={toggleTheme}></i>
            }
            </div>
            <div className="maindiv">{
                data.map((a)=>{
                    return (
                        <div className="div">
                            <h1 style={{color:"brown"}}>{a.title}</h1>
                            <span>{moment(a.date).format('dddd Do, YYYY')}</span>,
                            <span>{a.length} min read</span>
                            <h4>{a.snippet}</h4>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Articles;