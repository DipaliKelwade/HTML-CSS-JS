var prototype = { foo: 'foo',
 bar: function ()
  { return this.foo; } 
};
var obj = Object.create(prototype);

console.log(obj.foo);

console.log(obj.bar());