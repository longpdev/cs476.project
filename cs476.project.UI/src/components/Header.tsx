import {Link, NavLink} from 'react-router-dom'

export default function Header ()
{
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li>
                    <NavLink to="/FindAPet">
                        Find a Pet
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}