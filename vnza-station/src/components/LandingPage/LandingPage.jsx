import React from 'react'
import CenteredPage from '../CenteredPage/CenteredPage'



function LandingPage(){
    return(
        <CenteredPage>
            <p className="text-white text-sm m-0 p-0 bebas p-0 m-0">
                welcome to
            </p>
            <p className="text-[75px] text-[#4F42ED] text-shadow-[0_2px_5px_#FFFFFF] m-0 p-0 nanum">
                VNZA 102.5
            </p>
            <div className="absolute bottom-0 w-full h-1/2 overflow-hidden flex justify-center items-start pt-10">
               <img src="/cartoon-me.svg" alt="cartoon drawing of me"/>
            </div>
        </CenteredPage>
    );
}
export default LandingPage;
