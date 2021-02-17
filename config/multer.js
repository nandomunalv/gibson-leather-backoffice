import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img/tmp')
    },
    filename: function(req, file, cb) {
        const fileExtension = file.originalname.split(".")[1];
        cb(null, file.fieldname + "-" + Date.now() + "." + fileExtension);
    },
})

const upload = multer({ storage: storage });

module.exports = upload;
