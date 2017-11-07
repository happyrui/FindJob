/**
 * Created by dell-pc on 2017/6/27.
 */
var arr = [12,23,45];
//arr.show = function(){
//    //console.log(this);
//    console.log(this.length);
//};
function show(){
    console.log(this.length);
}
show();
//arr.show();

//var obj = new Object();
//obj.aaa = 12;
//obj.show=function(){
//    console.log(this.aaa);
//}
//obj.show();

//创建对象
//字面量表示
var obj = {
    name:'zhangsan',
    sex:'nan',
    age:30,
    eat:function(){
        console.log(this.age);
    }
}
//工厂模式   必须返回，需要显式创建对象,不需要new，每个对象都有自己的一套函数，极其浪费
function createPerson(name,sex,age){
    var obj = new Object();
    obj.name = name;
    obj.sex = sex;
    obj.age = age;
    obj.eat = function(){
        console.log(this.age);
    };
    return obj;
}
//构造函数模式  不返回，不需要显式创建对象,需要new,每个对象都有自己的一套函数，极其浪费
function Person(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.eat = function(){
        console.log(this.age);
    };
}
var p1 = new Person('lili','nan',20);
var p2 = new Person('riri','nv',19);

console.log(p1.eat === p2.eat);

var p3 = createPerson('lili','nan',20);
var p4 = createPerson('riri','nv',19);

console.log(p3.eat === p4.eat);