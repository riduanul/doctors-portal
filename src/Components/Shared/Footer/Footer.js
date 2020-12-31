import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
     <footer className='container footer-bg py-5'>
         <div className=" row justify-content-between">
             <div className="col-md-3">
                <h5 style={{color:'white'}}>Service</h5>
                 <p>Emargency Dental Care</p>
                 <p>Check Up</p>
                 <p>Treatment of personal diseases</p>
                 <p>Tooth Extraction</p>
                 <p>Check Up</p>
             </div>
             
             <div className="col-md-3">
             <h5 style={{color:'#50DCE5', fontWeight:'bold'}}>Service</h5>
             <p>Emargency Dental Care</p>
                 <p>Check Up</p>
                 <p>Treatment of personal diseases</p>
                 <p>Tooth Extraction</p>
                 <p>Check Up</p>
             </div>
             
             <div className="col-md-3">
             <h5 style={{color:'#50DCE5', fontWeight:'bold'}}>Oral Health</h5>
             <p>Emargency Dental Care</p>
                 <p>Check Up</p>
                 <p>Treatment of personal diseases</p>
                 <p>Tooth Extraction</p>
                 <p>Check Up</p>
             </div>
            
             <div className="col-md-3">
             <h5 style={{color:'#50DCE5', fontWeight:'bold'}}>Our Address</h5>
             <p>Emergency Dental Care</p>
                 <p>Check Up</p>
                 <p>Treatment of personal diseases</p>
                 <p>Tooth Extraction</p>
                 <p>Check Up</p>
             </div>
         </div>
    <p style={{textAlign:'center', color:'gray', marginTop:'20px'}}>Copyrights {(new Date()).getFullYear()} All Rights Reserved</p>
     </footer>
    );
};

export default Footer;