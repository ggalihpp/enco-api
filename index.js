const express = require('express');
const app = express();

const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const Utf8 = require('crypto-js/enc-utf8');

function keyGenerator(timestamp, method, uri, contentType, device, authKey) {
    let rawRequestX = `${method}\n${contentType || ""}\n${timestamp}\n${uri}`;

    rawRequest = hmacSHA512(rawRequestX, authKey);

    let generatedToken = Base64.stringify(rawRequest);
    generatedToken = Utf8.parse(device + ':' + generatedToken);
    generatedToken = Base64.stringify(generatedToken);
    return {
        "X-Auth-Key": generatedToken,
        "X-Auth-Time": timestamp,
        rawRequest: rawRequestX,
        authKey: authKey
    }
};


app.get("/generate-token", (req, res) => {
    const x = keyGenerator(Math.floor(new Date() / 1000), req.query.method, req.query.uri, req.query.content_type, req.query.device, req.query.authkey)

    return res.status(200).json(x)
});


server = app.listen(4000, function () {
    console.log(`Server is running on port ${this.address().port} in ${app.settings.env} mode`);
});