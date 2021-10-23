
module.exports = {
    configure: function (app, mongo, ObjectID, url, assert, dbb) {
        var user_component = require('../components/user_component')(mongo, ObjectID, url, assert, dbb)
    
    
        app.post('/sign_up', function (req, res) {
            try {
                const new_user = {
                    name: req.body.name,
                    mobile: req.body.mobile
                }
                user_component.sign_up(new_user, function (result, err, msg) {
                        if (err) {
                            console.log(err)
                            res.json({ status: false, message: msg })
                        } else {
                            console.log(result)
                            res.json({ result: result, status: true, message: msg })
                        }
                    })
            } catch (e) {
                res.json({ status: false, message: 'error occured' + e })
            }
        })
    }
}