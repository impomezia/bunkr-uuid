# bunkr-uuid

Simple module to generate and validate Base58 encoded UUIDs with CRC8 checksum.
Result length is in the range of 22 to 24 characters.


# Install

`npm install bunkr-uuid --save`


# Usage

```javascript
const uuid = require('bunkr-uuid');

uuid.generate();
// 31dh27vxYY8qTawfPHeqAZJc

uuid.validate('31dh27vxYY8qTawfPHeqAZJc')
// true
```


# License

MIT