/**
 * Created by dell-pc on 2017/4/13.
 */
//�Ȱ�ÿ��Ԫ�صĳ��ִ����������Ȼ�������Ԫ�����������ź������еľ���λ��(����λ��)��
// �����ΰѳ�ʼ�����е�Ԫ�أ����ݸ�Ԫ���������յľ���λ���Ƶ����������С�
function countingSort(array) {
    var len = array.length,
        B = [],
        C = [],
        min = max = array[0];
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    for (var k = len - 1; k >= 0; k--) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    return B;
}
var arr=[23,45,21,12,1,3,54,653,2,4,65];
console.log(countingSort(arr));