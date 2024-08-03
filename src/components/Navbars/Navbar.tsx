import React from 'react'
import exitlogo from '../../components/pngandicons/doorexit.png'

export default function hamburgerNavbar() {
  return (
    <div>
      
      <div id='navigationTop' >
            <ul className="nav nav-pills d-flex justify-content-end ">
              <div className='container d-flex flex-column' id="navigationTopContianer">
                <div className='row' id="navigationToprow">
                  <div className='column col-md-2' id="myworkColumn">
                    
                      <p className="nav-link " id="myWork" style={{ color: 'black'}}>MyWork</p>
                    
                  </div> 
                  <div className='column col-md-6' id="optionsColumn">
                    <li className="nav-item ">
                      <a className="nav-link " id='profile' href="#" style={{ color: 'black' }}>Profile</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " id="aboutUs" href="#" style={{ color: 'black' }}>About us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" id="contact" href="#" style={{ fontSize: 'auto', color: 'black', backgroundColor: "#9d9dff" }}>Contact</a>
                    </li>
                    <li className="nav-item">
                      <img src={exitlogo} className='nav-icon' ></img>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " id="exit" href="#" >Exit</a>
                    </li>
                  </div>
                </div>
              </div>
            </ul>


          </div>

    </div>
  )
}
