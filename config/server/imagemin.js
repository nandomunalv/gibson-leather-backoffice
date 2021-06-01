import imagemin from 'imagemin';
import imageminMozJpeg from 'imagemin-mozjpeg';

const input = 'public/img/tmp';
const output = 'public/img/compress';
const components = 'public/img/components/products';

export const compress = async (imgTmpName) => {
    return await imagemin([`${input}/${imgTmpName}`], {destination: `${output}`, plugins: [imageminMozJpeg({quality: 50})]});
};
