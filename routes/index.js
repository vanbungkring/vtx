var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
    var transaction_details = {};
    transaction_details.order_id = '87126312678781233' + makeid();
    transaction_details.gross_amount = '1000'
    var options = {
        url: 'https://app.stg.veritrans.co.id/snap/v1/pay/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic VlQtc2VydmVyLXh3NE1JWlo1U0JMTDFHRTI4aFprXzNQQjo='
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
