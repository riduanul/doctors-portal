import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section className="featured-service mb-5">
           <div className="container mt-5">
           <div className="row" >
                <div className="col-md-5 d-flex justify-content-center">
                    <img src={featured} alt="" width="400" height="500"/>
                </div>
                <div className="col-md-7 mt-5 ml-0 pl-0 pr-5">
                    <h1><b>Exceptional Dental <br/> care, on Your Terms</b> </h1>
                    <br/>
                    <p  style={{lineHeight:'30px'}}className=' text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, atque rerum. Modi minus nostrum optio nobis non, aliquam, blanditiis vero itaque dolorem repellendus quibusdam repudiandae neque impedit tempore dolore nulla tempora omnis alias dolorum! Totam suscipit accusamus dignissimos debitis sunt, culpa minus eius voluptates atque cum nihil quis doloribus </p>
                    <br/>
                    <button className='btn btn-brand'>Learn more</button>
                </div>
            </div>
           </div>
        </section>
    );
};

export default FeaturedService;