/**
 * Created by dell-pc on 2017/9/27.
 */
//不可行
//function Fib(n){
//    var arr = [];
//    if(n==0){return arr=[0];}
//    else if(n==1){return arr=[0,1];}
//    else{
//        arr = [0,1];
//        var num= Fib(n-1)+Fib(n-2);
//        arr.push(num);
//    }
//    return arr;
//}


//可行
//输出第N项
//function Fib(n){
//    if(n==0){return 0;}
//    else if(n==1) {return 1}
//    else{return Fib(n-1)+Fib(n-2);}
//}
function Fib(n){
   var num1= 0,num2=1;num3=0;
   if(n==0){return num1;}
   else if(n==1){return num2;}
   else{
       for(var i=2;i<=n;i++){
           num3=num1+num2;
           num1=num2;
           num2=num3;
       }
       return num3;
   }
}

//输出前N项
//function Fib(n){
//    var arr=[];
//    var num1= 0,num2= 1,num3=0;
//    if(n==0){return arr=[0];}
//    else if(n==1){return arr=[0,1];}
//    else{
//        arr=[0,1];
//        for(var i=2;i<=n;i++){
//            num3= num1+num2;
//            num1=num2;
//            num2=num3;
//            arr.push(num3);
//        }
//        return arr;
//    }
//}
console.log(Fib(3));



