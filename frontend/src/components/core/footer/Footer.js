import { Link } from 'react-router-dom'
import './footer.scss'

function Footer() {

  return (


    <footer className="footer">
    <div className="footer-container">
      <div className="footer-container-row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><Link to='/about'>about us</Link></li>
            <li><Link to='/'>our services</Link></li>
            <li><Link to='/'>privacy policy</Link></li>
            <li><Link to='/'>affiliate program</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><Link to='/'>FAQ</Link></li>
            <li><Link to='/'>contact us</Link></li>
            <li><Link to='/'>returns</Link></li>
            <li><Link to='/'>order status</Link></li>
            <li><Link to='/'>payment options</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>We offer</h4>
          <ul>
            <li><Link to='/'>hotel</Link></li>
            <li><Link to='/'>transport</Link></li>
            <li><Link to='/'>affordable prices</Link></li>
            <li><Link to='/'>simplified options</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <Link to='/'><i className="fab fa-facebook-f"></i></Link>
            <Link to='/'><i className="fab fa-twitter"></i></Link>
            <Link to='/'><i className="fab fa-instagram"></i></Link>
            <Link to='/'><i className="fab fa-linkedin-in"></i></Link>
          </div>
        </div>
      </div>
      <p className="footer-container-row-p">
        © F.O.U.R - 2023 All Rights Reserved
      </p>
    </div>
  </footer>

  )

}

export default Footer