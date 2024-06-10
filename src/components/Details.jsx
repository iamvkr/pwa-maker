import React from 'react'

const Details = () => {
    return (
        <div className="row justify-content-center ps-4 ps-md-0" style={{ width: "100%" }}>
            <div className="col-md-6 col-sm-12 bg-white rounded my-4" >
                <div className='fw-bold mt-2'><h4>What is PWA?</h4></div>
                <p>
                Progressive Web Apps (PWAs) are applications that you build by using web technologies, and that can be installed and can run on all devices, from one codebase.
                PWAs provide native-like experiences to your users on supporting devices. They adapt to the capabilities supported by each device and they can also run in web browsers, like websites.
                </p>
                <div className='fw-bold mt-2'><h4>How to Generate PWA Template?</h4></div>
                <p>
                    <span>The below steps are mentioned to get your PWA for free.</span>
                    <ul>
                        <li>Fill in the details mentioned above and upload an icon in png/jpg format.</li>
                        <li>The recommended icon size is 512 x 512 square size image.</li>
                        <li>click on Generate PWA to get the template codes in zip format.</li>
                        <li>Extract and make necessary changes in your index.html file.</li>
                    </ul>
                </p>
                <div className='fw-bold mt-2'><h6>Learn more about PWA?</h6></div>
                <p>
                Learn more about PWA form <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">MDN PWA</a>
                </p>
                <div className='fw-bold mt-2'><h6>Manifest properties:</h6></div>
                <p>
                Learn more about manifest properties form <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest">MDN Manifest</a>
                </p>
                <div className='fw-bold mt-2'><h6>GitHub:</h6></div>
                <p>
                Visit Github Repo <a href="https://github.com/iamvkr/pwa-maker">iamvkr/iavkr</a>
                </p>
            </div>
        </div>
    )
}

export default Details