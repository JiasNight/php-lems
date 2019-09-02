<?php

require("init.php");

@$rnumber = $_GET["rnumber"];
@$rdate = $_GET["rdate"];
@$repairman = $_GET["repairman"];
@$rdetail = $_GET["rdetail"];

// repairman: "张三", rdate: "2019-06-30", rdetail: "sdagsda", rnumber: 4
// $rnumber = "4";
// $rdate = "2019-06-02";
// $repairman = "大飞机";
// $rdetail = "画的那幅的";

$select_enumber_sql = "select enumber from equip_info where eid='$rnumber'";
//echo $select_enumber_sql;
$result1 = mysqli_query($conn, $select_enumber_sql);
$number_info = mysqli_fetch_row($result1);
//var_dump($number_info);
foreach ($number_info as $key => $value) {
    $rnumber = $value;
}
//echo $rnumber;
$insert_repair_info_sql = "insert into repair_info(rnumber,rdate,repairman,rdetail) values('$rnumber','$rdate','$repairman','$rdetail')";
//echo $insert_repair_info_sql;
$result2 = mysqli_query($conn, $insert_repair_info_sql);
if ($result2) {
    echo "yes";
} else {
    echo "no";
}
