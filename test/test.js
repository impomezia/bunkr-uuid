'use strict';

const uuid   = require('../index');
const expect = require('chai').expect;

describe('Generate', () => {
  it('generate', () => {
    const result = uuid.generate();

    expect(result).to.be.a('string');
    expect(result).to.have.length(24);
  });
});


describe('Validate', () => {
  it('valid', () => {
    const tests = ['yR-VYTPRQQeMifQI4i5jw4xp', 'L-eYdHB_QzW57leOREOEQE_G', '1ieeoWhXSL+nN8Sd4dlDqbn0', 'dA4VlzonS8OAj10CcDpsaTcN'];

    for (let i of tests) {
      expect(uuid.validate(i)).to.be.true;
    }
  });


  it('invalid', () => {
    const tests = [null, '123', 'yR-VYTPRQQeMifQI4i5jw4xp+', 'yR-VYTPRQQeMIfQI4i5jw4xp'];

    for (let i of tests) {
      expect(uuid.validate(i)).to.be.false;
    }
  })
});
