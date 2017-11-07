/**
 * Created by dell-pc on 2017/10/14.
 */
function Foo(){
    getName=function(){
        console.log('1')
    };
    return this;
}
Foo.getName = function(){
    console.log('2');
};
Foo.prototype.getName = function(){
    console.log('3');
};

var getName = function(){
    console.log('4')
};
function getName(){
    console.log('5')
}

//JS代码运行分为变量预解析和代码逐行执行两个过程;
//１、变量预解析阶段；首先会预先声明第一行带有var关键字的变量aa，（只声明而不赋值定义，此时aa的值是undefined）；然后会对第五行带function关键字的aa变量进行声明和赋值（既声明又赋值）；预解析阶段结束后aa的值已经是后一个函数的值；
//２、然后是代码逐行执行；第一行，将aa赋值为一个函数，第五行的函数声明已经参与了预解析，因此会跳过这段不执行。
//所以aa最后的值是第一个函数。
Foo.getName();
getName();
//Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
