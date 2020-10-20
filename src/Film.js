import React from 'react';
import './App.css';
const Film = ({title, number, release}) =>{
    return(
        <div className="gridDisplay">
            <ul>
                <li><h2>Episode {number}:</h2> 
                    <p>Title: {title}</p>
                    <p>Released date: {release}</p>
                </li>
               
            </ul>
            
        </div>
    );
}

export default Film;