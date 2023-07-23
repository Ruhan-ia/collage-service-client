import React from 'react';
import bg from '../../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`,
        
        backgroundSize:'cover',
        height:'700px'}}>

            <div className='text-center '>
            <input type="text" placeholder="Search here" className=" mt-72 input input-bordered w-full max-w-xs" />
            </div>
            
        </div>
    );
};

export default Banner;