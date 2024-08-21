// JAI SHREE RAM

import React from 'react'
import "../../public/css/Loader.css"

function Loader() {
    return (
        <div className="loader w-full h-screen overflow-hidden flex flex-col items-center justify-center relative font-['jollyLodger']">
            <div className="wrapper w-[99.2%] h-[98.5%] bg-[#111] rounded-xl absolute"></div>
            <div className="lMain bg-red-500 w-1/2 h-1/2 relative z-1000000 rounded-full"></div>
        </div>
    )
}

export default Loader