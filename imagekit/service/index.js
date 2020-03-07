var ImageKit = require("imagekit");
var fs = require('fs');

var imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC,
    privateKey: process.env.IMAGEKIT_PRIVATE,
    urlEndpoint: `https://ik.imagekit.io/${process.env.IMAGEKIT_ID}/`
});


module.exports = {
    ListFiles: (folder) => {
        return imagekit.listFiles({
            path: folder
        })
    },
    Upload: (file, folder) => {
        fs.readFile(file.path, function (err, data) {
            if (err) throw err; // Fail if the file can't be read.

            return data;
            return imagekit.upload({
                file: data, //required
                fileName: file.originalname, //required
                path: folder
            }, function (error, result) {
                if (error) console.log(error);
                else console.log(result);
            });
        });

    }
}