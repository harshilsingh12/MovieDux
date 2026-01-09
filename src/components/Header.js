import React from "react";
import '../styles.css';

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src="logo.png" alt="moviedux" /> 
            <h2>It's time to watch movies</h2>      
        </div>
    );
}