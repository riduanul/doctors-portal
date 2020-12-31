import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const MakeAppointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDataChange = (date) =>{
       setSelectedDate(date);
       console.log(date)

    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDataChange={handleDataChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default MakeAppointment;