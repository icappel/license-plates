
function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    License Plate Reporter
                </a>
                <a className="navbar-item" href="/search">
                        Search Plates
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar