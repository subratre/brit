import React, { Component } from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
class SliderLayer extends Component {

    render() {
        const Container = styled.div`
        position: relative;
        overflow: hidden;
        width: 533px;
        height: 276px;
      `;
      const CarouselUI = ({ children }) => <Container>{children}</Container>;
        const Carousel = makeCarousel(CarouselUI);
        return (
            <>

            <div className="main-banner">
                <div className="banner">
                </div>
<div className="sub-banner">
    <div className="mnc">
    <Carousel defaultWait={3000} className="mm">
    <Slide right>
      <div className="high">
        <h1>Reinventing Your Investments</h1>
        <p>Bringing you lowest investment options with high capital gains & assured rentals</p>
        <button className="layerButton">Know More</button>
      </div>
    </Slide>
    <Slide right>
    <div className="high">
        <h1>Our Innovative Approach Focus</h1>
        <p>Bringing you lowest investment options with high capital gains & assured rentals</p>
        <button className="layerButton">Know More</button>
      </div>
    </Slide>
  </Carousel>
    </div>

</div>
  

            </div>
            </>
        );
    }
}

export default SliderLayer