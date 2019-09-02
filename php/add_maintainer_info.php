<?php
require("init.php");
@$mnumber = $_GET["mnumber"];
@$mname = $_GET["mname"];
$insert_sql = "insert into mainworker_info(mnumber,mname) values('$mnumber','$mname')";
$result = mysqli_query($conn, $insert_sql);
if($result){
    echo "yes";
}else{
    echo "no";
}