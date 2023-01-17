import React, { useEffect, useState } from 'react';
import Service from './service';

const Services = () => {
    
    const [service,setService]=useState([])
    useEffect( ()=>{
        fetch('service.json')
       .then(res => res.json())
       .then(data =>setService(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'> Services</p>
           <p className='text-5xl font-semibold'> Our Service Area</p>
           
           <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 justify-items-center m-10   grid-cols-1  md:grid-cols-2 lg:grid-cols-3   '>
  
                {
                    service.map(sr=><Service
                    key={sr._id}
                    sr={sr}
                    
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;