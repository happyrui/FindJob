/**
 * Created by dell-pc on 2017/6/28.
 */
function Drag(id) {
    this.disX = 0;
    this.disY = 0;
    this.oDiv = document.getElementById(id);
    //·ÀÖ¹ÍÏ³öÒ³Ãæ
    var _this = this;
    this.oDiv.onmousedown =function(){
        _this.fnDown();
    };
}
Drag.prototype.fnDown=function(e) {
    var oe = e || event;
    this.disX = oe.clientX - this.oDiv.offsetLeft;
    this.disY = oe.clientY - this.oDiv.offsetTop;

    var _this = this;
    document.onmousemove = function () {
        _this.fnMove();
    };
    document.onmouseup = function () {
        _this.fnUp();
    };
    return false;
};

Drag.prototype.fnMove=function(e){
    var oe = e||event;
    var l = oe.clientX-this.disX;
    var t = oe.clientY-this.disY;


    //if(l<0){
    //    l = 0;
    //}else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth){
    //    l = document.documentElement.clientWidth-this.oDiv.offsetWidth;
    //}
    //if(t<0){
    //    t = 0;
    //}else if(t>document.documentElement.clientHeight-this.oDiv.offsetHeight){
    //    t = document.documentElement.clientHeight-this.oDiv.offsetHeight;
    //}

    this.oDiv.style.left= l+'px';
    this.oDiv.style.top= t+'px';

};
Drag.prototype.fnUp=function(){
    document.onmousemove = null;
    document.onmouseup = null;
}