# elasticpush-node

## Installation

`npm install elasticpush`

## Usage

```javascript
const Elasticpush = require('elasticpush');

const token = '2e4c651f7199dd10c8ed6ef56ef3337e1898b521994fafb9e2b5ec9a99a04bac:169843c1d4b791ed5bb2ed2e1f90991a3f6b8dc2b40f094d84e1f4cbc70dfd5d';
const clientId = '04223996851113687';
const appId = '2';
const event = 'event-test';
const data = {"message": "Hello world!"};
const channel = 'channel-0170';

var elasticpush = new Elasticpush(token, appId);
elasticpush.setClientId(clientId);
elasticpush.dispatch(channel, event, data).then(function (resolution) {
    console.log(resolution);
}, function (err) {
    console.error(err);
});
```
