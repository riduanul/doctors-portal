import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
const ServiceAppointment = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className=" font-bold text-xl text-center">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <PrimaryButton title="book appointment" />
        </div>
      </div>
    </div>
  );
};

export default ServiceAppointment;
