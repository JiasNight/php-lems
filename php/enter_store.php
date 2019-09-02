<?php
require("init.php");

@$enumber = $_GET["enumber"];
@$ename = $_GET["ename"];
@$eclassroom = $_GET["eclassroom"];
@$ebuydate = $_GET["ebuydate"];
@$eintdate = $_GET["eintdate"];
// @$estatus = $_GET["estatus"];

// $enumber="jsj15463";
// $ename="游戏笔记本";
// $eclassroom="11502";
// $estatus=0;
// $ebuydate="2019-06-01";
// $euseddate="2019-06-11";
$insert_sql = "insert into equip_info(enumber,ename,eclassroom,ebuydate,eintdate) values('$enumber','$ename','$eclassroom','$ebuydate','$eintdate')";

//echo $insert_sql;
$result = mysqli_query($conn, $insert_sql);
//echo $result;
if ($result) {
    echo "yes";
} else {
    echo "no";
}
