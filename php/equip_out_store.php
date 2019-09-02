<?php

require("init.php");

@$eid = $_GET["eid"];
$update_out_sql = "update equip_info set estatus=1 where eid='$eid'";
$result = mysqli_query($conn, $update_out_sql);
if ($result) {
    echo "yes";
} else {
    echo "no";
}
