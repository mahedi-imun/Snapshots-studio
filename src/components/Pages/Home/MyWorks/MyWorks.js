import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResponsiveGallery from 'react-responsive-gallery';
import image1 from '../../../../images/MyWorks/works1.jpg'
import image2 from '../../../../images/MyWorks/works2.jpg'
import image3 from '../../../../images/MyWorks/works3.jpg'
import image4 from '../../../../images/MyWorks/works4.jpg'
import image5 from '../../../../images/MyWorks/works5.jpg'
import image6 from '../../../../images/MyWorks/works6.jpg'
import image7 from '../../../../images/MyWorks/works7.jpg'
import image8 from '../../../../images/MyWorks/works8.jpg'
import image9 from '../../../../images/MyWorks/works9.jpg'
import image10 from '../../../../images/MyWorks/works10.jpg'
const MyWorks = () => {
    // animation init 
    AOS.init();
    
const images=[
    {src: image1 },
    {src: image2 },
    {src: image3 },
    {src: image4 },
    {src: image5 },
    {src: image6 },
    {src: image7 },
    {src: image8 },
    {src: image9 },
    {src: image10 },
  ];
    return (
        <div className='container'>
            <h4 style={{color:'#000'}} className='text-center  my-5'>My Works</h4>
            <div data-aos="zoom-in-down " >
                <ResponsiveGallery images={images}/>
            </div>
        </div>
    );
};

export default MyWorks;