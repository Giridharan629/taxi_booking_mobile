import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div>
        <div className="navbar">
            <div className="left">
            <div className="elem mail">
                <i class="fa-solid fa-envelope"></i>
                <p>taxico@support.com</p>
            </div>
            <div className="call elem">
                <i class="fa-solid fa-phone"></i>
                <p>(+62) 8896-2220</p>
            </div>
            <div className="tele elem">
                <i class="fa-solid fa-tty"></i>
                <p>(021) 111 444 90</p>
            </div>
            </div>
            <div className="right">
            <p>
                We Provide <span>The Best Service & Discounts </span>For you
            </p>
            </div>
        </div>

    </div>

  )
}

export default Nav