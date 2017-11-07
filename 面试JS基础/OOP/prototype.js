/**
 * Created by dell-pc on 2017/6/27.
 */
//构造函数模式  不返回，不需要显式创建对象,需要new,每个对象都有自己的一套函数，极其浪费
//解决这个浪费问题，就使用原型对象
//每个对象调用同一个函数，共用这个属性 ，set函数使用原型对象
function Person(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
}
Person.prototype.set=function(){
    console.log(this.age);
};
var p1 = new Person('lili','nan',20);
var p2 = new Person('riri','nv',19);

console.log(p1.set === p2.set);

//给对象添加方法和给对象添加属性
//后者优先级高
//如何记住原型  类比  css中的class与行间样式
Array.prototype.a = 13;
var arr = [1,2,3];
console.log(arr.a);  //13
arr.a = 5;
console.log(arr.a);  //5
delete arr.a;
console.log(arr.a);   //13