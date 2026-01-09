import React from "react";
import '../styles.css';

export default function Header() {
    const currentYear = new Date().getFullYear();
    let currMonth= new Date().getMonth();
    return (
        <footer className="footer">
            <p className='footer-text'>©{currentYear} {currMonth}moviedux</p>
        </footer>
    );

}