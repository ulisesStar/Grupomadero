var db = require('../relations');
var fotos = db.fotos;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    fotos.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    fotos.findById(id).then(function(fotos) {
        fotos.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    fotos.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });
};

ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        fotos.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        fotos.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
