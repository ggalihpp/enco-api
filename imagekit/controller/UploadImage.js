const { Upload } = require('../service');

function UploadImage(req, res, next) {
    try {
        // const file = Upload(req.file, "test-folder")
        // res.writeHead(200, { 'Content-Type': 'image/jpeg', 'Cache-Control': 'no-cache' });
        return res.writeHead(200, { 'Content-Type': 'image/jpeg', 'Cache-Control': 'no-cache' }).sendFile(req.file.path)
    } catch (err) {
        next(err);
    }

}

module.exports = UploadImage;