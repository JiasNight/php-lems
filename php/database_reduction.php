<?php
require("init.php");

if(isset($_FILES['bak_sql']) && !$_FILES['bak_sql']['error']) {                   // 文件存在且不报错
    $fileName = $_FILES['bak_sql']['name'];                                      // 获取文件
    $fileExtension = pathinfo($fileName);                                       // 获取文件路径信息
    $fileExtension = $fileExtension['extension'];                               // 获取文件后缀
    $time = time();                                                             // 根据时间戳区分
    //$destinationPath = "./../upload/";                                          // 目标文件夹
    //$newFileName = $destinationPath.$time.".".$fileExtension;                   // 完整的url
    // if(move_uploaded_file($_FILES['upload']['tmp_name'], $newFileName)) {       // 移动文件到目标路径
    //     echo("文件移动成功");
    // } else {
    //     die("文件路径出错");
    // }
 
    echo $fileName;
    echo $_FILES['bak_sql']["tmp_name"];
    // var_dump(pathinfo($fileName));
}


// $mysql_url = "mysql.exe";
// $process = $mysql_url . "-u" . $user . "-p" . $pasword . "  " . $databasesName . "<" . $file_bak_path;
// $er = system($process); //system()执行外部程序，并且显示输出
// if ($er !== false) {
//     echo json_encode('success');
// } else {
//     echo json_encode('error');
// }