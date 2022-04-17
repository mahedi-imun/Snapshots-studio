import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'aos/dist/aos.css';
import serviceImg1 from '../../../../images/services/service1.jpg'
import serviceImg2 from '../../../../images/services/service2.jpg'
import serviceImg3 from '../../../../images/services/service3.jpg'
import Service from './Service';
const Services = () => {
    const services = [
        {name:'Birthday Celebration (3 Hrs)',
         img:serviceImg1,
         description:'Moreover, you do not have to wait for a moment to celebrate your achievements when your birthday is around the corner.',
         price:199,
         ratings:4.5,
         id:1,
        },
        {name:'Engagement/Anniversary (6 Hrs)',
         img:serviceImg2,
         description:'Life is beautiful, yet so fragile, and I think that means that we should celebrate it as often as possible because life is too short not to',
         price:499,
         ratings:5,
         id:2,
        },
        {name:'Wedding/Reception (10 Hrs)',
         img:serviceImg3,
         description:' capture memories for brides and grooms, creating a photographic narrative of wedding ceremonies',
         price:999,
         ratings:4.9,
         id:3,
        },
    ]
    // animation init 
    AOS.init();
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" >
            <h4 style={{color:'#FDEE17'}} className='text-center mt-5 mb-5'>My Services</h4>
            <div  className='d-flex flex-wrap justify-content-around text-center container  mx-auto'>
                {
                    services.map(service =><Service
                    key={service.id}
                    service={service}
                    >
                    </Service> )
                }
            </div>
        </div>
    );
};

export default Services;