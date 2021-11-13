import React from 'react'

function Navigation() {
    return (
        <nav>
            <ul>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
                <li>
                    <a href={require("../../assets/docs/Shane_Bramble-Wade_Resume.PDF").default} target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
