//功能:常见的验证
//参数
//要验证的字符串
//规则类型
//返回值 true:符合规则  false:不符合规则
function checkAll(type,str){
	var reg="";
	switch(type){
		case "passWord":reg=/^[0-9a-zA-Z_#]{6,16}$/;break;
		case "phone":reg=/^1[34578]\d{9}$/;break;
		case "post":reg=/^[1-9]\d{5}$/;break;
		case "birthDay":reg=/^(\d{2}|\d{4})[-\.\/](0[1-9]|1[0-2])[-\.\/](0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;break;
		case "personId":reg=/^[1-9]\d{16}[\dX]$/;break;
		case "ip":reg= /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;break;
		case "email":reg=/^[\w\.]+@\w+(\.com|\.net|\.cn|\.com\.cn)$/;break;
	}
	if(reg.test(str)){
		return true;
	}else{
		return false;
	}
}