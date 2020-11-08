import Link from 'next/link'
import Logo from '../components/Logo'


// Creates the navbar which only consists of the Logo component.
const Navbar = () => (
    <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#">
            <Logo/>
        </a>
    </nav>
)

export default Navbar;