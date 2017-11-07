/**
 * Created by dell-pc on 2017/9/27.
 */
//function swap(a,b){
//    b=b-a;
//    a=a+b;
//    b=a-b;
//    return [a,b];
//}
//function swap(a,b){
//    a=a^b;
//    b=a^b;
//    a=a^b;
//    return [a,b];
//}
//function swap(a,b){
//    a=a*b;
//    a=a/b;
//    b=a/b;
//    return [a,b];
//}
function swap(a,b){
    var arr=[];
    arr.push(a);
    arr.push(b);
    return [arr.pop(),arr.pop()];
}
console.log(swap(2,3));