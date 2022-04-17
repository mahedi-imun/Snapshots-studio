import React from 'react';
import Banner from '../Banner/Banner';
import ChooseMe from '../ChooseMe/ChooseMe';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div style={{backgroundColor:"black"}}>
           <Banner></Banner>
           <Services></Services>
           <ChooseMe></ChooseMe>
          
        </div>
    );
};

export default Home;