<?php

require("init.php");

@$lnumber = $_GET["lnumber"];
@$lname = $_GET["lname"];

// $lnumber = "1412";
// $lname = "IOS实验室";
$insert_lab_info_Sql = "insert into lab_info(lnumber,lname) values('$lnumber','$lname')";
$result = mysqli_query($conn, $insert_lab_info_Sql);
if ($result) {
    echo "yes";
} else {
    echo "no";
}
