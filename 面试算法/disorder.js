/**
 * Created by dell-pc on 2017/9/28.
 */
//可以看出Math.random()得到的是0~1之间的随机数。
// 众所周知，sort()可以调用一个函数做为参数，如果这个函数返回的值为-1表示数组中的a项排在b项前。
// 如此一来，可以写一个随机函数，让Math.random()随机出来的数与0.5做为一个比较，
// 如果大于.5就返回 -1(a排在b前面)，反之返回1(b排在a前面):
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