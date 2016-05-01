'use strict';

const uuid  = require('node-uuid');
const bs58  = require('bs58');
const crc8  = require('crc').crc8;


function generate() {
  const buf = new Buffer(17);
  uuid.v4(null, buf, 0);
  buf.writeUInt8(255, 16);
  buf.writeUInt8(crc8(buf), 16);

  return bs58.encode(buf);
}


function validate(id) {
  if (typeof id !== 'string' || id.length < 22 || id.length > 24) {
    return false;
  }

  let buf;
  try {
    buf = new Buffer(bs58.decode(id));
  }
  catch (e) {
    return false;
  }

  if (buf.length !==  17) {
    return false;
  }

  const crc = buf.readUInt8(16);
  buf.writeUInt8(255, 16);
  return crc8(buf) === crc;
}


module.exports.generate = generate;
module.exports.validate = validate;
