import React from 'react';
import './Appointment.css';
import doctor from '../../../images/doctor.png';

const Appointment = () => {
    return (
        <section className='appointment '>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={doctor}alt="image" />
                    </div>
                    <div  style={{lineHeight:'30px'}}className="col-md-7 text-white py-5">
                        <h5 style={{color:'rgba(62, 241, 152, 0.438)'}}> <b>APPOINTMENT</b></h5>
                        <h1><b>Make an appointment <br/> Today</b></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, inventore?ipsum dolor sit amet consectetur, adipisicing elit. Cum, inventore?</p>
                        <br/>
                        <button class="btn btn-brand ">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;