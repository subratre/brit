import React from 'react';
import Bannerlayer from './SliderLayer'
import AboutSection from './HomeAbout'

const Index = (props) => {

    console.log(props);
    return (
        <>
            <Bannerlayer />
            <AboutSection />
        </>
    );
};

export default Index;