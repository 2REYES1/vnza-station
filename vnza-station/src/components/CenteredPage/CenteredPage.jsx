import React from 'react'

function CenteredPage ({children}) {
    return (
        <div className="bg-black min-h-screen flex flex-col justify-center items-center gap-0">
            {children}
        </div>
    );

}

export default CenteredPage;