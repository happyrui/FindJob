/**
 * Created by dell-pc on 2017/10/1.
 */
//������ظ�
function randomStr(str,n){
    var temp ='';
    for(var i=0;i<n;i++){
        temp+=str.charAt(Math.floor(Math.random()*str.length));
    }
    return temp;
}
var str = '12345678asdfghjkl';
console.log(randomStr(str,6));