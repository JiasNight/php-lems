<?php

require("init.php");

$file_path = getcwd(); //保存到的路径
//echo $file_path_name;
$bak_path = $file_path."\DBbackup";
$name = 'backup_' . date('Y-m-d') . ".sql";
if (!file_exists($bak_path)) {
    mkdir($bak_path);
}
$mysqldump_url = "mysqldump.exe";
$process = $mysqldump_url . " -u" . $user . "  -p" . $pasword . "  " . $databasesName . " >" . $bak_path . "/" . $name;
$er = system($process); //system()执行外部程序，并且显示输出
if ($er !== false) {
    echo 'success';
} else {
    echo 'error';
}
