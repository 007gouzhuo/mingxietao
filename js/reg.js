

$(function(){
	$("#userId").blur(function(){
		let userIdStr=$("#userId").val();
			if(userIdStr==""){
				$("#userIdMsg").html("用户名不能为空！");
			}else if((checkAll("phone",$("#userId").val())||checkAll("email",$("#userId").val()))==false){
				$("#userIdMsg").html("请输入正确格式的用户名！");
			}else{
					$.ajax({
					type:"get",
					url:"php/checkUser.php",
					async:true,
					data:{
						userId:$("#userId").val()
					},
					success:function(data){
						if(data=="1"){
							$("#userIdMsg").html("该用户名已被使用");
						}else if(data=="0"){
							$("#userIdMsg").html("可用！");
						}else if(data=="-1"){
								$("#userIdMsg").html("服务器异常");
						}
					}
				});
			}
	});
	
	$("#userPass").blur(function(){
		let userPassStr=$("#userPass").val();
			if(userPassStr==""){
				$("#userPassMsg").html("密码不能为空！");
			}else if(checkAll("passWord",$("#userPass").val())==false){
				$("#userPassMsg").html("请输入正确格式的密码！");
			}else{
				$("#userPassMsg").html("可用！");	
			}
	});
	
	$("#checkPass").blur(function(){
		if($(this).val()!=$("#userPass").val()){
			$("#userCheckPassMsg").html("与上面输入的密码不同！请重新输入！");
		}else{
			$("#userCheckPassMsg").html("相同！");
		}
	})
	
	$("#submit").click(function(){
			if(($("#userIdMsg").html()=="可用"||$("#userPassMsg").html()=="可用！"||$("#userCheckPassMsg").html()=="相同")==false){
			alert("无法注册，请检查上面注册信息的格式！")
		}else{
	
				$.ajax({
					type:"post",
					url:"php/regSave.php",
					async:true,
					data:{
						userId:$("#userId").val(),
						userPass:$("#userPass").val()
					},
					success:function(data){
						if(data=="1"){
							alert("注册成功！");
						}else if(data=="0"){
							alert("注册失败！");
						}else if(data=="-1"){
							alert("注册失败，服务器异常！");
						}
					}
				});
		
		}
	});
	
	
});
