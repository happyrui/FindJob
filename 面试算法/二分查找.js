/**
 * Created by dell-pc on 2017/9/30.
 */
//非递归
//function BinarySearch(arr,key){
//    var low = 0, high = arr.length-1;
//    while(low<=high){
//        var mid = parseInt((low+high)/2);
//        //console.log(mid)
//        if(key===arr[mid]){return mid;}
//        else if(key>arr[mid]){low=mid+1;}
//        else if(key<arr[mid]){high=mid-1;}
//        else{ return -1;}
//    }
//}
//有序数组
//var arr= [1,2,3,7,9,20];
//var res = BinarySearch(arr,7);
//console.log(res);

//递归
function BinarySearch(arr,key,low,high){
    if(low>high){return -1;}
    var mid = parseInt((low+high)/2);
    if(key===arr[mid]){return mid;}
    else if(key>arr[mid]){low = mid+1; return BinarySearch(arr,key,low,high)}
    else if(key<arr[mid]){high = mid-1;return BinarySearch(arr,key,low,high)}
}
//有序数组
var arr= [1,2,3,7,9,20];
var res = BinarySearch(arr,7,0,arr.length);
console.log(res);