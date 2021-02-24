import fs from 'fs';
import * as imagemin from '../../config/imagemin';

export const transferImage = async (fileName, destination, deleteFile) => {
    await imagemin.compress(fileName).then((val) => {
        console.log(`>>> Image compressed from "${val[0].sourcePath}" to "${val[0].destinationPath}".`);

        const file = `public/img/components/products/${deleteFile}`;

        deleteFile !== '' && fs.existsSync(file) ? 
            fs.unlinkSync(file) : 
            console.warn(`>>> El archivo no existe.`);

        removeTmpImage(fileName, destination);
        removeCompressImage(fileName);
    });
}

const removeTmpImage = (imgName, imgDestination) => {
    try {
        const fileTmp = `${imgDestination}/${imgName}`;
        const fileCompress = `public/img/compress/${imgName}`;

        fs.existsSync(fileCompress) ? fs.unlinkSync(fileTmp) : console.warn(`>>> El archivo ${imgName} no existe.`);

    } catch (error) {
        console.error('>>> Error in removeTmpImage:', error);
    }
}

const removeCompressImage = (imgName) => {
    try {
        const fileCompress = `public/img/compress/${imgName}`;
        const file = `public/img/components/products/${imgName}`;

        if (fs.existsSync(fileCompress)) {
            fs.rename(fileCompress, file, (err) => {
                err ? console.error('>>> Error in rename:', error) : console.log('>>> Transfer complete :)');
            });
        } else {
            console.warn(`>>> El archivo ${imgName} no existe`);
        }
    } catch (error) {
        console.error('>>> Error in removeCompressImage:', error);
    }
}
