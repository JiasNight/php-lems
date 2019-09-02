//JavaScript代码区域
layui.use(['element', 'jquery', 'form', 'laydate', 'upload'], function () {
  var element = layui.element;
  var $ = layui.$;
  var form = layui.form;
  var layer = layui.layer;
  var laydate = layui.laydate;
  var upload = layui.upload;

  //退出系统
  $('.exit-os').on('click', function () {
    layer.msg("系统退出！");
    window.location.href = "../index.html";
  });

  //一级目录点击
  $('.show-console').on('click', function () {
    var str = '<li>控制台>></li>';
    $('.os-nav-ul').html(str);
    // $('.layui-layout-left').empty();
    element.init();
  });

  // //系统用户
  $('.users-manage').on('click', function () {
    $('.os-nav-ul').empty();
    var str = '<li class="layui-nav-item"><a class="add-admin"><i class="layui-icon">&#xe61a;</i> 管理用户添加</a></li><li class="layui-nav-item"><a class="add-maintenance"><i class="layui-icon">&#xe61a;</i> 维修用户添加</a></li>';
    $('.os-nav-ul').html(str);
    var html = "<h1>管理用户添加</h1>";
    $('.content-body').html(html);
    element.init();
  });

  //所有用户信息
  $('.all-users').on('click', function () {
    $('.os-nav-ul').html("<li>控制台>></li>");
    element.init();
  });

  // //添加管理用户
  $(document).on('click', '.add-admin', function () {
    // layer.msg('hello');
    $('.content-body').empty();
    var html = '<div style="margin-left:250px; font-size: 25px;">添加管理用户</div><br>';
    html += '<div id="adduser-box"><form class="layui-form layui-form-pane admin-form"><div class=" layui-form-item"><label class="layui-form-label">用户账号</label><div class="layui-input-inline"><input type="text"name="unumber"lay-verify="required"placeholder="请输入管理账号"autocomplete="off"class="layui-input input-number"onblur="check_number()"></div><div class="layui-form-mid layui-word-aux mark-number">系统管理员以admin开头</div></div><div class="layui-form-item"><label class="layui-form-label">用户姓名</label><div class="layui-input-inline"><input type="text"name="uname"lay-verify="required"placeholder="请输入姓名"autocomplete="off"class="layui-input input-name"></div></div><div class="layui-form-item"><label class="layui-form-label">密码</label><div class="layui-input-inline"><input type="password"name="upasswd"placeholder="请输入密码"autocomplete="off"class="layui-input input-passwd"onblur="check_passwd()"></div><div class="layui-form-mid layui-word-aux mark-passwd"></div></div><div class="layui-form-item"><label class="layui-form-label">确认密码</label><div class="layui-input-inline"><input type="password"placeholder="确认密码"autocomplete="off"class="layui-input input-again-passwd"onblur="again_check_passwd()"></div><div class="layui-form-mid layui-word-aux again-mark-passwd"></div></div><div class="layui-form-item"><label class="layui-form-label">选择身份</label><div class="layui-input-inline"><select name="uposition"lay-filter="aihao"><option value=""></option><option value="1">系统管理员</option><option value="2">设备管理员</option><option value="3">仓库管理员</option></select></div></div><br><br><div class="layui-form-item btn-submit_reset"><button class="layui-btn layui-btn-normal add-users"lay-submit lay-filter="usersSubmitData">提交添加</button><button type="reset"class="layui-btn layui-btn-primary">重置信息</button></div></form></div>';
    $('.content-body').html(html);
    element.init();
    form.render();
  });


  // //添加维修用户
  $(document).on('click', '.add-maintenance', function () {
    // layer.msg('hello');
    $('.content-body').empty();
    var html = '<div style="margin-left:250px; font-size: 25px;">添加维修用户</div><br>';
    html += '<div id="adduser-box"><form class="layui-form layui-form-pane maintenance-form"><div class=" layui-form-item"><label class="layui-form-label">维修账号</label><div class="layui-input-inline"><input type="text"name="unumber"lay-verify="required"placeholder="请输入账号"autocomplete="off"class="layui-input input-number"onblur="check_number()"></div><div class="layui-form-mid layui-word-aux mark-number">维修员以main开头</div></div><div class="layui-form-item"><label class="layui-form-label">维修姓名</label><div class="layui-input-inline"><input type="text"name="uname"lay-verify="required"placeholder="请输入姓名"autocomplete="off"class="layui-input input-name"></div></div><div class="layui-form-item"><label class="layui-form-label">密码</label><div class="layui-input-inline"><input type="password"name="upasswd"placeholder="请输入密码"autocomplete="off"class="layui-input input-passwd"onblur="check_passwd()"></div><div class="layui-form-mid layui-word-aux mark-passwd"></div></div><div class="layui-form-item"><label class="layui-form-label">确认密码</label><div class="layui-input-inline"><input type="password"placeholder="确认密码"autocomplete="off"class="layui-input input-again-passwd"onblur="again_check_passwd()"></div><div class="layui-form-mid layui-word-aux again-mark-passwd"></div></div><br><br><div class="layui-form-item btn-submit_reset"><button class="layui-btn layui-btn-normal add-users"lay-submit lay-filter="maintenanceSubmitData">提交添加</button><button type="reset"class="layui-btn layui-btn-primary">重置信息</button></div></form></div>';
    $('.content-body').html(html);
    element.init();
    form.render();
  });

  //个人资料
  $('.show-use-info').on('click', function () {
    var str = '<li>控制台>></li>';
    $('.os-nav-ul').html(str);

    $('.content-body').html(html);
    element.init();
  });

  //申请审核
  $('.app-for-aduit').on('click', function () {
    var str = '<li class="layui-nav-item">控制台>></li>';
    $('.os-nav-ul').html(str);
    $.ajax(
      {
        url: "apply_aduit.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          //alert(data);
          var html = '<div style="text-align:center; font-size: 25px;">审核信息表</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>申请编号</th><th>设备名称</th><th>单价</th><th>数量</th><th>金额</th><th>申请人</th><th>申请日期</th><th>备注</th><th>操作</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          $.each(data, function (i, item) {
            if (item.astatus == "1") {
              item.astatus = "同意";
            } else if (item.astatus == "2") {
              item.astatus = "未批复";
            } else {
              item.astatus = "不同意";
            }
            var m = 0, s1 = item.aprice.toString(), s2 = item.abuynum.toString();
            try { m += s1.split(".")[1].length } catch (e) { }
            try { m += s2.split(".")[1].length } catch (e) { }
            var money = Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
            //alert(item);
            html += '<td>' + (i + 1) + '</td>';
            html += '<td>' + item.anumber + '</td>';
            html += '<td>' + item.aname + '</td>';
            html += '<td>' + parseFloat(item.aprice) + '</td>';
            html += '<td>' + item.abuynum + '</td>';
            html += '<td>' + money + '</td>';
            html += '<td>' + item.awho + '</td>';
            html += '<td>' + item.adate + '</td>';
            html += '<td>' + item.astatus + '</td>';
            if (item.astatus == "同意") {
              html += '<td><button type="button"class="layui-btn layui-btn-sm layui-btn-normal layui-btn layui-btn-disabled"><i class="layui-icon">&#xe605;</i>同意</button><button type="button"class="layui-btn layui-btn-sm layui-btn-normal layui-btn-danger layui-btn layui-btn-disabled"><i class="layui-icon">&#x1006;</i>不同意</button></td>';
            } else if (item.astatus == "不同意") {
              html += '<td><button type="button"class="layui-btn layui-btn-sm layui-btn-normal layui-btn layui-btn-disabled"><i class="layui-icon">&#xe605;</i>同意</button><button type="button"class="layui-btn layui-btn-sm layui-btn-normal layui-btn-danger layui-btn layui-btn-disabled"><i class="layui-icon">&#x1006;</i>不同意</button></td>';
            } else {
              html += '<td><button onclick="apply_agree(' + item.aid + ')"type="button"class="layui-btn layui-btn-sm layui-btn-normal"><i class="layui-icon">&#xe605;</i>同意</button><button onclick="apply_no_agree(' + item.aid + ')"type="button"class="layui-btn layui-btn-sm layui-btn-normal layui-btn-danger"><i class="layui-icon">&#x1006;</i>不同意</button></td>';
            }

            html += '</tr>';
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });

  //实验室信息
  $('.laboratory-info').on('click', function () {
    var str = '<li>控制台>></li>';
    $('.os-nav-ul').html(str);
    $.ajax(
      {
        url: "select_all_laboratory.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">实验室信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>室验室编号</th><th>室验室名称</th><th>设备数量</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          var num = calc_equip_num();
          console.log(calc_equip_num());
          $.each(data, function (i, item) {
            //alert("i="+i);
            html += '<td>' + n + '</td>';
            html += '<td>' + item.lnumber + '</td>';
            html += '<td>' + item.lname + '</td>';
            html += '<td>' + num[i] + '</td>';
            // html += '<td>' + item.lequnum + '</td>';
            html += '</tr>';
            n++;
          });
          html += '</tbody></table>';
          html += '<br><br>'
          html += '<div style="text-align:center;"><button onclick="add_lab()"type="button"class="layui-btn layui-btn-lg layui-btn-normal"><i class="layui-icon">&#xe608;</i>添加实验室</button></div><br>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });


  //计算机实验室设备数量
  function calc_equip_num() {
    //alert(i);
    var obj = new Object;
    $.ajax(
      {
        url: "select_equip_num.php",
        type: "get",
        async: false,
        success: function (data) {
          data = JSON.parse(data);
          // console.log(typeof(data));
          // console.log("data:"+data);
          obj = data;
        }
      }
    );
    return obj;
  }


  //设备信息
  $(document).on('click', '.equip-info', function () {
    //alert("设备信息信息");
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">实验室设备信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>购买日期</th><th>入库日期</th><th>设备状态</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            if (item.estatus == "0") {
              item.estatus = "未使用";
            } else if (item.estatus == "1") {
              item.estatus = "使用中";
            } else if (item.estatus == "2") {
              item.estatus = "维修中";
            } else if (item.estatus == "3") {
              item.estatus = "需维修";
            } else {
              item.estatus = "报废";
            }
            html += '<td>' + n + '</td>';
            //alert(n);
            html += '<td>' + item.enumber + '</td>';
            html += '<td>' + item.ename + '</td>';
            html += '<td>' + item.eclassroom + '</td>';
            html += '<td>' + item.ebuydate + '</td>';
            html += '<td>' + item.eintdate + '</td>';
            html += '<td>' + item.estatus + '</td>';
            html += '</tr>';
            n = n + 1;
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });

  //维修申请
  $('.maintenance-apply').on('click', function () {
    var str = '<li class="layui-nav-item">控制台>></li>';
    $('.os-nav-ul').html(str);
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">实验室设备信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>申请维修</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            if (item.estatus == "1") {
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td><button onclick="apply_maintenance(' + item.eid + ')"type="button"class="layui-btn layui-btn-sm layui-btn-normal"><i class="layui-icon">&#xe605;</i>申请维修</button></td>';
              html += '</tr>';
              n = n + 1;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });

  // //设备统计<li class="layui-nav-item"><a class="bad-show"><i class="layui-icon">&#xe61a;</i> 报废统计</a></li>
  $('.equip-info').on('click', function () {
    $('.os-nav-ul').empty();
    var str = '<li class="layui-nav-item"><a class="maint-show"><i class="layui-icon">&#xe61a;</i> 维修统计</a></li><li class="layui-nav-item"><a class="used-show"><i class="layui-icon">&#xe61a;</i> 在用统计</a></li>';
    $('.os-nav-ul').html(str);
    element.init();
  });

  //报废统计
  $(document).on('click', '.bad-show', function () {
    //alert("设备信息信息");
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">报废设备信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>购买日期</th><th>入库日期</th><th>设备状态</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            if (item.estatus == "4") {
              item.estatus = "报废";
              //alert(i);
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td>' + item.ebuydate + '</td>';
              html += '<td>' + item.eintdate + '</td>';
              html += '<td>' + item.estatus + '</td>';
              html += '</tr>';
              n++;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });

  //维修统计
  $(document).on('click', '.maint-show', function () {
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">维修设备信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>购买日期</th><th>入库日期</th><th>设备状态</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            if (item.estatus == "2") {
              item.estatus = "维修中";
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td>' + item.ebuydate + '</td>';
              html += '<td>' + item.eintdate + '</td>';
              html += '<td>' + item.estatus + '</td>';
              html += '</tr>';
              n++;
            } else if (item.estatus == "3") {
              item.estatus = "需维修";
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td>' + item.ebuydate + '</td>';
              html += '<td>' + item.eintdate + '</td>';
              html += '<td>' + item.estatus + '</td>';
              html += '</tr>';
              n++;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });

  //在用统计
  $(document).on('click', '.used-show', function () {
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">使用中设备信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>购买日期</th><th>入库日期</th><th>设备状态</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';

          var n = 1;
          $.each(data, function (i, item) {
            if (item.estatus == "1") {
              item.estatus = "使用中";
              //alert(i);
              //n = i;
              html += '<td>' + n + '</td>';
              //alert(n);
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td>' + item.ebuydate + '</td>';
              html += '<td>' + item.eintdate + '</td>';
              html += '<td>' + item.estatus + '</td>';
              html += '</tr>';
              n++;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });

  // //库存管理
  $('.store-manage').on('click', function () {
    $('.os-nav-ul').empty();
    var str = '<li class="layui-nav-item"><a class="enter-storehouse"><i class="layui-icon">&#xe61a;</i> 入库登记</a></li><li class="layui-nav-item"><a class="out-storehouse"><i class="layui-icon">&#xe61a;</i> 出库登记</a></li><li class="layui-nav-item"><a class="store-num"><i class="layui-icon">&#xe61a;</i> 库存数量</a></li>';
    $('.os-nav-ul').html(str);
    var str = '<h1>仓库管理</h1>';
    $('.content-body').html(str);
    element.init();
  });


  //计算机实验室查询
  function select_lab_all() {
    var lab_arr = [];
    $.ajax(
      {
        url: "select_all_laboratory.php",
        type: "get",
        async: false,
        success: function (data) {
          data = JSON.parse(data);
          $.each(data, function (i, item) {
            //console.log(item.lname);
            lab_arr[i] = item.lname;
          });
        }
      }
    );
    return lab_arr;
  }

  //入库登记
  $(document).on('click', '.enter-storehouse', function () {
    var lab_arr = select_lab_all();
    //console.log(lab_arr);
    $('.content-body').empty();
    var html = '<div style="margin-left:250px; font-size: 25px;">设备登记入库</div><br>';
    html += '<div class="enter-store-note"><form class="layui-form"><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">设备编号</label><div class="layui-input-inline"><input type="text"name="enumber"required lay-verify="required"placeholder="请输入"autocomplete="off"class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">设备名称</label><div class="layui-input-inline"><input type="text"name="ename"required lay-verify="required"placeholder="请输入"autocomplete="off"class="layui-input"></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">购买日期</label><div class="layui-input-inline"><input type="text"name="ebuydate"class="layui-input buy-date"placeholder="yyyy-MM-dd"></div></div><div class="layui-inline"><label class="layui-form-label">入库日期</label><div class="layui-input-inline"><input type="text"name="eintdate"class="layui-input int-date"placeholder="yyyy-MM-dd"></div></div></div><div class="layui-form-item"><label class="layui-form-label">选择实验室</label><div class="layui-input-inline"><select name="eclassroom"lay-filter="aihao"><option value=""></option>';
    $.each(lab_arr, function (i, value) {
      html += '<option value="' + value + '">' + value + '</option>';
    });
    html += '</select></div></div><br><br><div class="layui-form-item"><div class="layui-input-block"><button class="layui-btn"lay-submit lay-filter="enterStore">登记提交</button><button type="reset"class="layui-btn layui-btn-primary btn-enter-reset">重置登记</button></div></div></form></div>';
    $('.content-body').html(html);
    laydate.render({
      elem: '.buy-date'
    });
    laydate.render({
      elem: '.int-date'
    });
    element.init();
    form.render();
  });


  //出库登记
  $(document).on('click', '.out-storehouse', function () {
    $('.content-body').empty();
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">库存设备统计</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>购买日期</th><th>入库日期</th><th>设备状态</th><th>操作</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            if (item.estatus == "0") {
              item.estatus = "未使用";
              //alert(i);
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td>' + item.ebuydate + '</td>';
              html += '<td>' + item.eintdate + '</td>';
              html += '<td>' + item.estatus + '</td>';
              html += '<td><button onclick="equip_out_store(' + item.eid + ')"type="button"class="layui-btn layui-btn-sm layui-btn-normal"><i class="layui-icon">&#xe605;</i>出库</button></td>';
              html += '</tr>';
              n = n + 1;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });

  //库存数量
  $(document).on('click', '.store-num', function () {
    //alert("库存数量");
    $('.content-body').empty();
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">库存数量</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>购买日期</th><th>入库日期</th><th>设备状态</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            if (item.estatus == "0") {
              item.estatus = "未使用";
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td>' + item.ebuydate + '</td>';
              html += '<td>' + item.eintdate + '</td>';
              html += '<td>' + item.estatus + '</td></tr>';
              n = n + 1;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });


  // //申请管理apply-manage
  $('.apply-manage').on('click', function () {
    $('.os-nav-ul').empty();
    var str = '<li class="layui-nav-item"><a class="apply-buy"><i class="layui-icon">&#xe61a;</i> 购买申请</a></li><li class="layui-nav-item"><a class="apply-status"><i class="layui-icon">&#xe61a;</i> 审核查询</a></li>';
    $('.os-nav-ul').html(str);
    $('.content-body').empty();
    var html = '<h1>添加购买申请表和查看申请表状态</h1>';
    $('.content-body').html(html);
    element.init();
  });

  //购买申请
  $(document).on('click', '.apply-buy', function () {
    $('.content-body').empty();
    var html = '<div style="margin-left:250px; font-size: 25px;">添加申请表</div><br>';
    html += '<div class="apply-buy-box"><form class="layui-form"><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">申请表编号</label><div class="layui-input-inline"><input type="text"name="anumber"required lay-verify="required"placeholder="请输入"autocomplete="off"class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">设备名称</label><div class="layui-input-inline"><input type="text"name="aname"required lay-verify="required"placeholder="请输入"autocomplete="off"class="layui-input"></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">设备价格</label><div class="layui-input-inline"><input type="text"name="aprice"required lay-verify="required"placeholder="￥"autocomplete="off"class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">设备数量</label><div class="layui-input-inline"><input type="text"name="abuynum"required lay-verify="required"placeholder="数量"autocomplete="off"class="layui-input"></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">申请人</label><div class="layui-input-inline"><input type="text"name="awho"required lay-verify="required"placeholder="申请人"autocomplete="off"class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">申请日期</label><div class="layui-input-inline"><input type="text"name="adate"lay-verify="date"placeholder="yyyy-MM-dd"autocomplete="off"class="layui-input apply-date"></div></div></div><br><br><div class="layui-form-item"><div class="layui-input-block"><button class="layui-btn"lay-submit lay-filter="buyApply">提交申请</button><button type="reset"class="layui-btn layui-btn-primary">重置申请</button></div></div></form></div>';
    $('.content-body').html(html);
    laydate.render({
      elem: '.apply-date'
    });
    element.init();
    form.render();
  });


  //审核查询
  $(document).on('click', '.apply-status', function () {
    //alert("审核查询");
    $.ajax(
      {
        url: "apply_aduit.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">审核信息表</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>申请编号</th><th>设备名称</th><th>单价</th><th>数量</th><th>金额</th><th>申请人</th><th>申请日期</th><th>状态</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          $.each(data, function (i, item) {
            if (item.astatus == "1") {
              item.astatus = "同意";
            } else if (item.astatus == "2") {
              item.astatus = "未批复";
            } else {
              item.astatus = "不同意";
            }
            var m = 0, s1 = item.aprice.toString(), s2 = item.abuynum.toString();
            try { m += s1.split(".")[1].length } catch (e) { }
            try { m += s2.split(".")[1].length } catch (e) { }
            var money = Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
            html += '<td>' + (i + 1) + '</td>';
            html += '<td>' + item.anumber + '</td>';
            html += '<td>' + item.aname + '</td>';
            html += '<td>' + parseFloat(item.aprice) + '</td>';
            html += '<td>' + item.abuynum + '</td>';
            html += '<td>' + money + '</td>';
            html += '<td>' + item.awho + '</td>';
            html += '<td>' + item.adate + '</td>';
            html += '<td>' + item.astatus + '</td>';
            html += '</tr>';
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
  });

  // //已购信息
  $('.buy-info').on('click', function () {
    $('.os-nav-ul').html("<li>控制台>></li>");
    //layer.msg('待开发');
    $.ajax(
      {
        url: "apply_aduit.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">已购信息表</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>申请编号</th><th>设备名称</th><th>单价</th><th>数量</th><th>金额</th><th>采购人</th><th>采购日期</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            if (item.astatus == "1") {
              item.astatus = "同意";
              var m = 0, s1 = item.aprice.toString(), s2 = item.abuynum.toString();
              try { m += s1.split(".")[1].length } catch (e) { }
              try { m += s2.split(".")[1].length } catch (e) { }
              var money = Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
              html += '<td>' + n + '</td>';
              html += '<td>' + item.anumber + '</td>';
              html += '<td>' + item.aname + '</td>';
              html += '<td>' + parseFloat(item.aprice) + '</td>';
              html += '<td>' + item.abuynum + '</td>';
              html += '<td>' + money + '</td>';
              html += '<td>' + item.awho + '</td>';
              html += '<td>' + item.adate + '</td>';
              html += '</tr>';
              n++;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
  });

  // //维修记录
  $('.maintenance-note').on('click', function () {
    $('.os-nav-ul').empty();
    var str = '<li class="layui-nav-item">控制台>></li>';
    $('.os-nav-ul').html(str);
    $('.content-body').empty();
    $.ajax(
      {
        url: "select_repair_info.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          //alert(data.rnumber);
          //console.log(data);
          var html = '<div style="text-align:center; font-size: 25px;">维修记录信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>维修日期</th><th>维修人员</th><th>详细情况</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            html += '<td>' + n + '</td>';
            html += '<td>' + item.rnumber + '</td>';
            html += '<td>' + item.rdate + '</td>';
            html += '<td>' + item.repairman + '</td>';
            html += '<td>' + item.rdetail + '</td>';
            html += '</tr>';
            n++;
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });

  // //维护记录
  $('.check-note').on('click', function () {
    $('.content-body').empty();
    $('.os-nav-ul').empty();
    var str = '<li>控制台>></li>';
    $('.os-nav-ul').html(str);
    $.ajax(
      {
        url: "php/",
        type: "",
        success: function (data) {

        }
      }
    );
    element.init();
  });

  //维修人员
  $('.maintainer-manage').on('click', function () {
    $('.content-body').empty();
    $('.os-nav-ul').empty();
    var str = '<li>控制台>></li>';
    $('.os-nav-ul').html(str);
    $.ajax(
      {
        url: "select_all_maintainer.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          //console.log(data);
          var html = '<div style="text-align:center; font-size: 25px;">维修人员信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>人员编号</th><th>维修员名称</th><th>操作</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            html += '<td>' + n + '</td>';
            html += '<td>' + item.mnumber + '</td>';
            html += '<td>' + item.mname + '</td>';
            html += '<td><div><button onclick="delete_maintainer(' + item.mid + ')"type="button"class="layui-btn layui-btn-sm layui-btn-warm"><i class="layui-icon">&#xe640;</i>删除维修人员</button></div></td>';
            html += '</tr>';
            n++;
          });
          html += '</tbody></table>';
          html += '<br><br>'
          html += '<div style="text-align:center;"><button onclick="add_maintainer()"type="button"class="layui-btn layui-btn-lg layui-btn-normal"><i class="layui-icon">&#xe608;</i>添加维修人员</button></div><br>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });

  // //维修统计
  $('.maintenance-statistical').on('click', function () {
    $('.os-nav-ul').empty();
    var str = '<li class="layui-nav-item"><a class="maintenance-mark"><i class="layui-icon">&#xe61a;</i> 维修登记</a></li>';
    str += '<li class="layui-nav-item"><a class="bad-mark"><i class="layui-icon">&#xe61a;</i> 报废登记</a></li>';
    $('.os-nav-ul').html(str);
    $('.content-body').empty();
    var html = '<h1>对设备的维修</h1>';
    $('.content-body').html(html);
    element.init();
  });

  //维修登记
  $(document).on('click', '.maintenance-mark', function () {
    //alert("维修登记");
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">需维修设备信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>操作</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            if (item.estatus == "3") {
              // item.estatus = "需维修"
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td><button id="btn-note-maintenance" onclick="note_maintenance_equip_info(' + item.eid + ')" type="button"class="layui-btn layui-btn-sm layui-btn-normal"><i class="layui-icon">&#xe642;</i>登记</button></td>';
              html += '</tr>';
              n = n + 1;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });


  //报废登记
  $(document).on('click', '.bad-mark', function () {
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">报废设备信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>操作</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            if (item.estatus == "3") {
              // item.estatus = "需维修"
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td><button onclick="note_maintenance_equip_bad_info(' + item.eid + ')" type="button"class="layui-btn layui-btn-sm layui-btn-normal"><i class="layui-icon">&#xe642;</i>标记</button></td>';
              html += '</tr>';
              n = n + 1;
            } else if (item.estatus == "4") {
              // item.estatus = "需维修"
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td><button type="button"class="layui-btn layui-btn-sm layui-btn-danger"><i class="layui-icon">&#x1006;</i>报废</button></td>';
              html += '</tr>';
              n = n + 1;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });


  // //申请信息
  $('.applyd-message').on('click', function () {
    $('.os-nav-ul').html("<li>控制台>></li>");
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">实验室设备信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>状态</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          var n = 1;
          $.each(data, function (i, item) {
            if (item.estatus == "3") {
              item.estatus = "需维修"
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td>' + item.estatus + '</td>';
              html += '</tr>';
              n = n + 1;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });


  //数据备份
  $('.data-backup').on('click', function () {
    $('.os-nav-ul').html("<li>控制台>></li>");
    //layer.msg('待开发');
    $.ajax({
      url: 'database_backup.php',
      type: 'get',
      beforeSend: function () {
        interval = window.setInterval(function () {
          var text = $(".content-body").html();
          if (text.length < 4) {
            $(".content-body").html('数据库备份中.');
          }
          var text = $(".content-body").html();
          if (text.length < 9) {
            $(".content-body").html(text + '.');
          } else {
            $(".content-body").html('数据库备份中.');
          }
        }, 200);
      },
      success: function (data) {
        if (data == 'success') {
          layer.msg("备份成功！！！");
          $(".content-body").html('数据备份完成！');
          window.clearInterval(interval);
        } else {
          layer.msg("备份出错！");
          window.clearInterval(interval);
        }
      }
    });
    return false;
  });

  //数据还原
  $('.data-reduction').on('click', function () {
    $('.os-nav-ul').html("<li>控制台>></li>");
    var html = '<br><br>请到php目录下的DBbackup文件下使用sql文件还原数据';
    $('.content-body').html(html);

  });



  //添加管理员,监听提交
  form.on('submit(usersSubmitData)', function (formData) {
    //layer.msg(JSON.stringify(data.field));
    $.ajax(
      {
        url: "users_add.php",
        type: "get",
        data: formData.field,
        success: function (data) {
          //alert(data);
          if (data == "no_add") {
            layer.msg("失败");
          } else {
            //alert("json数据");
            if (typeof data === 'string') {
              data = JSON.parse(data)
              //console.log(data);
            }
            $('.content-body').empty();
            //alert(txt);
            var html = '<div style="margin-left:250px; font-size: 25px;">添加的管理信息</div><br>';
            html += '<table class="layui-table"><colgroup><col width="200"><col width="200"><col width="200"><col width="200"></colgroup>';
            html += '<thead><tr><th>用户名</th><th>姓名</th><th>密码</th><th>身份</th><th>备注</th></tr></thead>';
            html += '<tbody><tr>';
            $.each(data, function (i, item) {
              html += '<td>' + item + '</td>';
            });
            html += '<td>无</td>';
            html += '</tbody></table>';
            $('.content-body').html(html);
            element.init();
          }
        }
      }
    );
    return false;
  });


  //维修用户监听添加
  form.on('submit(maintenanceSubmitData)', function (formData) {
    //alert(formData);
    $.ajax(
      {
        url: "maintenance_add.php",
        type: "get",
        data: formData.field,
        success: function (data) {
          if (data == "no_add") {
            layer.msg("添加失败");
          } else {
            if (typeof data === 'string') {
              data = JSON.parse(data)
              //console.log(data);
            }
            $('.content-body').empty();
            var html = '<div style="margin-left:250px; font-size: 25px;">添加的维修员信息</div><br>';
            html += '<table class="layui-table"><colgroup><col width="200"><col width="200"><col width="200"><col width="200"></colgroup>';
            html += '<thead><tr><th>用户名</th><th>姓名</th><th>密码</th><th>身份</th><th>备注</th></tr></thead>';
            html += '<tbody><tr>';
            $.each(data, function (i, item) {
              ;
              html += '<td>' + item + '</td>';
            });
            html += '<td>无</td>';
            html += '</tbody></table>';
            $('.content-body').html(html);
            element.init();
          }
        }
      }
    );
    return false;
  });


  //查询所有用户信息
  //所有用户信息
  $('.all-users').on('click', function () {
    $('.os-nav-ul').html("<li>控制台>></li>");
    $.ajax(
      {
        url: "select_all_users.php",
        success: function (data) {
          //console.log(data);
          data = JSON.parse(data);
          //console.log(data);
          var html = '<div style="text-align: center; font-size: 25px;">所有用户信息表</div>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>用户名</th><th>姓名</th><th>密码</th><th>身份</th><th>操作</th></tr></thead>';
          html += '<tbody>';
          html += '<tr>';
          $.each(data, function (i, item) {
            if (item.uposition == '1') {
              item.uposition = "系统管理员";
            } else if (item.uposition == '2') {
              item.uposition = "设备管理员";
            } else if (item.uposition == '3') {
              item.uposition = "仓库管理员";
            } else {
              item.uposition = "维修员";
            }
            html += '<td>' + (i + 1) + '</td>';
            html += '<td>' + item.unumber + '</td>';
            html += '<td>' + item.uname + '</td>';
            html += '<td>' + item.upasswd + '</td>';
            html += '<td>' + item.uposition + '</td>';
            //console.log(item.unumber);
            html += '<td><button onclick="change_info(' + item.uid + ')"type="button"class="layui-btn layui-btn-sm layui-btn-normal"><i class="layui-icon">&#xe642;</i>编辑</button><button onclick="delete_info(' + item.uid + ')"type="button"class="layui-btn layui-btn-sm layui-btn-normal layui-btn-danger"><i class="layui-icon">&#xe640;</i>删除</button></td>';
            html += '</tr>';
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          element.init();
        }
      }
    );
    return false;
  });


  //入库登记提交监听
  form.on('submit(enterStore)', function (formData) {
    //layer.msg("入库登记!");
    $.ajax(
      {
        url: "enter_store.php",
        type: "get",
        data: formData.field,
        success: function (data) {
          if (data == "yes") {
            layer.msg("添加成功！");
            $('.btn-enter-reset').click();
          } else {
            layer.msg("添加失败！");
          }
        }
      }
    );
    return false;
  });

  //购买申请提交监听
  form.on('submit(buyApply)', function (formData) {
    //layer.msg("购买申请");
    $.ajax(
      {
        url: "buy_apply.php",
        type: "get",
        data: formData.field,
        success: function (data) {
          if (data == "yes") {
            layer.msg("申请成功！");
            $('.apply-buy').click();
          } else {
            layer.msg("申请失败！");
          }
        }
      }
    );
    return false;
  });


  //公告栏内容
  $('.notice-menage').on('click', function () {
    var str = '<li>控制台>></li>';
    $('.os-nav-ul').html(str);
    var html = '<div style="text-align: center; font-size: 25px;">公告栏信息添加</div><br>';
    html += '<br><form class="layui-form layui-form-pane"style="margin-left:50px;"><div class="layui-form-item layui-form-text"><label class="layui-form-label" style="text-align:center;">公告栏内容</label><div class="layui-input-block"><textarea name="ncontent"placeholder="请输入内容"class="layui-textarea"></textarea></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">编写日期</label><div class="layui-input-inline"><input name="ndate"type="text"class="layui-input"id="noticeDate"placeholder="yyyy-MM-dd"></div></div></div><br><div class="layui-form-item"><button class="layui-btn layui-btn-normal"lay-submit lay-filter="addNotice">添加内容</button></div></form>';
    $('.content-body').html(html);
    laydate.render({
      elem: '#noticeDate'
    });
    element.init();
    form.render();
  });


  //监听公告栏添加
  form.on('submit(addNotice)', function (formData) {
    //layer.msg("添加内容");
    //console.log(formData.field);
    $.ajax(
      {
        url: "add_notice.php",
        type: "get",
        data: formData.field,
        success: function (data) {
          if (data == "yes") {
            layer.msg("添加内容完成！");
            location.reload();
            $('.notice-menage').click();
          } else {
            layer.msg("出现错误！");
          }
        }
      }
    );
    return false;;
  });


  //搜索框搜索
  form.on('submit(searchEquips)', function (formData) {
    //alert(formData);
    var str = '<li>控制台>></li>';
    $('.os-nav-ul').html(str);
    $('.content-body').empty();
    $.ajax(
      {
        url: "select_all_equip.php",
        type: "get",
        data: formData.field,
        success: function (data) {
          data = JSON.parse(data);
          var html = '<div style="text-align:center; font-size: 25px;">实验室设备信息</div><br>';
          html += '<table class="layui-table">';
          html += '<thead><tr><th>序号</th><th>设备编号</th><th>设备名称</th><th>所属教室</th><th>购买日期</th><th>入库日期</th><th>设备状态</th></tr></thead>';
          html += '<tbody>';
          var n = 1;
          //alert($('.search').val());
          $.each(data, function (i, item) {
            if (item.estatus == "0") {
              item.estatus = "未使用";
            } else if (item.estatus == "1") {
              item.estatus = "使用中";
            } else if (item.estatus == "2") {
              item.estatus = "维修中";
            } else if (item.estatus == "3") {
              item.estatus = "需维修";
            } else {
              item.estatus = "报废";
            }
            if (item.ename == $('.search').val()) {
              html += '<tr>';
              html += '<td>' + n + '</td>';
              html += '<td>' + item.enumber + '</td>';
              html += '<td>' + item.ename + '</td>';
              html += '<td>' + item.eclassroom + '</td>';
              html += '<td>' + item.ebuydate + '</td>';
              html += '<td>' + item.eintdate + '</td>';
              html += '<td>' + item.estatus + '</td>';
              html += '</tr>';
              n++;
            }
          });
          html += '</tbody></table>';
          $('.content-body').html(html);
          $('.search').val("");
          element.init();
        }
      }
    );
    return false;
  })


});