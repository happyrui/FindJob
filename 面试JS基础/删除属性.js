/**
 * Created by dell-pc on 2017/10/15.
 */
var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};
obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for(var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i, '' + obj[i]);
    }
}
var test = {
    'case': 'I am a keyword so I must be notated as a string',
    delete: 'I am a keyword too so me' // ³ö´í£ºSyntaxError   ES5Ö®Ç°
};

var foo = [1,2,3,4,5,6];
foo.length = 3;
console.log(foo);
foo.length = 6;
console.log(foo);
var arr = new Array(5,2);
console.log(arr);
console.log(typeof 2);
console.log(typeof true);
console.log(typeof '123');
console.log(typeof [1,2]);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof fn);
function fn(){
    console.log(1);
}
console.log(Array.isArray([1,2,3]));
console.log([1,2,3] instanceof Array);