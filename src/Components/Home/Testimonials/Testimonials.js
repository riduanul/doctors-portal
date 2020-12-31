import React from "react";

const Testimonials = (props) => {
  const { testimonial, name, location, img } = props.data;
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <p style={{lineHeight: '30px', fontWeight: '600'}}className="card-text p-3 text-justify text-secondary">{testimonial}</p>
      </div>
      <div className="card-footer  bg-white border-white d-flex  align-items-center">
        <img className="mx-3" src={img} alt="" width="60" />
        <div>
          <h6 style={{color:'#50DCE5', fontWeight:'bold'}}>{name}</h6>
          <p className="m-0">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
