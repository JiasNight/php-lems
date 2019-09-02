<?php

require("init.php");

@$ncontent = $_GET["ncontent"];
@$ndate = $_GET["ndate"];

$insert_sql = "insert into notice_info(ncontent,ndate) values('$ncontent','$ndate')";
$result = mysqli_query($conn, $insert_sql);
if ($result) {
    echo "yes";
} else {
    echo "no";
}
mysqli_close($conn);
