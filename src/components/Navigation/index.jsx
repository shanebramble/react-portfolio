import React from 'react'

function Navigation() {

    const sections = [
        {
            name: "About Me"
        },
        {
            name: "Portfolio"
        },
        {
            name: "Contact"
        }
    ]
    return (
        <nav>
            <ul>
                {sections.map((section) => (
                    // eslint-disable-next-line
                    <li key={section.name}><a href="#">{section.name}</a></li>
                ))}
                <li>
                    <a href={require("../../assets/docs/Shane_Bramble-Wade_Resume.PDF").default} target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
