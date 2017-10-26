//通过ajax以及获取的商品编号来自动生成整个商品详情页的主要的内容
$(function(){
	var goodsIder=window.location.search;
	var goodsId=goodsIder.substring(1);
	$.ajax({
		type:"get",
		url:"php/getGoodsInfo.php",
		async:true,
		data:{
			"goodsId":goodsId
		},
		success:function(data){
			var data=$.parseJSON(data);
//			console.log(typeof(data));
			$(".content").append("<div class=\"con\">"+
"				<p class=\"goodsurl\">您当前的位置： 名鞋库>>运动鞋子>>休闲鞋>>李宁>>李宁鞋子>>李宁 "+data.goodsId+"</p>"+
"				<div class=\"goodscontent\">"+
"					<div class=\"left\">"+
"						<a href=\"#\" class=\"biggoods\"><img src=\"img/"+data.goodsImg+"\" alt=\"\"/></a>"+
"						"+
"						<div class=\"goodsbottom\">"+
"							<a href=\"#\"><img src=\"img/"+data.goodsImg+"\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/"+data.goodsImg+"\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/"+data.goodsImg+"\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/"+data.goodsImg+"\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/"+data.goodsImg+"\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/"+data.goodsImg+"\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/"+data.goodsImg+"\" alt=\"\" /></a>"+
"						</div>"+
"						<p>"+
"							分享到："+
"							<a href=\"#\"><img src=\"img/gdweibo.jpg\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/gdrenren.jpg\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/gdkaixin.jpg\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/gddouban.jpg\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/gdqqkongjian.jpg\" alt=\"\" /></a>"+
"							<a href=\"#\"><img src=\"img/gdqqweibo.jpg\" alt=\"\" /></a>"+
"						</p>"+
"					</div>"+
"					<div class=\"right\">"+
"						<div class=\"right01\">"+
"							<p>"+data.goodsName+""+data.goodsId+"</p>"+
"							<p>更多<a href=\"#\">李宁 </a></p>"+
"						</div>"+
"						<ul class=\"right02\">"+
"							<p>吊 &nbsp;牌 &nbsp;价：<s>￥"+data.beiyong1+".00</s></p>"+
"							<p>销 &nbsp;售 &nbsp;价：<s>￥"+data.beiyong2+".00</s></p>"+
"							<ul class=\"cuxiaojia\">"+
"								<li>促 &nbsp;销 &nbsp;价：</li>"+
"								<li>￥"+data.goodsPrice+".00</li>"+
"								<li>活动价</li>"+
"								（5.3折）立省：￥167.00"+
"							</ul>"+
"							<p>好 &nbsp;评 &nbsp;度：<img src=\"img/gdfivestar.jpg\" alt=\"\" />5分（<a href=\"#\">已有4人评论</a>）</p>"+
"							<p>运&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;费：名鞋库会员满399包邮（不包括货到付款）</p>"+
"							<p>温馨提示：本款不支持货到付款和顺丰快递</p>"+
"						</ul>"+
"						<div class=\"right03\">"+
"							<p>促销信息</p><p>满400减30</p><p>限购3件</p>"+
"						</div>"+
"						<ul class=\"right04\">"+
"							<li>"+
"								<p>尺码：</p>"+
"								<input type=\"text\" value=\""+data.beiyong3+"\"/>"+
"								<input type=\"text\" value=\""+data.beiyong3+"\"/>"+
"								<input type=\"text\" value=\""+data.beiyong3+"\"/>"+
"								<input type=\"text\" value=\""+data.beiyong3+"\"/>"+
"								<input type=\"text\" value=\""+data.beiyong3+"\"/>"+
"								<input type=\"text\" value=\""+data.beiyong3+"\"/>"+
"								<input type=\"text\" value=\""+data.beiyong3+"\"/>"+
"								<input type=\"text\" value=\""+data.beiyong3+"\"/>"+
"								<input type=\"text\" value=\""+data.beiyong3+"\"/>"+
"							</li>"+
"							<li><p>颜色：</p><img src=\"img/"+data.goodsImg+"\" alt=\"\" /><i></i></li>"+
"							<li><p>购买数量：</p><a class='jian' href=\"javascipt:viod(0)\">-</a><input class='buyCount' type=\"text\" name=\"\" id=\"\" value=\"1\" /><a class='jia' href=\"javascipt:viod(0)\">+</a></li>"+
"						</ul>"+
"						<div class=\"right05\"><p class=\"jijianggoumai\">您即将购买<b class='buyCount'>1</b>件 "+data.goodsDesc+"</p><a href=\"#\" class=\"lijigoumai\"></a><a href=\"#\" class=\"jiarugouwuche\"></a></div>"+
"						<div class=\"right06\">"+
"							<p class=\"kefu\">名鞋库客服：销售：</p><a href=\"#\" class=\"qqjiaotan01\"></a>"+
"							<p class=\"xiaoshou\">销售：</p><a href=\"#\" class=\"qqjiaotan02\"></a>"+
"						</div>"+
"						<ul class=\"right07\">"+
"							<li>名鞋库保障：</li>"+
"							<li></li>"+
"							<li></li>"+
"							<li></li>"+
"						</ul>"+
"					</div>"+
"				</div>"+
"			</div>");

			//给商品数量的加号和减号添加改变中间商品数量的事件
			var buyCount=Number($(".buyCount").val());
//			console.log($(".buyCount").val());
			$(".jian").click(function(){
				if(buyCount<=1){
					buyCount==1;
				}else{
					buyCount=buyCount-1;
				}
				$(".buyCount").val(buyCount);
				$(".buyCount").html(buyCount);
			});
			
			$(".jia").click(function(){
				buyCount=buyCount+1;
				$(".buyCount").val(buyCount);
				$(".buyCount").html(buyCount);
			});
			
			//点击立即购物按钮，弹出蒙版。内有继续购物以及进入购物车
			
			$(".jiarugouwuche").click(function(){
				$(".shoppingCartpop").css({"display":"block"});
				$("body").css({"overflow":"hidden"});
				var buyCount=Number($(".buyCount").val());
				$.ajax({
					type:"get",
					url:"php/addShoppingCart.php",
					async:true,
					data:{
						"userId":$("#userName").html(),
						"goodsId":data.goodsId,
						"goodsCount":buyCount
					},
					success:function(result){
						console.log(typeof(result));
						if(result=="1"){
							$(".small p").html("商品添加成功！");
						}else{
							$(".small p").html("商品添加失败！");
						}
					}
				});
			})
		}
	});
	
	
});
