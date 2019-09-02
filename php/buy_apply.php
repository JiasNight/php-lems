<?php

require("init.php");

@$anumber = $_GET["anumber"];
@$aname = $_GET["aname"];
@$aprice = $_GET["aprice"];
@$abuynum = $_GET["abuynum"];
@$awho = $_GET["awho"];
@$adate = $_GET["adate"];

// $anumber = "sq20190321";
// $aname = "u盘";
// $aprice = "49.50";
// $abuynum = "25";
// $awho = "江松";
// $adate = "2019-06-26";

$insert_apply_buy_sql = "insert into apply_info(anumber,aname,aprice,abuynum,adate,awho) values('$anumber','$aname','$aprice','$abuynum','$adate','$awho')";
//echo $insert_apply_buy_sql;
$result = mysqli_query($conn, $insert_apply_buy_sql);
if ($result) {
    echo "yes";
} else { 
    echo "no";
}
