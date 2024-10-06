import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <img src="" alt="" />
      <div className="footer-container">
        <div className="product">
          <h1>Product</h1>
          <p>Features</p>
          <p>Pricing</p>
        </div>
        <div className="resources">
          <h1>Resources</h1>
          <p>Blog</p>
          <p>User guides</p>
          <p>Webinars</p>
        </div>
        <div className="company">
          <h1>Company</h1>
          <p>About us</p>
          <p>Contact us</p>
        </div>
        <div className="plans">
          <h1>Plans & Pricing</h1>
          <p>Presonal</p>
          <p>Start up</p>
          <p>Organization</p>

        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Brand, inc privacy Terms Sitemap</p>
      </div>

    </div>
  )
}

export default Footer