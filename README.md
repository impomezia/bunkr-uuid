# bunkr-uuid

Simple module to generate and validate Base64 encoded (URL Safe) UUIDs with CRC16 CCITT checksum.


# Install

`npm install bunkr-uuid --save`


# Usage

```javascript
const uuid = require('bunkr-uuid');

uuid.generate();
// dA4VlzonS8OAj10CcDpsaTcN

uuid.validate('dA4VlzonS8OAj10CcDpsaTcN')
// true
```


# License

MIT