/**
 * Created by dell-pc on 2017/9/28.
 */
//���Կ���Math.random()�õ�����0~1֮����������
// ������֪��sort()���Ե���һ��������Ϊ�������������������ص�ֵΪ-1��ʾ�����е�a������b��ǰ��
// ���һ��������дһ�������������Math.random()�������������0.5��Ϊһ���Ƚϣ�
// �������.5�ͷ��� -1(a����bǰ��)����֮����1(b����aǰ��):
function disorder(arr){
    return arr.sort(function(){return Math.random()-0.5;})
}

//O(n)
//function disorder(arr){
//    var len = arr.length;
//    for(var i=0;i<len-1;i++){
//        var idx = Math.floor(Math.random()*(len-i));
//        var temp = arr[idx];
//        arr[idx] = arr[len-1-i];
//        arr[len-1-i] = temp;
//    }
//    return arr;
//}
var arr = [3,4,3,2,5,7,4,6,75,432];
console.log(disorder(arr));