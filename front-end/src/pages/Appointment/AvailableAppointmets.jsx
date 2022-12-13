import React, { useState, useEffect } from "react";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointmets = ({ date, format }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
    console.log(services);
  }, []);
  return (
    <section className="pt-5">
      <div>
        <h3 className="text-primary text-2xl font-bold text-center">
          Available Appointments on {format(date, "PP")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.services &&
            services.services.map((service) => (
              <AppointmentService
                key={service._id}
                service={service}
                setTreatment={setTreatment}
              />
            ))}
        </div>
        {treatment && (
          <BookingModal
            treatment={treatment}
            date={date}
            format={format}
            setTreatment={setTreatment}
          />
        )}
      </div>
    </section>
  );
};

export default AvailableAppointmets;
