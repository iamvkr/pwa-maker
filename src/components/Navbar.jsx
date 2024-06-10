import React from 'react'
import pwaLogo from '../assets/pwa-icon.svg';


const Navbar = () => {
    return (
        <nav className="navbar bg-body-secondary w-100">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div className="d-flex align-items-center" style={{height:"28px"}}>
                        <img src={pwaLogo} alt="logo" width="40" height="34"/>
                        <span className='fw-bold ms-1'>Maker</span>
                    </div>
                    {/* <img src="/pwa-icon.svg" alt="Logo" width="40" height="34" className="d-inline-block align-text-top" />
                    <span className=' d-inline-block align-text-top fw-bold mt-1 ms-1'>Maker</span> */}
                </a>
            </div>
        </nav>
    )
}

export default Navbar