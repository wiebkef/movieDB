import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import david from './David.jpg';
import liliia from "./Liliia.jpg";
import samuel from "./Samuel.jpg";


function AboutUs() {
  return (
    <div className='about-us my-5'>
      <h2 style={{textAlign: "center", color:'#E9B221'}}>Meet our team</h2>
     <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-30"
         src={david}
         alt="First slide"
         style={{width:"40%", margin: "auto", borderRadius: "20px"}}
       />
       <Carousel.Caption>
       <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '10px', width:"40%", margin:'auto'}}>
              <h3 style={{ color: 'white' }}>Executive Chef David</h3>
              <p style={{ color: 'white' }}>David has won every possible cooking competition in the world. One of the most experienced chefs who knows how to turn your burger into a work of art.</p>
        </div>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-30"
         src={liliia}
         alt="Second slide"
         style={{width:"40%", margin: "auto", borderRadius: "20px"}}
       />

       <Carousel.Caption>
       <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '10px', width:"40%", margin:'auto'}}>
              <h3 style={{ color: 'white' }}>Junior Chef Liliia</h3>
              <p style={{ color: 'white' }}>A photographer, publicist in the past, now a junior chef, she knows how to translate a classified recipe into plain language so that everyone can repeat it at home.</p>
        </div>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-30"
         src={samuel}
         alt="Third slide"
         style={{width:"40%", margin: "auto", borderRadius: "20px"}}
       />

       <Carousel.Caption>
       <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '10px', width:"40%", margin:'auto'}}>
              <h3 style={{ color: 'white' }}>Head Chef Samuel</h3>
              <p style={{ color: 'white' }}>
                Samuel is a humble owner of 3 restaurants where the first people of the country have breakfast every day. Having vast experience in the world of cooking, he knows exactly which recipes are worth your attention.
              </p>
        </div>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
   </div>
 );
}
  
export default AboutUs
