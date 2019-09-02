<?php

require("init.php");
@$eid = $_GET["eid"];
//$eid = 1;
$update_equp_status_sql = "update equip_info set estatus='3' where eid='$eid'";
//echo $update_equp_status_sql;
$result = mysqli_query($conn, $update_equp_status_sql);
if($result){
    echo "yes";
}else{
    echo "no";
}
mysqli_close($conn);