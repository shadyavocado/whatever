import React from 'react'
import './Footer.css'
function Footer() {
  return (
      <footer>
            <div class="footer">
            <div class="footer-1"> <h1>Information</h1>
              <p><a href="#">About us</a><br/>
                  <a href="#">Delivery imformation</a><br/>
                  <a href="#">Privacy policy</a><br/>
                  <a href="#">Site Map</a><br/></p></div>
      
                  <div class="footer-2">   
                      <h1>Customer Service</h1>
                      <p><a href="#">Contact</a><br/>
                          <a href="#">Returns</a><br/>
                          <a href="#">Order History</a><br/>
                          <a href="#">Register Account</a><br/>
                          <a href="#">International Shipping Rates</a><br/></p></div>
      
                          <div class="footer-3"><p>Stay up to date with our news and promotions<br/> by signing up for our weekly newsletter<br/>
                              <input type="text" id="user_email_signin"/><button><i class="fa-solid fa-magnifying-glass fa-sm"></i></button>
                             </p></div></div>
              <hr/>
              <p id="p_footer">© 2023 footer LLC. All Rights Reserved.</p>
                          </footer>   
  )
}

export default Footer
