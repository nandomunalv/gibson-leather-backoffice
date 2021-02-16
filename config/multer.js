import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img/products')
    },
    filename: function(req, file, cb) {
        console.log("file", file)
        const fileExtension = file.originalname.split(".")[1]
        cb(null, file.fieldname + "-" + Date.now() + "." + fileExtension)
    },
})

const upload = multer({ storage: storage });

module.exports = upload;
