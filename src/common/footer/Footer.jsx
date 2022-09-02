import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1 className="h1-logo">Shoppex</h1>
            <p>uris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              
             
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li></li>
              <li>brainsagelogistic@gmail.com</li>
              <li>Phone: 09162175123</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
