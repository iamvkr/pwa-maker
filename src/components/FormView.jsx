import React from 'react';
import pwaLogo from '../assets/pwa-icon.svg'
import { useEffect, useState } from 'react';
import { drawOnCanvas, generateFiles, generateIcons } from '../utils/utils';
import zipMyFile from '../utils/zipHandler';
import ModalView from './ModalView';
import { Modal } from 'bootstrap';


const FormView = () => {
    const [downloadFn, setdownloadFn] = useState({
        zip:()=>{}
    });
    const [formData, setformData] = useState({
        app_name: "",
        app_short_name: "",
        app_theme_color: "#ffffff",
        app_bg_color: "#ffffff",
        app_desc: "",
        app_orientation: "any",
        app_display: "standalone",
        app_icon: "",
    });

    const [canvasUpdated, setcanvasUpdated] = useState(false);

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
        if (e.target.name === 'app_icon') {
            const file = e.target.files[0];
            let reader = new FileReader()
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                document.getElementById("previewIcon").src = reader.result;
                // now just draw imag on canvas:
                drawOnCanvas('previewIcon', setcanvasUpdated);
            }
        }

    }

    const showModal = (myModal) => {
        myModal.show();
    }


    const handleSubmit = (event) => {
        event.preventDefault();


        const form = event.target;
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            // alert("form submitted");
            // console.log(formData);
            if (canvasUpdated) { //check if all 4 canvas is updated to true
                // async generate files using formdata:
                generateFiles(formData).then(({ status, manifest, sw, indx }) => {
                    if (status) { //check if files generation is success or not
                        //files are ready and now generate icons
                        const downloadIcons = (imgblobsArr) => {
                            // now show a modal and provide function to exec on download btn click:
                            const myModal = new Modal('#myModal');
                            setdownloadFn({
                                zip:()=>{zipMyFile(manifest,sw,indx,imgblobsArr)}
                            })
                            showModal(myModal);
                        }
                        generateIcons(downloadIcons); //callback function to download icons after blob generation
                    }
                })

            }
        }
        form.classList.add('was-validated');
    }
    
    useEffect(() => {
        
    }, []);

    return (
        <>
            <div className="row justify-content-center ps-2 ps-md-0" style={{ width: "100%" }}>
                <div className="col-md-6 col-sm-12 " >
                    <form noValidate className="needs-validation px-2" onSubmit={handleSubmit}>

                        {/* name */}
                        <div className="input-group my-3">
                            <span className="input-group-text">Name {canvasUpdated}</span>
                            <input type="text" className="form-control" placeholder="Cat app" aria-label="name" name='app_name' required={true}
                                onChange={handleChange} value={formData.app_name} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please choose a name.
                            </div>
                        </div>
                        {/* name */}

                        {/* short name */}
                        <div className="input-group my-3">
                            <span className="input-group-text">Short Name</span>
                            <input type="text" className="form-control" placeholder="Cat app" aria-label="short name" name='app_short_name' required={true}
                                onChange={handleChange} value={formData.app_short_name} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please choose a name.
                            </div>
                        </div>
                        {/* short name */}

                        {/* theme color*/}
                        <div className="input-group my-3">
                            <span className="input-group-text">Theme color</span>
                            <input type="color" className="form-control" placeholder="#ffffff" aria-label="theme color" name='app_theme_color' required={true}
                                onChange={handleChange} value={formData.app_theme_color} style={{ height: "40px" }} />
                            <input type="text" className="form-control" placeholder="#ffffff" aria-label="theme color" name='app_theme_color' required={true}
                                onChange={handleChange} value={formData.app_theme_color} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please choose a color.
                            </div>
                        </div>
                        {/* theme color */}

                        {/* background color*/}
                        <div className="input-group my-3">
                            <span className="input-group-text">Background color</span>
                            <input type="color" className="form-control" placeholder="#ffffff" aria-label="background color" name='app_bg_color' required={true}
                                onChange={handleChange} value={formData.app_bg_color} style={{ height: "40px" }} />
                            <input type="text" className="form-control" placeholder="#ffffff" aria-label="background color" name='app_bg_color' required={true}
                                onChange={handleChange} value={formData.app_bg_color} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please choose a bg color.
                            </div>
                        </div>
                        {/* background color */}

                        {/* desc*/}
                        <div className="input-group my-3">
                            <span className="input-group-text">Description</span>
                            <input type="text" className="form-control" placeholder="A cool cat app" aria-label="description" name='app_desc' required={true}
                                onChange={handleChange} value={formData.app_desc} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please choose a description.
                            </div>
                        </div>
                        {/* desc */}

                        {/* orientation*/}
                        <div className="input-group my-3">
                            <span className="input-group-text">Orientation</span>
                            <select className="form-control" aria-label="orientation" name='app_orientation'
                                onChange={handleChange} value={formData.app_orientation} required={true}>
                                <option value="any">any  </option>
                                <option value="natural">natural  </option>
                                <option value="landscape">landscape  </option>
                                <option value="landscape-primary">landscape-primary  </option>
                                <option value="landscape-secondary">landscape-secondary  </option>
                                <option value="portrait">portrait  </option>
                                <option value="portrait-primary">portrait-primary  </option>
                                <option value="portrait-secondary">portrait-secondary  </option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please choose a orientation.
                            </div>
                        </div>
                        {/* orientation */}

                        {/* display*/}
                        <div className="input-group my-3">
                            <span className="input-group-text" >Display</span>
                            <select className="form-control" aria-label="display" name='app_display'
                                onChange={handleChange} value={formData.app_display} required={true}>
                                <option value="standalone">standalone  </option>
                                <option value="fullscreen">fullscreen  </option>
                                <option value="minimal-ui">minimal-ui  </option>
                                <option value="browser">browser  </option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please choose a display.
                            </div>
                        </div>
                        {/* display */}

                        {/* icon*/}
                        <div className="input-group my-3">
                            <span className="input-group-text">Icon</span>
                            <input type="file" className="form-control" placeholder="icon.png" aria-label="icon" name='app_icon' required={true}
                                onChange={handleChange} value={formData.app_icon}
                                accept="image/*" />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please choose a icon.
                            </div>
                        </div>
                        <div className='border border-dark' style={{ height: "100px", width: "100px" }}>
                            <img id="previewIcon" src={pwaLogo} width={"100%"} height={"100%"} alt="icon" style={{ objectFit: "contain" }} />
                        </div>
                        {/* icon */}

                        {/* submit */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary border border-black">Generate PWA</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* modal */}
            <ModalView downloadFn={downloadFn}/>
        </>
    )
}

export default FormView