/**
 * Created by dell-pc on 2017/10/1.
 */
function ReverseList(pHead){
   var pre = null,next = null;
    if(pHead==null) return null;
    while(pHead){
        next = pHead.next;//ʹ��next������һ���ڵ����Ϣ

        pHead.next = pre;  //��pHeadָ��pre
        pre = pHead;       //��pre,pHead,next���������һ���ڵ�
        pHead = next
    }
    return pre;
}