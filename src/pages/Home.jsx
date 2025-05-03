import * as React from 'react';
import "./Home.scss";

const Home = () => {
    return (
        <iframe className="WheelMap" src="https://wheelmap.org?embedded=true&embedToken=12345&lat=52.5212&lon=13.4104" 
                allow="geolocation"></iframe>        
    );
}

export default Home;
