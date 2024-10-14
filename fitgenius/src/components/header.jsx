import React from 'react';

function Header() {
  return (
    <div id='main'>
        <div className='text-center font-lato absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-[55%]'>
            <h1 className='text-white font-bold font-lato xl:text-7xl text-3xl'>Smart Fitness and Nutrition Planning System</h1>
            <p className='text-slate-400 font-semibold xl:text-xl text-base my-4'>Transform Your Fitness Journey with AI-Driven Precision</p>
            <div className='header-btns'>
                <a href='#' className='header-btn'>Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default Header;