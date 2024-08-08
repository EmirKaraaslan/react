import React from 'react'
import phoneIcon from '../pngandicons/phone-call.png'
import '../../styles/contact.scss'
import { useMediaQuery } from 'react-responsive';
import Navbar from  "./../Navbars/Navbar";
import BurgerNavbar from '../Navbars/burgerNavbar';
import NavbarformobileFancysidebar from '../Navbars/NavbarformobileFancysidebar';

export default function Card() {
  const isWideScreen = useMediaQuery({ query: "(min-width: 769px)" });
  const isNarrowScreen = useMediaQuery({ query: "(max-width: 768px)" });


  return (

    <div>

        {isWideScreen && <Navbar/>}
        {isNarrowScreen && <BurgerNavbar />}
        


<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:wght@100..900&display=swap" rel="stylesheet" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
    <div className="card mx-auto my-5 d-flex flex-column" id="cardItselfcontact" style={{backgroundColor:"#fcf5f7"}}   >
    <div className='card-body d-flex flex-column' id="cardbodycontact">

      <div className='container d-flex flex-column' >



        <div className='row' id="row">
          <div className='col-md-6'>
            <h5 id='getintouch' style={{ fontSize: "40px", fontFamily: ("Figtree"), fontWeight: "800", textAlign: "left" }}>Get in  <span style={{ fontFamily: ("Figtree"), color: "#ab6def", fontWeight: "800" }}>Touch</span></h5>
            <p style={{ fontSize: "12px", textAlign: "left" }}>Enim tempor eget pharetra facilis sed
              maecans adipicscin.Eu leo molstie non id blanditt netus.
            </p>

            <form action='submit' method='post'>
              <input type='name' id='namecontact' name='name' placeholder='Name *' style={{ borderColor: "#dfdbdf", borderStyle: "groove", textAlign: "left", border: "1px solid #ccc" }}></input>
            </form>

            <form action='submit' method='post'>
              <input type='email' id='emailcontact' name='email' placeholder='Email' style={{ borderColor: "#dfdbdf", borderStyle: "groove", border: "1px solid #ccc" }}></input>
            </form>

            <form action='submit' method='post'>
              <input type='number' id='phonenumbercontact' name='phonenumber' placeholder='Phone number' style={{ borderColor: "#dfdbdf", borderStyle: "groove", border: "1px solid #ccc" }}></input>
            </form>

            <button type='submit' className='btn ' id="send-button" style={{ background: "#a46ff2", width: "300px", height: "35px", color: "white", fontFamily: "" }}>SEND</button>

            <div className='container mt-4' id="secondContainer" style={{ objectFit: "cover", width: "100%", height: "100%" }}>

              <ul className="nav nav-pills d-flex justify-content-center ">



                <li className="nav-item" id="phoneIconcontact">
                  <img src={phoneIcon} style={{ width: "30px", height: "30px" }} />
                </li>




                <li className="nav-item">
                  <svg id="fax" width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.0625 0.640625V5.5625H6.09375V3.59375H0.1875V21.3125H2.15625V22.2969C2.15625 23.0967 2.44336 23.7837 3.01758 24.3579C3.6123 24.9526 4.30957 25.25 5.10938 25.25C5.90918 25.25 6.59619 24.9526 7.17041 24.3579C7.76514 23.7837 8.0625 23.0967 8.0625 22.2969V21.3125H23.8125V5.5625H19.875V0.640625H8.0625ZM10.0312 2.60938H17.9062V7.53125H10.0312V2.60938ZM2.15625 5.5625H4.125V19.3438H2.15625V5.5625ZM6.09375 7.53125H8.0625V9.5H19.875V7.53125H21.8438V19.3438H6.09375V7.53125ZM9.04688 11.4688V13.4375H11.0156V11.4688H9.04688ZM12.9844 11.4688V13.4375H14.9531V11.4688H12.9844ZM16.9219 11.4688V13.4375H18.8906V11.4688H16.9219ZM9.04688 15.4062V17.375H11.0156V15.4062H9.04688ZM12.9844 15.4062V17.375H14.9531V15.4062H12.9844ZM16.9219 15.4062V17.375H18.8906V15.4062H16.9219ZM4.125 21.3125H6.09375V22.2969C6.09375 22.5635 5.99121 22.7993 5.78613 23.0044C5.60156 23.189 5.37598 23.2812 5.10938 23.2812C4.84277 23.2812 4.60693 23.189 4.40186 23.0044C4.21729 22.7993 4.125 22.5635 4.125 22.2969V21.3125Z" fill="black" />
                  </svg>

                </li>
                <li className="nav-item">
                  <svg id="mailicon" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.95455 0.625V2.59624L0.75 6.63565V23.375H25.5682V6.63565L19.3636 2.59624V0.625H6.95455ZM9.02273 2.69318H17.2955V10.6428L13.1591 13.3249L9.02273 10.6428V2.69318ZM10.0568 4.76136V6.82955H16.2614V4.76136H10.0568ZM6.95455 5.0522V9.28551L3.6907 7.18501L6.95455 5.0522ZM19.3636 5.0522L22.6275 7.18501L19.3636 9.28551V5.0522ZM10.0568 7.86364V9.93182H16.2614V7.86364H10.0568ZM2.81818 9.09162L13.1591 15.7809L23.5 9.09162V21.3068H2.81818V9.09162Z" fill="black" />
                  </svg>

                </li>

              </ul>




            </div>








          </div>
          <div className='col-md-4' id="harita">
            
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.061869747894!2d106.80969804080183!3d-6.193453765073586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f79cf7858835%3A0xaf6e1a646a61bf2a!2sKebon%20kacang%2042!5e0!3m2!1str!2str!4v1721918486513!5m2!1str!2strhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.061869747894!2d106.80969804080183!3d-6.193453765073586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f79cf7858835%3A0xaf6e1a646a61bf2a!2sKebon%20kacang%2042!5e0!3m2!1str!2str!4v1721918486513!5m2!1str!2str" style={{ objectFit: "cover", width: "100%", height: "100%" }}></iframe>
            </div>
          


        </div>


      </div>



    </div>
  </div>
  </div>
  )
}
