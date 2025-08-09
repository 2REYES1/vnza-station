import React from 'react'

function CenteredPage ({children}) {
    return (
        <div className="bg-black min-h-screen flex flex-col justify-center items-center">
            {children}
        </div>
    );

}

export default CenteredPage;