/**
 * Created by dell-pc on 2017/6/27.
 */
//���캯��ģʽ  �����أ�����Ҫ��ʽ��������,��Ҫnew,ÿ���������Լ���һ�׺����������˷�
//�������˷����⣬��ʹ��ԭ�Ͷ���
//ÿ���������ͬһ������������������� ��set����ʹ��ԭ�Ͷ���
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

//��������ӷ����͸������������
//�������ȼ���
//��μ�סԭ��  ���  css�е�class���м���ʽ
Array.prototype.a = 13;
var arr = [1,2,3];
console.log(arr.a);  //13
arr.a = 5;
console.log(arr.a);  //5
delete arr.a;
console.log(arr.a);   //13