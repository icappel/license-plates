import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">License Plate Reporter</Link>
                <Link to="/search" className="navbar-item">Search Plates</Link>
            </div>
        </nav>
    )
}

export default NavBar