/**
 * Created by dell-pc on 2017/10/24.
 */
//var arr=[1,2,3,4,5,6,7,8,9];
//var res=[];
//var r= arr.sort((p,n)=>n-p).forEach((v,i)=>{i%2==0?res.unshift(v):res.push(v)});
//console.log(r);
let arr = new Array(~~(10 + Math.random() * 10)).fill(0).map(n=>~~(Math.random()*100));
console.log(arr);
let res = arr.sort((a,b)=> a - b ).reverse().reduce((a,b,i) => (i % 2 ? a.push(b) : a. unshift (b), a), [])
console.log(res);