/**
 * Created by dell-pc on 2017/9/27.
 */
//function find(str){
//    if(str.length==1){return str;}
//    var charObj = {};
//    for(var i=0;i<str.length;i++){
//        if(!charObj[str.charAt(i)]){
//            charObj[str.charAt(i)] = 1;
//        }else{
//            charObj[str.charAt(i)] += 1;
//        }
//    }
//    return charObj;
//}
//var str = "dhsadghvcjsdhasjdiasdasbjd";
//console.log(find(str));

var obj = {};
'abcdaabcefgh'.replace(/(\w)/g,function(word,p){
    obj[p[0]] ? obj[p[0]]+=1 : obj[p[0]] =1
});
console.log(obj);