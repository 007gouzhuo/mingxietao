<?php
	header("content-type:text/html;charset=utf-8");
	$userId=$_POST['userId'];
	$userPass=$_POST['userPass'];
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "-1";
	}else{
		mysql_select_db("mingxietao",$con);
		$sqlStr="select * from vipuser where userId='".$userId."' and userPass='".$userPass."'";
//		echo $sqlStr;
		$result=mysql_query($sqlStr,$con);
		mysql_close($con);
		if(mysql_num_rows($result)==1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>