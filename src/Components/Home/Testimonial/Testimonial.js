import React from 'react';
import './Testimonial.css'
import Ellipse1 from '../../../images/Ellipse 1.png'
import Ellipse2 from '../../../images/Ellipse 2.png'
import Ellipse3 from '../../../images/Ellipse 3.png'
import Testimonials from '../Testimonials/Testimonials';

const Testimonial = () => {

    const testimonialsData = [
        {
            testimonial: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolorum amet accusantium tempore ad voluptatem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolorum amet accusantium tempore ad voluptatem?',
            name: 'Winson Herry',
            location: 'California',
            img:Ellipse1
        },
        {
            testimonial: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolorum amet accusantium tempore ad voluptatem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolorum amet accusantium tempore ad voluptatem?',
            name: 'Winson Herry',
            location: 'California',
            img:Ellipse2
        },
        {
            testimonial: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolorum amet accusantium tempore ad voluptatem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolorum amet accusantium tempore ad voluptatem?',
            name: 'Winson Herry',
            location: 'California',
            img:Ellipse3
        }
    ]
    return (
       <section className='testimonial-bg my-5 py-5'>
          <div className="container">
          <div className='row '>
                <div className="col-md-6 ">
                    <h5 style={{color:'#50DCE5', fontWeight:'bold'}}><b>TESTIMONIAL</b></h5>
                    <h1><b>What's Our Patient <br/> Says </b></h1>
                </div>
                <div className='card-deck my-5'>
                    {
                        testimonialsData.map(testimonial => <Testimonials data={testimonial}></Testimonials> )
                    }
                </div>
            
           </div>
          </div>
       </section>
    );
};

export default Testimonial;