function ajax(url,fnSucc,fnFail){
	//创建ajax对象
	var request=null;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();
	}else{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//连接服务器
	request.open("GET",url,true);
	//发送请求
	request.send();
	//接收返回
	request.onreadystatechange = function(){
		if(request.readyState==4 && request.status==200){
			fnSucc(request.responseText);
		}else{
			if(fnFail){
				fnFail();	
			}
		}
	}
}
