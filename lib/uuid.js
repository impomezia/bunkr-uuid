'use strict';

const uuid  = require('node-uuid');
const crc16 = require('crc').crc16ccitt;


function generate() {
  const buf = new Buffer(18);
  uuid.v4(null, buf, 0);
  buf.writeUInt16LE(crc16(buf.slice(0, 16)), 16);

  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
}


function validate(id) {
  if (typeof id !== 'string' || id.length !== 24) {
    return false;
  }

  const buf = new Buffer(id, 'base64');
  return buf.length === 18 && crc16(buf.slice(0, 16)) === buf.readUInt16LE(16);
}


module.exports.generate = generate;
module.exports.validate = validate;
