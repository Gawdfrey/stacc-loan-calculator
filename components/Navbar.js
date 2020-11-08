import Link from 'next/link'
import Logo from '../components/Logo'

const Navbar = () => (
    <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#">
            <Logo/>
        </a>
    </nav>
)

export default Navbar;