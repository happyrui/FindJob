/**
 * Created by dell-pc on 2017/10/1.
 */
function getMaxProfit(arr) {
    console.time('aa');
    var min = arr[0];
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        min = Math.min(min, current);
        var p = current - min;
        max = Math.max(max, p);
    }
    console.timeEnd('aa');
    return max;
}
var arr = [2,5,34,2,345,432,90];
console.log(getMaxProfit(arr));
//Ñ°ÕÒ×î´óÊý
function MaxMin(arr){
    console.time('aa');
    arr.sort(function(n1,n2){return n1-n2;});
    console.timeEnd('aa');
    return arr[arr.length-1]-arr[0];
}
console.log(MaxMin(arr));

