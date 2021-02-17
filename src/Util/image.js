import fs from 'fs';

export const findImageByName = () => {

}

export const removeTmpImage = (imgName, imgDestination) => {
    try {
        const fileTmp = `${imgDestination}/${imgName}`;
        const fileCompress = `public/img/compress/${imgName}`;

        fs.existsSync(fileCompress) ? fs.unlinkSync(fileTmp) : console.warn(`El archivo ${imgName} no existe`);

    } catch (error) {
        console.error('Error in removeTmpImage >>>', error);
    }
}

export const removeCompressImage = (imgName) => {
    try {
        const fileCompress = `public/img/compress/${imgName}`;
        const file = `public/img/components/products/${imgName}`;

        if (fs.existsSync(fileCompress)) {
            fs.rename(fileCompress, file, (err) => {
                err ? console.error('Error in rename >>>', error) : console.log('Rename complete!');
                
            });
        } else {
            console.warn(`El archivo ${imgName} no existe`);
        }
    } catch (error) {
        console.error('Error in removeCompressImage >>>', error);
    }
}
