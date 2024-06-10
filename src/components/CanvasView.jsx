import React, { useEffect } from 'react'

const CanvasView = () => {

    return (
        <div className="row justify-content-center d-none" style={{ width: "100%" }}>
            <div className="col-md-6 col-sm-12 " >
                <canvas className='border' id="myCanvas1" width={"24px"} height={"24px"}></canvas>
                <canvas className='border' id="myCanvas2" width={"48px"} height={"48px"}></canvas>
                <canvas className='border' id="myCanvas3" width={"192px"} height={"192px"}></canvas>
                <canvas className='border' id="myCanvas4" width={"512px"} height={"512px"}></canvas>
            </div>
        </div>
    )
}

export default CanvasView