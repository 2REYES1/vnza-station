import React from 'react'
import CenteredPage from '../CenteredPage/CenteredPage'



function LandingPage(){
    return(
        <CenteredPage>
            <p className="text-white text-sm m-0 p-0">
                welcome to
            </p>
            <p className="text-white text-[50px] m-0 p-0">
                VNZA 102.5
            </p>
            <div className="absolute bottom-0 w-full h-1/2 overflow-hidden flex justify-center items-start pt-10">
               <img src="/cartoon-me.svg" alt="cartoon drawing of me"/>
               
            </div>
            
        </CenteredPage>
    );
}
export default LandingPage;
