import React from 'react';

const AppointmentsByDate = ({appointments}) => {
  
    return (
        
        <div>
            <div>
                <h1 className='text-brand ml-5 pl-4'>Appointments</h1>
            </div>
            <div>
                        <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        appointments.map((appointment, index) => 
                                
                            <tr>
                                <td>{appointment.name}</td>
                                <td>{appointment.phone}</td>
                                <td>{appointment.email}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentsByDate;