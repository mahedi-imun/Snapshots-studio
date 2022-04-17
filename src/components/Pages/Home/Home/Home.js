import React from 'react';
import Banner from '../Banner/Banner';
import MyWorks from '../MyWorks/MyWorks';
import Services from '../Services/Services';

const Home = () => {
    
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
          <MyWorks></MyWorks>
        </div>
    );
};

export default Home;