<?php

require("init.php");
@$mid = $_GET["mid"];
// $mid = 6;
$delete_sql = "delete from mainworker_info where mid='$mid'";
//echo $delete_sql;
$result = mysqli_query($conn, $delete_sql);
if($result){
    echo "yes";
}else{
    echo "no";
}