/**
 * Created by dell-pc on 2017/4/13.
 */
//���ݴ�������Ԫ�صĴ�С��Χ�����ȶ����Ļ���M��Ͱ
//��N������Ԫ�طֲ�������Ͱ��ȥ
//�ٶԸ���Ͱ�е�Ԫ�ؽ�������
//��ʱ�ٰ�����Ѹ�Ͱ�е�Ԫ���г�������������õġ�
function bucketSort(array,num){
    if(array.length<=1){
        return array;
    }
    var len=array.length,buckets=[],result=[],min=max=array[0],regex='/^[1-9]+[0-9]*$/',space,n=0;
    num=num||((num>1&&regex.test(num))?num:10);
    for(var i=1;i<len;i++){
        min=min<=array[i]?min:array[i];
        max=max>=array[i]?max:array[i];
    }
    space=(max-min+1)/num;
    for(var j=0;j<len;j++){
        var index=Math.floor((array[j]-min)/space);
        if(buckets[index]){  //  �ǿ�Ͱ����������
            var k=buckets[index].length-1;
            while(k>=0&&buckets[index][k]>array[j]){
                buckets[index][k+1]=buckets[index][k];
                k--;
            }
            buckets[index][k+1]=array[j];
        }else{    //��Ͱ����ʼ��
            buckets[index]=[];
            buckets[index].push(array[j]);
        }
    }
    while(n<num){
        result=result.concat(buckets[n]);
        n++;
    }
    return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bucketSort(arr,4));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]