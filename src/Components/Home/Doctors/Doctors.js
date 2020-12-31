import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doctors = (props) => {
    const{img, name, phone, icon}= props.doctor;
    return (
        <div className='container'>
            <div className="row ">
            <div className='col-md-4 text-center '>
                <img src={img} alt="" height="300" width="300"/>
                <div className="justify content-center align-items-center ml-4">
                <h6 className='ml-3'><b>{name}</b></h6>
                <div className=' d-flex justify-content-center '>
                <FontAwesomeIcon icon={icon}> </FontAwesomeIcon>
                <p className='pl-2 align-items-center' >{phone}</p>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Doctors;