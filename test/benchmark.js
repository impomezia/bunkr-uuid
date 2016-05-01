'use strict';


const benchmark = require('benchmark');
const uuid      = require('../index');


new benchmark.Suite({
  onStart() {
    console.log('--------------------------------------------------');
  },
  onCycle(event) {
    console.log(String(event.target));
  },
  onError(event) {
    console.error(event.target.error);
  },
  onComplete() {
    console.log('==================================================');
  }
})
  .add('generate', () => {
    uuid.generate();
  })
  .add('validate', () => {
    uuid.validate('2BwsQR7WbAzG8xNEcbrKHEtg');
  })
  .run();