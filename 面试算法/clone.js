/////**
//// * Created by dell-pc on 2017/10/7.
//// */
//////Object.prototype.clone = function(){
//////    var o = this.constructor === Array?[]:{};
//////    for(var e in this){
//////        o[e] = typeof this[e] === "object" ? this[e].clone():this[e];
//////    }
//////    return o;
//////};
//////var a = [1,2,3];
//////var b = a.clone();
//////console.log(a);
//////console.log(b);
////
////function clone(obj){
////    var o;
////    switch(typeof obj){
////        case 'undefined':
////            break;
////        case 'string':
////            o=obj+'';
////            break;
////        case 'number':
////            o=obj-0;
////            break;
////        case 'boolean':
////            o=obj;
////            break;
////        case 'object':
////            if(obj===null){
////                o=null;
////            }else if(Object.prototype.toString.call(obj).slice(8,-1)==='Array'){
////                o=[];
////                for(var i=0;i<obj.length;i++){
////                    o.push(clone(obj[i]));
////                }
////            }else{
////                o={};
////                for(var k in obj){
////                    o[k]=clone(obj[k]);
////                }
////            }
////            break;
////        default:
////            o=obj;
////            break;
////    }
////    return o;
////}
////
//////function clone(obj) {
//////    var copy;
//////    switch(typeof obj){
//////        case 'number':
//////        case 'string':
//////        case 'boolean':
//////            copy = obj;
//////            break;
//////        case 'object':
//////            if (obj == null) {
//////                copy = null
//////            } else if (toString.apply(obj) === '[object Array]') {
//////                copy = [];
//////                for (var i in obj) {
//////                    copy.push(clone(obj[i]))
//////                }
//////            } else {
//////                copy = {};
//////                for (var j in obj) {
//////                    copy[j] = clone(obj[j]);
//////                }
//////            }
//////    }
//////    return copy;
//////}
////var a = [1,2,3,4];
////var b = {
////    "aaa":22
////};
////var c = 'string';
////var d = 7;
////var e = true;
////console.log(clone(a));
////console.log(clone(b));
////console.log(clone(c));
////console.log(clone(d));
////console.log(clone(e));
////
//
////var a=1;
////(function(){
////    console.log(a);
////    var a =2;
////    console.log(a);
////})();
////console.log(a);
//
//function fn(a,b){
//    var temp=b;
//    while(b>0){
//        temp = a%b;
//        a=b;
//        b=temp;
//    }
//    return a;
//}
//console.log(fn(8,12));
//function getBigFactor(a,b){
//    if(b==0){
//        return a;
//    }
//    return getBigFactor(b,a%b);
//}
//console.log(getBigFactor(8,12));
//
//function f(array,n){
//    array.push(n);
//    array.sort(function(n1,n2){return n1-n2});
//    return array;
//}
//var arr=[1,2,3,5];
//console.log(f(arr,4));
//
//var date = new Date();
//var hour = date.getHours();
//console.log(Math.ceil(-3.14));
//console.log(Math.floor(-3.14));
var m = 'hello';
for(var i=0;i<10;i++){
    var m='hello'+i*2+i;
}
console.log(m);