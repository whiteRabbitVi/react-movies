function Footer() {
    return (
        <footer className="page-footer cyan darken-3">
            <div className="footer-copyright">
                <div className="container">
                    © { new Date().getFullYear() } Copyright Text
                    <a className="grey-text text-lighten-4 right" href="http://localhost:3000/">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;