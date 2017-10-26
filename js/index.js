





$(function(){
	//header
	$.ajax({
		type:"get",
		url:"php/getShoppingCart.php",
		async:true,
		data:{
			"userId":$("#userName").html()
		},
		
		success:function(data){
			
			var shangpingCount=eval(data).length;
			console.log(data);
			$(".shoppingCar p span").html(shangpingCount);
		}
	});
	
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
	})
	
	
		$("#pop").parent().mouseenter(function(){
			$("#pop").css({"display":"block"});
			$(this).css({"borderTop":"1px solid #ccc"});
		});
		
		$("#pop").parent().mouseleave(function(){
			$("#pop").css({"display":"none"});
			$(this).css({"borderTop":"none"});
		});
		
		$("#pop2").parent().mouseenter(function(){
			$("#pop2").css({"display":"block"});
			$(this).css({"borderTop":"1px solid #ccc"});
		});
		
		$("#pop2").parent().mouseleave(function(){
			$("#pop2").css({"display":"none"});
			$(this).css({"borderTop":"none"});
		});
		
		$(".pop").parent().mouseenter(function(){
			$(".pop").css({"display":"block"});
		});
	
	    $(".pop").parent().mouseleave(function(){
			$(".pop").css({"display":"none"});
		});
	    
	    $(".nanziyundong").mouseenter(function(){
			$(".nanziyundong").children().eq(1).css({"display":"block"});
		});
	
	    $(".nanziyundong").mouseleave(function(){
			$(".nanziyundong").children().eq(1).css({"display":"none"});
		});

	    $(".nvziyundong").mouseenter(function(){
			$(".nvziyundong").children().eq(1).css({"display":"block"});
		});
	
	    $(".nvziyundong").mouseleave(function(){
			$(".nvziyundong").children().eq(1).css({"display":"none"});
		});
		
		 $(".childs").mouseenter(function(){
			$(".childs").children().eq(1).css({"display":"block"});
		});
	
	    $(".childs").mouseleave(function(){
			$(".childs").children().eq(1).css({"display":"none"});
		});
		
		for(let i=0;i<$(".allCommodity").children().length;i++){
			$(".allCommodity").children().eq(i).children().eq(0).mouseenter(function(){
				$(this).stop().animate({marginLeft:"4px"},150);		});
			$(".allCommodity").children().eq(i).children().eq(0).mouseleave(function(){
				$(this).stop().animate({marginLeft:"0px"},150);
			});
			
			$(".allCommodity").children().eq(i).hover(
				function(){
					$(this).css({"text-decoration":"underline"});
				},
				function(){
					$(this).css({"text-decoration":" "});
				}
			)
			
			if(i<=6){
				$(".allCommodity").children().eq(i).hover(
					function(){
					$(this).css({"background":"url(img/rightjiantou.jpg) no-repeat ","backgroundColor":"#a90000","backgroundPosition":"175px 17px"});
					},
					function(){
					$(this).removeAttr("style");
					}
				);
			}else{
				$(".allCommodity").children().eq(i).hover(
					function(){
					$(this).css({"backgroundColor":"#a90000"});
					},
					function(){
					$(this).removeAttr("style");
					}
				);
			}
		}
		
		$(".allCommodity").parent().hover(
			function(){
				$(".allCommodity").css({"display":"block"});
			},
			function(){
				$(".allCommodity").css({"display":"none"});
			}
		)
		
	
			$(".changer").children().hover(
				function(){
					$(this).css({"text-decoration":"underline","color":"#1189c4"});
				},
				function(){
					$(this).removeAttr("style");
				}
			)
		
		
	
		$(".axiuxianfupop").parent().hover(
			function(){
				$(".axiuxianfupop").css({"display":"block"});
			},
			function(){
				$(".axiuxianfupop").css({"display":"none"});
			}
		)
		
		
		$(".axiuxianfupop").children().eq(0).children().eq(0).hover(
			function(){
				$(this).stop().animate({marginLeft:"12px"},500);
			},
			function(){
				$(this).stop().animate({marginLeft:"5px"},500);
			}
		);
		
		$(".axiuxianfupop").children().eq(2).children().eq(0).hover(
			function(){
				$(this).stop().animate({marginLeft:"12px"},500);
			},
			function(){
				$(this).stop().animate({marginLeft:"5px"},500);
			}
		);
		
		$(".axiuxianfupop").children().eq(4).children().eq(0).hover(
			function(){
				$(this).stop().animate({marginLeft:"-28px"},500);
			},
			function(){
				$(this).stop().animate({marginLeft:"-35px"},500);
			}
		);
	
	
		$(".pinpai a span").hover(
			function(){
				$(this).stop().animate({opacity:0.4},100,"linear");
			},
			function(){
				$(this).stop().animate({opacity:0},100,"linear");
			}
		)
		
		$(".content .c1 .right .right_top a").hover(
			function(){
				$(this).css({"text-decoration":"underline","color":"#ff0000"});
			},
			function(){
				$(this).removeAttr("style");
			}
		)
		
		$(".content .c2 a span").hover(
			function(){
				$(this).stop().animate({opacity:1},200,"linear");
			},
			function(){
				$(this).stop().animate({opacity:0},200,"linear");
			}
		)
		
		
	
	
	
	
	
	
	
	    //大轮播图
		$(".banner").Opa({
							"width":"100%",
							"height":550,
							"imgs":["img/opa1.jpg","img/opa2.jpg","img/opa3.jpg","img/opa4.jpg"],
							"timeSpace":5000,
							"btnObj":{
								"width":15,
								"height":15,
								"bgColor":"#b5b5b5",
								"highBgColor":"#c80002",
								"isCircle":true,
								"left":600,
								"top":505
							}
		});
		
		//.content .c1 .right .right_bottom
			$(".content .c1 .right .right_bottom").Opa({
						"width":187,
						"height":112,
						"imgs":["img/nikeRed.jpg","img/reeBokBlack.jpg"],
						"timeSpace":5000,
						"btnObj":{
							"width":8,
							"height":8,
							"bgColor":"#6d7e72",
							"highBgColor":"#cc0000",
							"isCircle":false,
							"left":100,
							"top":100
						}
	});
});
	




































