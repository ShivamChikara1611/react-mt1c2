import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div>
    <Link to="/" className="link-el">
      <nav>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </nav>
    </Link>
    <div className="no-con">
      <img
        className="no-img"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <h1 className="noh">Page Not Found</h1>
      <p className="nop">We are sorry, the page you requested could not be found</p>
    </div>
  </div>
)

export default NotFound
