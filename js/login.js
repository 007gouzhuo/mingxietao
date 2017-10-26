$(function(){
		$("#btnLogin").click(function(){
			$.ajax({
				type:"post",
				url:"php/loginCheck.php",
				async:true,
				data:{
					userId:$("#userId").val(),
					userPass:$("#userPass").val()
				},
				success:function(data){
					console.log(data);
					if(data=="1"){
						//1.保存cookie
						addCookie("userId",$("#userId").val(),7);
						//2.跳转到首页
						location.href="index.html"
					}else if(data=="-1"){
						alert("无法登陆，服务器异常！")
					}else{
						alert("用户名或密码错误！")
					}
				}
			});
		});
		
		
		
		
	});
	


































