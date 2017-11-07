/**
 * Created by dell-pc on 2017/10/1.
// */
function f(str){
    var str1 = str.split('').reverse().join('').toLowerCase();
    if(str1===str.toLowerCase()){return true;}
    else{return false;}
}
console.log(f('ASesas'));

//·´×ª×Ö·û´®
function ReverseStr(str){
    return str.split('').reverse().join('');
}
console.log(ReverseStr('asd'));

function ReverseStr2(str){
    var temp = '';
    for(var i=str.length-1;i>=0;i--){
        temp += str.charAt(i);
    }
    return temp;
}
var str2 = "zxc";
console.log(ReverseStr2(str2));