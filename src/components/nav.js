import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <Link to='/About'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/Websites'>Websites</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact Me</Link>
                    </li>
                    <li>
                        <Link to='/Resume'>Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;