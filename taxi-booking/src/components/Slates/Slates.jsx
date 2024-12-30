import React from 'react'
import "./Slates.css"

const Slates = () => {
  return (
    <div className='slates'>

        <div className="slade">

            <div className="logo">
                <i class="fa-solid fa-dollar-sign"></i>
            </div>

            <h2>Support All Payment</h2>   

            <p>Lorem ipsum dolor sit amet.</p>   

            <div className="logos">
                <i class="fa-brands fa-cc-visa"></i>
                <i class="fa-brands fa-cc-mastercard"></i>    
                <i class="fa-brands fa-cc-apple-pay"></i>
                <i class="fa-brands fa-cc-paypal"></i>
            </div>     
            
        </div>

        <div className="slade">
            <div className="logo">
                <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h2>Safety First</h2>

            <p>Lorem ipsum dolor sit amet.</p>

            <div className="logos">
                <i class="fa-solid fa-money-check-dollar"></i>
                <span>Guarantee</span>
                <i class="fa-solid fa-taxi"></i>
                <span>Quick Ride</span>
            </div>
        </div>

        <div className="slade">
            <div className="logo">
                <i class="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h2>100% Digital</h2>

            <p>Lorem ipsum dolor sit amet.</p>

            <div className="logos">
            <i class="fa-brands fa-apple"></i>
            <span>Apple</span>
            <i class="fa-brands fa-android"></i>
            <span>Android</span>
            </div>
        </div>

    </div>
  )
}

export default Slates