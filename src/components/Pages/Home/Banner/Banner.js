import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';
import bannerImg1 from '../../../../images/Banner/banner1.png'
import bannerImg2 from '../../../../images/Banner/banner2.png'
import bannerImg3 from '../../../../images/Banner/banner3.png'
const Banner = () => {
    // animation init 
    AOS.init();
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerImg1}
                    alt="First slide"
                />
                <Carousel.Caption >
                    <h2 data-aos="fade-right" style={{ color: '#fdee17' }}>Snapchat studio</h2>
                    <h3>Engagement Photography </h3>
                    <p>engagement pics in a way that portray ur happiness & love for each other.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerImg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2 data-aos="fade-right" style={{ color: '#fdee17' }}>Snapchat studio</h2>
                    <h3>After wedding photography</h3>
                    <p>Whatever your reason, a post-wedding photo session can be just the romantic idea your relationship needs, to guarantee you get the wedding photography shots</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerImg3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2 data-aos="fade-right" style={{ color: '#fdee17' }}>Snapchat studio</h2>
                    <h3>Wedding family photography</h3>
                    <p>Professional advice on how to plan your wedding family formals shot list for ... the wedding party & immediate family portraits right after your first look.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;