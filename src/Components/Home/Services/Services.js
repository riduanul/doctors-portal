import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    },
]

const Services = () => {
    return (
        <section className="services-container ">
            <div className="text-center mt-5">
                <h5 style={{color:'#1CC7C1'}}>Our Services</h5>
                <h2 >Services we provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-5 pt-5'>
                    {
                       serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
             </div>
        </section>
    );
};

export default Services;