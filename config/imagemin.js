import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

const input = 'public/img/tmp';
const output = 'public/img/compress';
const components = 'public/img/components/products';

export const compress = async () => {
    return await imagemin([`${input}/*.{jpg,JPG}`], {destination: `${output}`, plugins: [imageminMozjpeg({quality: 50})]});   
};