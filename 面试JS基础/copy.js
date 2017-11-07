/**
 * Created by dell-pc on 2017/10/18.
 */
Object.prototype.clone=function(){
    var o = this.constructor === Array ? [] : {};
    for(var e in this){
        o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
    }
    return o;
};
//Object.prototype.clone = function () {
//    var Constructor = this.constructor;
//    var obj = new Constructor();
//
//    for (var attr in this) {
//        if (this.hasOwnProperty(attr)) {
//            if (typeof(this[attr]) !== "function") {
//                if (this[attr] === null) {
//                    obj[attr] = null;
//                }
//                else {
//                    obj[attr] = this[attr].clone();
//                }
//            }
//        }
//    }
//    return obj;
//};

var obj = {"a":1};
var arr = [1,2];

var res = obj.clone();
console.log(res);
console.log(arr.clone());


////深拷贝，只适用对象
//var res2 = JSON.parse(JSON.stringify(obj));
//console.log(res2);
//res2.a=2;
//console.log(res2);
//console.log(obj);
//
////浅拷贝
//var res3 = obj;
//console.log(res3);
//res3.a = 3;
//console.log(res3);
//console.log(obj);

function clone(obj){
    var o;
    switch(typeof obj){
        case 'undefined': break;
        case 'string':o=obj+'';break;
        case 'number':o=obj-0;break;
        case 'boolean':o=obj;break;
        case 'object':
            if(obj===null){
                o=null;
            }else if(Object.prototype.toString.call(obj).slice(8,-1)==="Array"){
                o=[];
                for(var i=0;i<obj.length;i++){
                    o.push(clone(obj[i]));
                }
            }else{
                o={};
                for(var k in obj){
                    o[k]=clone(obj[k]);
                }
            }
            break;
        default :
            o = obj;
            break;
    }
    return o;
}
console.log(clone({'a':2}));