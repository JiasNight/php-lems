<?php

require("init.php");
@$aid = $_GET["aid"];
$agree_appaly_sql = "update apply_info set astatus=1 where aid='$aid'";
$result = mysqli_query($conn, $agree_appaly_sql);
if ($result) {
    echo "yes";
}else{ 
    echo "no";
}

mysqli_close($conn);