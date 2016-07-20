var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.post('/charge', function(req, res, next) {
    var transaction_details = {};
    transaction_details.order_id = 'order-' + makeid();
    transaction_details.gross_amount = '1000'
    var options = {
        url: 'https://app.sandbox.veritrans.co.id/snap/v1/pay/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic VlQtc2VydmVyLUNoWTBwZmJ2VUNGaXV5WjhNZjB0S0o0ag=='
        },
        body: JSON.stringify({
            'transaction_details': transaction_details
        }),
        method: 'POST'
    };
    request(options, function(error, response, body) {
        if (!error) {
            res.json(JSON.parse(body));
        }
    })
});
router.get('/', function(req, res, next) {
    var transaction_details = {};
    transaction_details.order_id = 'order-' + makeid();
    transaction_details.gross_amount = '1000'
    var options = {
        url: 'https://app.sandbox.veritrans.co.id/snap/v1/pay/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic VlQtc2VydmVyLUNoWTBwZmJ2VUNGaXV5WjhNZjB0S0o0ag=='
        },
        body: JSON.stringify({
            'transaction_details': transaction_details
        }),
        method: 'POST'
    };
    request(options, function(error, response, body) {
        if (!error) {
            res.json(JSON.parse(body));
        }
    })
});
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 100; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
module.exports = router;
