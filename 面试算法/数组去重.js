/**
 * Created by dell-pc on 2017/9/27.
 */
//function unique(arr){
//    return Array.from(new Set(arr));
//}
//function unique(arr){
//    var data = [];
//    for(var i=0;i<arr.length;i++){
//        if(data.indexOf(arr[i])==-1){
//            data.push(arr[i]);
//        }
//    }
//    return data;
//}
function unique(arr){
    var table = {};
    var data = [];
    for(var i=0;i<arr.length;i++){
        if(!table[arr[i]]){
            table[arr[i]]=true;
            data.push(arr[i]);
        }
    }
    console.log(table)
    return data;
}
var arr = [1,2,3,9,3,4,4,4,4,9,4];
console.log(unique(arr));