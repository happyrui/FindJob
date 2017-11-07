/**
 * Created by dell-pc on 2017/10/18.
 */
//var a = [1,2,3];
//var b={a:1};
//var c = function(num){
//    return num+1;
//};
//console.log(typeof(a),typeof(b),typeof(c))

//function F(){}
//var o=new F();
//console.log(o.constructor===F);

//function Person(){}
//var person = new Person();
//console.log(person.__proto__===Person.prototype)
//console.log(+0===-0)
//console.log(NaN!==NaN)
//console.log(1=='1')
//var o1={
//    "value":"key"
//},o2={
//    "value":"key"
//}
//console.log(o1===o2)
//var person = {
//    fname:"john",
//    lname:"Doe",
//    age:25
//};
//var txt = "";
//for(x in person){
//    txt = txt+person[x]
//}
//console.log(txt);
//var obj = {
//    a:1,
//    b:function(){
//      console.log(this.a);
//    }
//}
//var fun = obj.b;
//fun();
//var x=new Boolean(false);
//if(x){
//    console.log('h1')
//}
//var y = Boolean(0);
//if(y){
//    console.log('h2')
//}
var a,b;
(function(){
    console.log(a);
    console.log(b);
    var a=b=3;
    console.log(a);
    console.log(b);
})();
console.log(a);
console.log(b)