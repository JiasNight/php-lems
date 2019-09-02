<?php
//连接数据库
$port = "127.0.0.1:3306";
$user = "root";
$pasword = "root";
$databasesName = "lemsdb"; 
$conn=mysqli_connect($port, $user, $pasword, $databasesName);
$sql="SET NAMES UTF8";
$result=mysqli_query($conn,$sql);
// echo $result;
//echo $conn;

?>