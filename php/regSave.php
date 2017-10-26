<?php
	header("Content-type:text/html;charset=utf-8");
	$userId=$_POST['userId'];
	$userPass=$_POST['userPass'];
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "-1";
	}else{
		mysql_select_db("mingxietao",$con);
		$sqlStr="insert into vipuser(userId,userPass) values('".$userId."','".$userPass."')";
//		echo $sqlStr;
		$t=mysql_query($sqlStr,$con);
		mysql_close($con);
		
		if($t==1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>