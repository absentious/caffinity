var formidable = require('formidable');

/** 
 * Using express-formidable breaks passport because it changes how forms are handled,
 *  so we manually parse multipart forms like this. 
 */
exports.parseForm = (req) => {
    return new Promise((resolve, reject) => {
        var form = new formidable.IncomingForm()
        form.parse(req, function (err, fields, files) {
            if (err) {
                reject(err)
            } else {
                resolve({ fields, files })
            }
        })
    })
}