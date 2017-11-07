/**
 * Created by dell-pc on 2017/10/1.
 */
function ReverseList(pHead){
   var pre = null,next = null;
    if(pHead==null) return null;
    while(pHead){
        next = pHead.next;//使用next保存下一个节点的信息

        pHead.next = pre;  //让pHead指向pre
        pre = pHead;       //让pre,pHead,next依次向后移一个节点
        pHead = next
    }
    return pre;
}