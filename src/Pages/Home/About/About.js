import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className='w-1/2'>
          <img src="https://placeimg.com/260/400/arch" className="  rounded-lg shadow-2xl" alt='' />
          </div>
          <div className='w-1/2' >
            <p className='text-2xl font-bold text-orange-600 '>About us</p>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn btn-error bg-orange-600 text-xl font-semibold text-white ">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;