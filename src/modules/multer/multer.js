const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: __dirname +  "../../../../images/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000000
    },

    fileFilter: function (req, file, cb) {
        return cb(null, true);
    }
}).single('myImage');

module.exports = {
    upload_img: async (req, res) => {
        try {
            upload(req, res, async (err) => {
                if (err) {
                    console.log(err.message)
                } else {
                    if (req.file == undefined) {
                        console.log("bosh files")
                    } else {
                        let img = "https://oquvmarkazi.herokuapp.com/" + `images/${req.file.filename}`
                        res.send(img)
                    }
                }
            });
        } catch (e) {
            console.log(e.message)
        }
    }
}