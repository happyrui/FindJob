/**
 * Created by dell-pc on 2017/9/30.
 */
var stack1 = [];
var stack2 = [];
function queue(node){
    return stack1.push(node);
}
function unqueue(){
    if(stack2.length===0){
        while(stack1.length!==0){
            stack2.push(stack1.pop());
        }
    }
    return stack2.pop();
}
queue(5);
queue(3);
queue(6);
console.log(unqueue());
console.log(unqueue());
console.log(unqueue());