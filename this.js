let obj = {
  a: 1,
  b: 2,
  c: 3
}

let a = 'global'
obj.a = 'local'

obj.checkThis = () => {
  this.a = 'this key is added in function'
  console.log('this inside es6 func: ', this);
}

obj.checkThisStandard = function() {
  console.log('this inside standard: ', this);
}

obj.checkThisTimeout = function() {
console.log('This inside timeout: ', this);
}

obj.checkThis();
obj.checkThisStandard();
setTimeout(obj.checkThisTimeout, 100)