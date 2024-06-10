import React from 'react';

const ModalView = ({downloadFn}) => {
    
    return (
        <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Download</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* success */}
                        <img src="/success.gif" style={{objectFit:"cover",overflow:"hidden"}} height={50} width={50} alt="" />
                        {/* download message */}
                        Generate Success!
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={downloadFn.zip}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalView