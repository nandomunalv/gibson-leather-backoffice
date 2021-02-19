import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img/tmp')
    },
    filename: function(req, file, cb) {
        const fileName = file.originalname.split(".")[0];
        const fileExtension = file.originalname.split(".")[1];
        cb(null, fileName + "-" + Date.now() + "." + fileExtension);
    },
})

const upload = multer({ storage: storage });

module.exports = upload;
