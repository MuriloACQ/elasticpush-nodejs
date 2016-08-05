'use strict';

const requestPromise = require('request-promise');

function Elasticpush(token, appId, config) {

    if (!token) {
        throw 'please pass a token as first parameter';
    } else if (String(token).indexOf(':') < 0) {
        throw 'invalid token format'
    }

    if (!appId) {
        throw 'please pass an appId as second parameter';
    }

    if (!config) {
        config = {};
    }

    if (!config.host) {
        config.host = 'http://api.elasticpush.com/';
    }

    if (!config.version) {
        config.version = 'v1';
    }

    var tokenSplit = token.split(':');

    this.xToken = tokenSplit[0];
    this.xSecretToken = tokenSplit[1];
    this.endpoint = config.host + config.version + '/apps/' + appId + '/';

}

Elasticpush.prototype.setClientId = function (clientId) {
    this.clientId = clientId;
};

Elasticpush.prototype.dispatch = function (channel, event, data) {

    var body = {
        channel: channel,
        event: event,
        data: data,
        identifier: this.clientId
    };

    var options = {
        method: 'POST',
        uri: this.endpoint + 'events',
        body: body,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Token': this.xToken,
            'X-Secret-Token': this.xSecretToken
        },
        json: true
    };

    return requestPromise(options);

};

module.exports = Elasticpush;
