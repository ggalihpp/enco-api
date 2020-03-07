const { ListFiles } = require('../service');

function ListImageByFOlder(req, res, next) {
    ListFiles(req.params.FOLDER).then(response => {
        return res.json(response)
    }).catch(error => next(error));
}

module.exports = ListImageByFOlder;