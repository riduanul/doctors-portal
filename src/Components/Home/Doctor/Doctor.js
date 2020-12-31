import React from 'react';
import doctorPic from '../../../images/doctor-sm.png';
import Doctors from '../Doctors/Doctors';
import {faPhone } from '@fortawesome/free-solid-svg-icons'

const Doctor = () => {
    const doctorsData = [
        {
            img: doctorPic,
            name: 'Dr. Herry',
            phone:'+159873674834',
            icon:faPhone
        },
        {
            img: doctorPic,
            name: 'Dr. Herry',
            phone:'+159873674834',
            icon:faPhone
        },
        {
            img: doctorPic,
            name: 'Dr. Herry',
            phone:'+159873674834',
            icon:faPhone
        }
    ];
    return (
        <div className='container my-5'>
            <div><h5 style={{color:'#50DCE5', fontWeight:'bold', textAlign:'center'}}>OUR DOCTORS</h5></div>
            <div className='d-flex my-5'>
                {
                    doctorsData.map(doctor => <Doctors doctor={doctor}></Doctors>)
                }
            </div>
            
        </div>
    );
};

export default Doctor;