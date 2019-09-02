
//检查登陆
function check_user_passwd(){
    var name = $('.input-name').val();
    var passwd= $('.input-passwd').val();
    var position = $('.input-position').val();
    // console.log(name);
    // console.log(passwd);
    // console.log(position);
    $.ajax(
        {
            url: "php/is_logined.php",
            type: "get",
            async : "false",
            data: {uname:name,upasswd:passwd,uposition:position},
            success: function(data){
                //data = JSON.parse(data);
                if(data == "no"){
                    $('.isLand_label').html('<i class="layui-icon">&#xe69c;</i> 账号或密码错误！');
                }
            }
        }
    );
    return false;
}


//检查编号
function check_number() {
    var number = $('.input-number').val();
    //alert(number);
    var re = /^[0-9a-zA-Z]*$/g;
    if (!re.test(number)) {
        str = "请输入数字或字母！";
        $('.mark-number').attr("style", "color:red !important");
        $('.mark-number').html(str);
        $('.input-number').val("");
    } else if (number.length < 6) {
        str = "请输入不少于6位！";
        $('.mark-number').attr("style", "color:red !important");
        $('.mark-number').html(str);
    } else {
        $.ajax({
            url: "unique_number.php",
            type: "get",
            data: { unumber: number },
            success: function (Text) {
                if (Text == "no") {
                    //alert("数据库没有");
                    $('.mark-number').attr("style", "color:green !important");
                    $('.mark-number').html("✓");
                } else if (Text == "yes") {
                    //alert("数据库有");
                    $('.mark-number').attr("style", "color:red !important");
                    $('.mark-number').html("✘该用户名已经有了");
                    $('.input-number').val("");
                }
            }
        });
    }
}

//检查密码
function check_passwd() {
    var passwd = $('.input-passwd').val();
    if (passwd == "") {
        $('.mark-passwd').attr("style", "color:red !important");
        $('.mark-passwd').html("☚密码不能为空！");
    } else if (passwd.length < 3) {
        $('.mark-passwd').attr("style", "color:red !important");
        $('.mark-passwd').html("☚密码长度太短！");
    } else {
        $('.mark-passwd').attr("style", "color:green !important");
        $('.mark-passwd').html("✓");
    }
}

//二次确认密码
function again_check_passwd() {
    var passwd = $('.input-passwd').val();
    //alert(passwd);
    var again_passwd = $('.input-again-passwd').val();
    //alert(again_passwd);
    if (passwd == again_passwd) {
        $('.again-mark-passwd').attr("style", "color:green !important");
        $('.again-mark-passwd').html("✓密码一致");
    } else {
        $('.again-mark-passwd').attr("style", "color:red !important");
        $('.again-mark-passwd').html("✗密码不一致");
        $('.again-input-passwd').val("");
    }
}

//修改信息
function change_info(id) {
    var element = layui.element;
    var form = layui.form;
    //alert(id);
    layer.open({
        type: 1,
        title: "信息修改",
        skin: "layui-layer-molv",
        area: ['500px', '400px'],
        content: '<br><form class="layui-form layui-form-pane admin-form" style="margin-left:50px;"><div class="layui-form-item"><label class="layui-form-label">密码</label><div class="layui-input-inline"><input type="password"name="upasswd"placeholder="修改密码"autocomplete="off"class="layui-input input-passwd"onblur="check_passwd()"autofocus></div><div class="layui-form-mid layui-word-aux mark-passwd"></div></div><div class="layui-form-item"><label class="layui-form-label">确认密码</label><div class="layui-input-inline"><input type="password"placeholder="确认密码"autocomplete="off"class="layui-input input-again-passwd"onblur="again_check_passwd()"></div><div class="layui-form-mid layui-word-aux again-mark-passwd"></div></div><div class="layui-form-item"><label class="layui-form-label">修改身份</label><div class="layui-input-inline"><select name="uposition"lay-filter="aihao"><option value=""></option><option value="1">系统管理员</option><option value="2">设备管理员</option><option value="3">仓库管理员</option></select></div></div><br><div class="layui-form-item btn-submit_reset"><button class="layui-btn layui-btn-normal add-users"lay-submit lay-filter="changeInfo">提交添加</button><button type="reset"class="layui-btn layui-btn-primary">重置信息</button></div></form>'
    });
    element.init();
    form.render();
    form.on('submit(changeInfo)', function (formData) {
        //layer.msg("修改");
        //{"upasswd":"3333","uposition":"2"}
        var data = formData.field;
        // console.log(data);
        // console.log(typeof(data));
        data.uid = id + "";
        // console.log(data);
        $.ajax(
            {
                url: "change_users.php",
                type: "get",
                data: data,
                success: function (data) {
                    if (data == "yes") {
                        layer.msg("修改成功！");
                        layer.closeAll();
                        $('.all-users').click();
                    } else {
                        layer.msg("修改失败！");
                    }
                },
                error: function () {
                    layer.msg("无法预期的错误！！！");
                }
            }
        );
        return false;
    });

}


