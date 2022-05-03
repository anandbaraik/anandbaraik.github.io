import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = ({phrase, link, toAddress}) => {
    return(
        <div className="footer-link">
            {phrase}
            <Link to={toAddress}
                className="footer-link-addr">
                {link}
            </Link>
        </div>
    )
}

export default Footer;