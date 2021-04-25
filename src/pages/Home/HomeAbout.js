import React from 'react';
import AabouImage from '../../assets/images/aboutimage.jpg'
import Slide from 'react-reveal/Slide';

const HomeAbout = () => {
    return (
       <>
       <div className="about-section">
         
           <div className="about-content-section">
               <Slide left>
           <div className="about-left">
           <div className="title-about">
               <h2>
               Brik itt <br/>Real Pride Of Ownership <span className="cus-dotAllpages"></span>
               </h2>
           </div>
                <p style={ {marginTop: '30px'} }>
                BRIK itt is India’s No. 1 Proptech Company unlocking 
                Fractional Ownership in Private & Residential Real Estate. 
                It brings to the people the opportunity to own Exclusive luxury 
                residential & vacational assets. So, we enable like minded people 
                to become owner of world class premium assets at a fraction of it’s cost. 
                Backed by our unique BRIK model, powered by new age technology. 
                Our decade old experience and our tried & tested working module buying
                 real estate has become transparent and easy affair. Owning your dream 
                 property has never been so easy before.
                </p>

                <button style={ {marginTop: '30px'}} className="layerButton">Download Brochure</button>
            </div>
            </Slide>
            <Slide right>
            <div className="about-right" >

<div className="nince" style={ {backgroundImage: `URL(${AabouImage})`,width: '65vw',
                
                height: '70vh',
                backgroundSize: '94% 100%',
                backgroundPosition: 'center center',
                position: 'absolute', top: '-173px',backgroundRepeat: 'no-repeat'}}>
    </div>
    
            </div>
            </Slide>
           </div>
       </div>
       </>
    );
};

export default HomeAbout;