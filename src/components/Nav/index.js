import React from 'react';
import Link from 'react-dom';

function Nav() {
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
                </ul>
            </div>
        </nav>
    )
}

export default Nav;