//删除信息
function delete_info(id) {
    //alert(id);
    $.ajax(
        {
            url: "delete_users.php",
            type: "get",
            data: { "uid": id },
            success: function (data) {
                if (data == "yes") {
                    $('.all-users').click();
                    layer.msg("删除成功！");
                } else {
                    layer.msg("删除失败！！！");
                }
            }
        }
    );
    return false;
}


//同意审核申请
function apply_agree(aid) {
    //alert(aid);
    $.ajax(
        {
            url: "apply_agree.php",
            type: "get",
            data: { "aid": aid },
            success: function (data) {
                if (data == "yes") {
                    layer.msg("同意该申请");
                    $('.app-for-aduit').click();
                } else {
                    layer.msg("不同意该申请");
                }
            }
        }
    );
}

//不同意申请
function apply_no_agree(aid) {
    $.ajax(
        {
            url: "apply_no_agree.php",
            type: "get",
            data: { "aid": aid },
            success: function (data) {
                if (data == "yes") {
                    layer.msg("不同意该申请");
                    $('.app-for-aduit').click();
                } else {
                    layer.msg("同意该申请");
                }
            }
        }
    );
}

//设备标记出库
function equip_out_store(eid) {
    //alert("设备出库"+eid);
    $.ajax(
        {
            url: "equip_out_store.php",
            type: "get",
            data: { "eid": eid },
            success: function (data) {
                if (data == "yes") {
                    layer.msg("设备出库");
                    $('.out-storehouse').click();
                } else {
                    layer.msg("设备出库错误");
                }
            }
        }
    );
}

//检查实验室编号
function check_lnumber() { }

//添加实验室
function add_lab() {
    //alert("添加实验室");
    var element = layui.element;
    var form = layui.form;
    layer.open({
        type: 1,
        title: "实验室添加",
        skin: "layui-layer-molv",
        area: ['450px', '300px'],
        content: '<br><form class="layui-form layui-form-pane"style="margin-left:50px;"><div class="layui-form-item"><label class="layui-form-label">实验室编号</label><div class="layui-input-inline"><input onblur="check_lnumber()"type="text"name="lnumber"required lay-verify="required"placeholder="实验室编号"autocomplete="off"class="layui-input"></div><div class="layui-form-mid layui-word-aux">辅助文字</div></div><div class="layui-form-item"><label class="layui-form-label">实验室名称</label><div class="layui-input-inline"><input type="text"name="lname"required lay-verify="required"placeholder="实验室名称"autocomplete="off"class="layui-input"></div></div><br><div class="layui-form-item btn-submit_reset"><button class="layui-btn layui-btn-normal"lay-submit lay-filter="addLabInfo">提交添加</button><button type="reset"class="layui-btn layui-btn-primary">重置信息</button></div></form>'
    });
    element.init();
    form.render();
    form.on('submit(addLabInfo)', function (formData) {
        //console.log(formData);
        $.ajax(
            {
                url: "add_lab_info.php",
                type: "get",
                data: formData.field,
                success: function (data) {
                    if (data == "yes") {
                        layer.msg("添加成功！");
                        layer.closeAll();
                        $('.laboratory-info').click();
                    } else {
                        layer.msg("添加失败！");
                    }
                },
                error: function () {
                    layer.msg("无法预期的错误！！！");
                }
            }
        );
        return false;
    });
}

//申请维修
function apply_maintenance(eid) {
    //alert(eid);
    $.ajax(
        {
            url: "change_equip_status.php",
            type: "get",
            data: { "eid": eid },
            success: function (data) {
                if (data == "yes") {
                    layer.msg("申请成功！");
                    $('.maintenance-apply').click();
                } else {
                    layer.msg("出现错误！");
                }
            }
        }
    );
}


//所有维修人员
function select_all_mname(){
    var mname_arr = [];
    $.ajax(
        {
            url: "select_all_maintainer.php",
            type: "get",
            async: false,
            success: function(data){
                data = JSON.parse(data);
                $.each(data, function(i, v){
                    mname_arr[i] = v.mname;
                });
            }
        }
    );
    return mname_arr;
}

