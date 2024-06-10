import JSZip from 'jszip';
import FileSaver from 'file-saver';

const zipMyFile = (manifest,sw,indx,imgblobsArr) => {
    const zip = new JSZip();
    zip.file(manifest.name, manifest.content);
    zip.file(sw.name, sw.content);
    zip.file(indx.name, indx.content);
    // add icons:
    imgblobsArr.forEach((blob,ind) => {
        zip.file(`icons/img${(ind+1)}.png`, blob);
    });
    zip.generateAsync({ type: 'blob' }).then(function (content) {
        FileSaver.saveAs(content, 'pwa.zip');
    });
}

export default zipMyFile;