function Header() {

    return (
        <nav className="cyan darken-3">
            <div className="nav-wrapper">
                <a href="http://localhost:3000/" className="brand-logo">Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="http://localhost:3000/">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
