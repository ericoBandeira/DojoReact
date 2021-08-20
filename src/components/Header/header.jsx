import React from 'react'
import './styles.css'

export function Header(){
    return(
        <div className="HeaderCss">
            <div className="HeaderLogo">Sportfly.</div>
            <div className="HeaderPages">
                <a>About</a>
                <a>Exercises</a>
                <a>Pricing</a>
                <a>Blog</a>
            </div>
        </div>
    );
}