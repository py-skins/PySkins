import { Link, NavLink } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-desc">
          <h4>Introducing PySkins: Created From Gamers, For Gamers!</h4>
          <p>
            PySkins is a cutting-edge website developed by a team of skilled
            developers passionate about the Counter-Strike 2 game. At PySkins,
            we've leveraged the power of Python for the backend and React for
            the frontend to create a seamless and intuitive interface.
          </p>

          <p>
            Introducing PySkins: Your Ultimate Destination for CS2 Skin
            Gambling! Join us at PySkins and elevate your gaming experience to
            new heights. Get ready to immerse yourself in the world of CS2 skin
            gambling like never before!
          </p>

          <p>Copyright © PySkins 2024 All Rights Reserved</p>
        </div>
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li>
              <Link to="/about">about us</Link>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <Link to="/casino">Casino Games</Link>
            </li>
            <li>
              <Link to="/cases">Case Opening</Link>
            </li>
            <li>
              <Link to="/knives">Knives</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <Link to="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
