import { Link } from "react-router-dom";

const Footer = props => {
    return (
        <footer id="footer">
            <div className="footer-compartment">
                <Link to="/">
                    <img className="logo-footer" alt="heap-overflow-logo" />
                </Link>
            </div>
            <div className="footer-compartment footer-compartment-border">
                <Link className="footer-link" to="/login">Log In</Link>
                <Link className="footer-link" to="/signup">Sign Up</Link>
                <Link className="footer-link" to="/questions">Questions</Link>
            </div>
            <div className="footer-compartment footer-compartment-border">
                <Link className="footer-link" to="/404">About</Link>
                <a className="footer-link" href="https://github.com/matthewgoodbar">Github</a>
                <Link className="footer-link" to="/404">LinkedIn</Link>
            </div>
        </footer>
    );
};

export default Footer;