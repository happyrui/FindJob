/**
 * Created by dell-pc on 2017/9/27.
 */
function find(str){
    if(str.length==1){return str;}
    var charObj = {};
    var maxChar = '';
    var maxValue = 1;
    for(var i=0;i<str.length;i++){
        if(!charObj[str.charAt(i)]){
            charObj[str.charAt(i)] = 1;
        }else{
            charObj[str.charAt(i)] += 1;
        }
    }
    for(var k in charObj){
        if(charObj[k]>=maxValue){
            maxChar = k;
            maxValue = charObj[k];
        }
    }
    return "出现次数最多的字符是："+maxChar+",次数是:"+maxValue;
}
var str = "dhsadghvcjsdhasjdiasdasbjd";
console.log(find(str));