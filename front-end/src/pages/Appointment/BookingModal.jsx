import React from "react";
import { useSelector } from "react-redux";

const BookingModal = ({ treatment, date, format, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const { email, userName } = useSelector((state) => state.user);
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const formatedDate = format(date, "PP");
    console.log(_id, name, slot);
    const booking = {
      treatmenId: _id,
      treatmentType: name,
      date: formatedDate,
      slot,
      patientEmail: email,
      patientName: userName,
      phoneNumber: event.target.phone.value,
    };
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box ">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary text-center mb-2">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols1 gap-1 justify-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={userName ? ` ${userName}` : ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={email ? ` ${email}` : ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              placeholder="SUBMIT"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
