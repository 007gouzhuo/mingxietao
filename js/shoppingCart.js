//头部的用户登录信息的cookie相关
var str=getCookie("userId");
	if(str==null){
		$("#loginId").css({"display":"block"});
		$("#welcomeId").css({"display":"none"});
	}else{
		$("#welcomeId").css({"display":"block"});
		$("#userName").html(str);
		$("#loginId").css({"display":"none"});
	}
	
	$("#btnLogOut").click(function(){
		removeCookie("userId");
	    window.location.reload();
	});


//通过ajax从数据库中获取各个购物车的商品数据
$(function(){
	$.ajax({
		type:"get",
		url:"php/getShoppingCart.php",
		async:true,
		data:{
			"userId":$("#userName").html()
		},
		success:function(data){
			var shangping=eval(data);
			console.log(data);
//			console.log(shangping);
			for(let i=0;i<shangping.length;i++){
				let zhekou=Number(shangping[i].beiyong2)-shangping[i].goodsPrice;
				console.log(zhekou);
				$(".goods").append("<ul class=\"goods01\">"+
"							<li><a href=\"#\"><img src=\"img/"+shangping[i].goodsImg+"\" alt=\"\" /></a></li>"+
"							<li>"+
"								<a href=\"#\">"+shangping[i].goodsName+"</a>"+
"								<a href=\"#\">"+shangping[i].goodsId+"</a>"+
"								<a href=\"#\">(尺码："+shangping[i].beiyong3+"；颜色："+shangping[i].goodsDesc+")</a>"+
"							</li>"+
"							<li>0</li>"+
"							<li>￥"+shangping[i].beiyong2+"</li>"+
"							<li>"+
"								<a href=\"#\" class=\"-\"></a>"+
"								<input type=\"text\" name=\"\" id=\"\" value=\"1\" />"+
"								<a href=\"#\" class=\"+\"></a>"+
"							</li>"+
"							<li>-￥"+zhekou+".00</li>"+
"							<li>￥192.00</li>"+
"							<li>"+
"								<a href=\"#\">收藏</a>"+
"								<a href=\"#\">删除</a>"+
"							</li>"+
"						</ul>");
			}
		}
	});
})