//具体维修信息
function note_maintenance_equip_info(eid) {
    var mname = select_all_mname();
    //console.log(mname);
    var element = layui.element;
    var form = layui.form;
    var laydate = layui.laydate;
    var html = '<br><form class="layui-form layui-form-pane"style="margin-left:50px;"><div class="layui-form-item"><label class="layui-form-label">维修人员</label><div class="layui-input-inline"><select name="repairman"lay-filter="aihao"><option value=""></option>';
    $.each(mname, function(i, v){
        html += '<option value="'+v+'"'+'>'+v+'</option>';
    });
    html += '</select></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">维修日期</label><div class="layui-input-inline"><input name="rdate"type="text"class="layui-input maintenance-date"placeholder="yyyy-MM-dd"></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">详细情况</label><div class="layui-input-inline"><textarea name="rdetail"placeholder="请输入内容"class="layui-textarea"></textarea></div></div></div><div class="layui-form-item"><button class="layui-btn layui-btn-normal"lay-submit lay-filter="noteMaintenanceEquip">提交信息</button><button type="reset"class="layui-btn layui-btn-primary">重置信息</button></div></form>';
    layer.open({
        type: 1,
        title: "登记维修记录",
        skin: "layui-layer-molv",
        area: ['450px', '450px'],
        content: html
    });
    element.init();
    form.render();
    laydate.render({
        elem: '.maintenance-date'
    });
    form.on('submit(noteMaintenanceEquip)', function (formData) {
        formData.field.rnumber=eid
        console.log(formData.field);
        $.ajax(
            {
                url: "insert_maintenance_info.php",
                type: "get",
                data: formData.field,
                success: function (data) {
                    if (data == "yes") {
                        layer.msg("登记成功！");
                        layer.closeAll();
                        $.ajax(
                            {
                                url: "change_equip_status_use.php",
                                type: "get",
                                data: { "eid": eid },
                                success: function (data) {
                                    if (data == "yes") {
                                        $('.maintenance-mark').click();
                                    }
                                }
                            }
                        );
                    } else {
                        layer.msg("登记失败！");
                    }
                },
                error: function () {
                    layer.msg("无法预期的错误！！！");
                }
            }
        );
        return false;
    })
}

//标记设备报废
function note_maintenance_equip_bad_info(eid) {
    layer.open(
        {
            type: 1,
            title: "信息",
            content: '<div>' + "确定报废？" + '</div>',
            btn: '关闭全部',
            yes: function () {
                layer.closeAll();
                $.ajax(
                    {
                        url: "change_equip_status_bad.php",
                        type: "get",
                        data: { "eid": eid },
                        success: function (data) {
                            if (data == "yes") {
                                $('.bad-mark').click();
                            } else {
                                layer.msg("出现错误！！！");
                            }
                        }
                    }
                );
            }
        }
    );
}


//添加维修人员
function add_maintainer() {
    var element = layui.element;
    var form = layui.form;
    var laydate = layui.laydate;
    layer.open({
        type: 1,
        title: "添加维修人员",
        skin: "layui-layer-molv",
        area: ['400px', '300px'],
        content: '<br><form class="layui-form layui-form-pane"style="margin-left:50px;"><div class="layui-form-item"><label class="layui-form-label">编号</label><div class="layui-input-inline"><input type="text"name="mnumber"required lay-verify="required"placeholder="编号"autocomplete="off"class="layui-input"></div></div><div class="layui-form-item"><label class="layui-form-label">姓名</label><div class="layui-input-inline"><input type="text"name="mname"required lay-verify="required"placeholder="姓名"autocomplete="off"class="layui-input"></div></div><br><div class="layui-form-item btn-submit_reset"><button class="layui-btn layui-btn-normal"lay-submit lay-filter="add-maintainer">添加</button><button type="reset"class="layui-btn layui-btn-primary">重置</button></div></form>'
    });
    element.init();
    form.render();
    form.on('submit(add-maintainer)', function (formData) {
        //console.log(formData.field);
        $.ajax(
            {
                url: "php/add_maintainer_info.php",
                type: "get",
                data: formData.field,
                success: function (data) {
                    if (data == "yes") {
                        layer.msg("添加成功！");
                        layer.closeAll();
                        $('.maintainer-manage').click();
                    }
                },
                error: function () {
                    layer.msg("无法预期的错误！！！");
                    layer.closeAll();
                }
            }
        );
        return false;
    })
}

//删除维修人员
function delete_maintainer(mid) {
    // alert(mid);
    $.ajax(
        {
            url: "delete_maintainer_info.php",
            type: "get",
            data: { "mid": mid },
            success: function (data) {
                console.log(data);
                if (data == "yes") {
                    layer.msg("删除成功");
                    $('.maintainer-manage').click();
                } else {
                    layer.msg("删除失败！");
                }
            },
            error: function () {
                layer.msg("出现错误！");
            }
        }
    );
}

//公告栏内容
function show_notice() {
    //alert("公告栏内容");
    $.ajax(
        {
            url: "select_notice.php",
            type: "get",
            success: function (data) {
                data = JSON.parse(data);
                //console.log(data);
                var html = "<ul>";
                $.each(data, function (i, item) {
                    //alert(item.nid);
                    html += "<li>" + item.ncontent;
                    html += "&nbsp;———&nbsp;&nbsp;"
                    html += item.ndate + "</li><br>";
                });
                $('.notice-conten').append(html);
                $('.notice-conten').append("</ul>");
            },
            error: function () {
                $('.notice-conten').append("<img src='images/loading-b.gif'>");
            }
        }
    );
    return false;
}
