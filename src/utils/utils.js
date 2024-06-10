const base = "/pwa-maker";
const manifestPath = base + "/sample/manifest.txt";
const swPath = base + "/sample/sw.txt";
const indexPath = base + "/sample/index.txt";

const getdata = async(path)=>{
    const res = await fetch(path);
    const data = await res.text();
    return data;
}
const manifestContentGenerate = async(formData)=>{
    // console.log(formData);
    let content =  await getdata(manifestPath);
    content = content.replace("{{name}}",formData.app_name);
    content = content.replace("{{display}}",formData.app_display);
    content = content.replace("{{short_name}}",formData.app_short_name);
    content = content.replace("{{theme_color}}",formData.app_theme_color);
    content = content.replace("{{description}}",formData.app_desc);
    content = content.replace("{{orientation}}",formData.app_orientation);
    content = content.replace("{{background_color}}",formData.app_bg_color);
    return content;
}
const swGenerate = async()=>{
    return await getdata(swPath);
}
const indexGenerate = async(formData)=>{
    let content =  await getdata(indexPath);
    content = content.replace("{{name}}",formData.app_name);
    content = content.replace("{{theme_color}}",formData.app_theme_color);
    content = content.replace("{{description}}",formData.app_desc);
    return content;
}

const drawOnCanvas = (sourceImageId, setcanvasUpdated) => {
    let allCanvas = Array.from(document.querySelectorAll('canvas'));
    allCanvas.forEach(element => {
        let context = element.getContext('2d');
        let len = element.width;
        context.beginPath();
        context.rect(0, 0, len, len);
        // use below to add bg color:
        // context.fillStyle = 'rgb(237, 199, 199)';
        // context.fill();
        let img = new Image();
        img.src = document.getElementById(sourceImageId).src;
        img.onload = function () {
            context.drawImage(img, 2, 2, (len - 4), (len - 4));
            // setcanvasUpdated(prev=> prev + 1); //this shows all 4 canvas is successfuly populated with images OR use below
            setcanvasUpdated(true); //updates status
        }
    });
}

const generateFiles = async (formData) => {
    // prepare manifest.json
    let manifest = {};
    manifest.name = 'manifest.json'
    manifest.content = await manifestContentGenerate(formData);

    // prepare sw.js
    let sw = {}
    sw.name = 'sw.js'
    sw.content = await swGenerate();

    // prepare index.html:
    let indx = {}
    indx.name = 'index.html';
    indx.content = await indexGenerate(formData);
    return {status:true,manifest,sw,indx};
}

const generateIcons = (downloadIcons)=>{
    // prepare generated icons as a blob data for zip:
    let allCanvas = Array.from(document.querySelectorAll('canvas'));
    const allBlobs = [];
    allCanvas.forEach((element, index) => {
        element.toBlob((blob) => {
            allBlobs.push(blob);
            if (allBlobs.length == 4) {
                // all blobs added:
                downloadIcons(allBlobs);
            }
        }, 'image/png')
    })
}

export { drawOnCanvas, generateFiles,generateIcons};