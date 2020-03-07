const router = require('express').Router();
const controller = require('../controller');
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads' });


router.route('/:FOLDER/list').get(
    controller.ListImageByFolder
);

router.post('/upload', upload.single('photo'), controller.UploadImage);

module.exports = router;