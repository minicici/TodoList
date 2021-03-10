(function(){
	function xys(){
		var html = document.querySelector('html')
		var userAgent = navigator.userAgent
		//userAgent.indexOf("iPhone"),通过此方法可以获取iPhone在字符中的索引值
		html.classList = ""
		if(userAgent.indexOf("iPhone")!=-1){
			html.classList.add("iphone")
		}else if(userAgent.indexOf("Amdroid")!=-1){
			html.classList.add("android")
		}else if(userAgent.indexOf("iPad")!=-1){
			html.classList.add("ipad")
		}else{
			html.classList.add("pc")
		}
		
		//window.innerWidth,可以获取窗口宽度，所以可以根据窗口宽度来设定html尺寸
		if(window.innerWidth<640){
			html.classList.add('lt640');
			html.classList.add('lt960');
			html.classList.add('lt1200');
		}else if(window.innerWidth<960){
			html.classList.add('lt960');
			html.classList.add('lt1200');
			html.classList.add('gt640');
		}if(window.innerWidth<1200){
			html.classList.add('gt960');
			html.classList.add('lt1200');
			html.classList.add('gt940');
		}if(window.innerWidth<640){
			html.classList.add('gt960');
			html.classList.add('gt1200');
			html.classList.add('gt640');
		}
		
		//rem布局
		var screenWidth = window.innerWidth;
		var danwei = screenWidth/3.75;//屏幕宽度/设计稿沾满全屏的宽度为多少
		var html = document.querySelector("html")
		html.style.fontSize = danwei + 'px';	
	}
	xys()
	window.onresize = function(){
		xys()
	}
})()
