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

//JS�������з�Ϊ����Ԥ�����ʹ�������ִ����������;
//��������Ԥ�����׶Σ����Ȼ�Ԥ��������һ�д���var�ؼ��ֵı���aa����ֻ����������ֵ���壬��ʱaa��ֵ��undefined����Ȼ���Ե����д�function�ؼ��ֵ�aa�������������͸�ֵ���������ָ�ֵ����Ԥ�����׶ν�����aa��ֵ�Ѿ��Ǻ�һ��������ֵ��
//����Ȼ���Ǵ�������ִ�У���һ�У���aa��ֵΪһ�������������еĺ��������Ѿ�������Ԥ��������˻�������β�ִ�С�
//����aa����ֵ�ǵ�һ��������
Foo.getName();
getName();
//Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
