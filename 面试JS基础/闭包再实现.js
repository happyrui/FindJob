/**
 * Created by dell-pc on 2017/10/2.
 */
function f1(){
    var n = 999;
    function f2(){
        console.log(n);
    }
    return f2;
}
var res = f1();
res();

//function f1(){
//    var n = 999;
//    function f2(){
//        console.log(n);
//    }
//    return f2();
//}
//f1();