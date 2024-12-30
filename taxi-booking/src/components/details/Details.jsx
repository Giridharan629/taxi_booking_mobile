import React from 'react'
import "./style.css"
const Details = () => {
  return (
    <div className='details'>

        <div className="slate">

            <div className="form-elements">
                <p>Name</p>
                <input type="text" placeholder='Your Name' />
            </div>
            <div className="form-elements">
                <p>Phone Number</p>
                <input type="text" placeholder='Telephone' />
            </div>
            <div className="form-elements">
                <p>Passengers</p>
                <input type="text" placeholder='Passengers' />  
            </div>
            <div className="form-elements">
                <p>Pickup Date</p>
                <input type="date"/>
            </div>
            <div className="form-elements">
                <p>Vehicle</p>
                <input type="text" placeholder='Select Vehivle' />
            </div>
            <div className="form-elements">
                <p>Pick Up Address</p>
                <input type="text" placeholder='Start Destination' />
            </div>
            <div className="form-elements">
                <p>Drop Off Address</p>
                <input type="text" placeholder='End Destination' />
            </div>
            <div className="form-elements">
                <button> Book Taxi Now</button>
            </div>

        </div>
    </div>
  )
}

export default Details