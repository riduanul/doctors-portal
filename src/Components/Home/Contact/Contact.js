import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
      <section className=" container contact-bg my-5 py-5 w-100">
          <div className="container">
             <div className='text-center'>
             <h5 style={{color:'#50DCE5', fontWeight:'bold'}}><b>CONTACT US</b></h5>
              <h2><b>Always contact with us</b></h2>
             </div>
              <form action="" className='text-center'>
                  <input type="text" placeholder="Email Address*"/><br/>
                  <input type="text" placeholder="Subject*"/><br/>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Your Message*"></textarea>
                  <br/>
                  <button style={{color:'#50DCE5', fontWeight:'bold'}}className="btn btn-brand textAlign:'center'"> Submit</button>
              </form>
          </div>

      </section>
    );
};

export default Contact;