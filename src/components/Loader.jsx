// JAI SHREE RAM

import {React , useState , useEffect} from 'react'
import "../../public/css/Loader.css"

function Loader() {




    return (
        <div className="loader w-full h-screen overflow-hidden flex p-10 flex-col items-center justify-center relative font-['jollyLodger']">
            <div className="wrapper w-[99.2%] h-[98.5%] bg-[#111] rounded-xl absolute"></div>
            <div className="lMain bg-[#111] flex flex-col items-center justify-center relative w-[350px] h-[350px] relative rounded-full ">
                <div className="lLogo w-[25%] h-[25%] rounded-full border-[#ccc] overflow-hidden">
                    <img className='object-cover' src="img/logo.jpg" alt="" />
                </div>
                <p className="loadingPercent absolute top-1 left-1/2 -translate-x-1/2 text-[#EAFF00] text-3xl font-lightest tracking-widest">20%</p>
            </div>
        </div>
    )
}

export default Loader