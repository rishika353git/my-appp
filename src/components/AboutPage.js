import React, { useEffect } from 'react';
import Header from "./Header";
import Footer2 from './Footer2';
import About from './About';
const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Header /> {/* Add Header at the top */}
     
           <About />
            <Footer2 /> {/* Use Footer2 instead of Footer */}
        </>
    );
};

export default AboutPage;
