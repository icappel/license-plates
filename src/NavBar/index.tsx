import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar is-info" aria-label="main navigation">
            <div className="container is-max-desktop is-flex is-justify-content-space-between">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">License Plate Reporter</Link>
                </div>
                <div className="navbar-brand">
                    <Link to="/search" className="navbar-item">Search Plates</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar