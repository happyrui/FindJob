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

//��������
//��������ʾ
var obj = {
    name:'zhangsan',
    sex:'nan',
    age:30,
    eat:function(){
        console.log(this.age);
    }
}
//����ģʽ   ���뷵�أ���Ҫ��ʽ��������,����Ҫnew��ÿ���������Լ���һ�׺����������˷�
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
//���캯��ģʽ  �����أ�����Ҫ��ʽ��������,��Ҫnew,ÿ���������Լ���һ�׺����������˷�
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