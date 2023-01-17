import React from "react";

const Service = ({sr}) => {
    const {title,img,price}= sr
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-600 font-sans">Price: {price}$</p>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-600">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
