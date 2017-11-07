/**
 * Created by dell-pc on 2017/6/28.
 */
function LimitDrag(id){
    Drag.call(this,id);
}
for(var i in Drag.prototype){
    LimitDrag.prototype[i] = Drag.prototype[i];
}
//LimitDrag.prototype = Drag.prototype //子类改变了父类
LimitDrag.prototype.fnMove=function(e){
    var oe = e||event;
    var l = oe.clientX-this.disX;
    var t = oe.clientY-this.disY;


    if(l<0){
        l = 0;
    }else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth){
        l = document.documentElement.clientWidth-this.oDiv.offsetWidth;
    }
    if(t<0){
        t = 0;
    }else if(t>document.documentElement.clientHeight-this.oDiv.offsetHeight){
        t = document.documentElement.clientHeight-this.oDiv.offsetHeight;
    }

    this.oDiv.style.left= l+'px';
    this.oDiv.style.top= t+'px';

};