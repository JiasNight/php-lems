set names utf8;
drop database if exists lemsdb;
create database lemsdb charset=utf8;
use lemsdb;

#建立用户表
create table users_info(
    uid int(10) primary key auto_increment,#用户序号
    unumber varchar(10) unique not null,#用户名（登陆名称）
    uname varchar(15) not null,#姓名
    upasswd varchar(15) not null,#用户密码
    uposition varchar(15) not null,#用户身份,1系统管理员,2实验室管理员,3仓库管理员,4维修管理员
    ustatus int(2)#用户状态，1存在，0删除
);

#插入用户数据
insert into users_info(unumber,uname,upasswd,uposition,ustatus) value('root001', 'admin', 'admin', '1', 1);
insert into users_info(unumber,uname,upasswd,uposition,ustatus) value('store001', 'store', 'store', '3', 1);
insert into users_info(unumber,uname,upasswd,uposition,ustatus) value('equip001', 'equip', 'equip', '2', 1);
insert into users_info(unumber,uname,upasswd,uposition,ustatus) value('root002', 'root', 'root', '1', 1);
insert into users_info(unumber,uname,upasswd,uposition,ustatus) value('repair001', 'repair', 'repair', '4', 1);

#设备信息表
create table equip_info( 
    eid int(10) primary key auto_increment,#设备序号
    enumber varchar(15) unique not null,#设备编号
    ename varchar(15) not null,#设备名称
    eclassroom varchar(15) not null,#所属实验室，
    ebuydate date not null,#购买日期
    eintdate date not null,#入库日期
    estatus int(2) not null default '0'#设备状态,0未使用,1使用中,2维修中,3需维修,4报废
);

#插入设备具体信息
insert into equip_info(enumber,ename,eclassroom,ebuydate,eintdate,estatus) value('bjb001001','笔记本','计算机实验室','2015-12-1','2016-2-15',0);
insert into equip_info(enumber,ename,eclassroom,ebuydate,eintdate,estatus) value('tsj002001','台式机','软件开发实验室','2015-5-12','2016-2-15',3);
insert into equip_info(enumber,ename,eclassroom,ebuydate,eintdate,estatus) value('tsj002002','台式机','单机实验室','2015-5-12','2016-2-15',2);
insert into equip_info(enumber,ename,eclassroom,ebuydate,eintdate,estatus) value('tyy003033','投影仪','嵌入式实验室','2015-12-21','2016-2-15',1);
insert into equip_info(enumber,ename,eclassroom,ebuydate,eintdate,estatus) value('tyy003034','投影仪','Android实验室','2015-12-21','2016-2-15',1);
insert into equip_info(enumber,ename,eclassroom,ebuydate,eintdate,estatus) value('sb003012','罗技鼠标','Android实验室','2015-2-12','2016-2-15',4);

#维修记录表
create table repair_info(
    rid int(10) primary key auto_increment,#维修记录表序号,主键
    rnumber varchar(10) unique not null,#维修设备编号
    -- rname varchar(15) not null,#维修设备名称
    rdate date not null,#维修日期
    repairman varchar(15) not null,#维修人员
    rdetail varchar(30) not null#维修详细情况
);

#插入维修记录信息
-- insert into repair_info(rnumber,rdate,repairman,rdetail) value('tyy003033','2016-12-4','张三','更换内存条');
-- insert into repair_info(rnumber,rdate,repairman,rdetail) value('tyy003034','2016-10-17','李四','重装系统');


#设备报废信息表
create table broken_info(
    bid int(10),#报废设备id
    bname varchar(15),#报废设备名称
    bdate date#报废日期
);



#实验室信息表
create table lab_info(
    lid int(10) primary key auto_increment,#实验室序号
    lnumber varchar(10) unique not null,#实验室编号,11计算机实验室，22软件开发实验室，33单机实验室，44嵌入式实验室，55Android实验室
    lname varchar(15) not null#实验室名称
);

#插入实验室信息
insert into lab_info(lnumber,lname) value('11201','计算机实验室');
insert into lab_info(lnumber,lname) value('11302','软件开发实验室');
insert into lab_info(lnumber,lname) value('11412','单机实验室');
insert into lab_info(lnumber,lname) value('11316','嵌入式实验室');
insert into lab_info(lnumber,lname) value('11411','Android实验室');


#申请购买表
create table apply_info(
    aid int(10) primary key auto_increment,#申请表序号
    anumber varchar(15) unique not null,#申请表编号
    aname varchar(15) not null,#申请设备名称
    aprice double not null,#设备价格
    abuynum int(30) not null,#申请购买数量
    adate varchar(15) not null,#申请日期
    awho varchar(15) not null,#申请人
    astatus varchar(15) not null default'2'#申请状态,1通过，0不通过,2未批复
);

#插入申请购买表信息
insert into apply_info(anumber,aname,aprice,abuynum,adate,awho,astatus) value('jsj20190622','笔记本电脑','102.00','11','2019-06-23','闫OK',2);
insert into apply_info(anumber,aname,aprice,abuynum,adate,awho,astatus) value('jsj20190623','台式机电脑','250.00','127','2019-06-21','张三',2);
insert into apply_info(anumber,aname,aprice,abuynum,adate,awho,astatus) value('jsj20190612','内存条','259.00','60','2019-3-13','德萨多发',2);
insert into apply_info(anumber,aname,aprice,abuynum,adate,awho) value('jsj20190624','投影仪','56.50','16','2019-10-13','考不过');
insert into apply_info(anumber,aname,aprice,abuynum,adate,awho) value('jsj20190625','打印机','10.05','61','2019-6-3','大法官');
insert into apply_info(anumber,aname,aprice,abuynum,adate,awho,astatus) value('jsj201906251','打印机','10','10','2019-6-3','小法官',1);


#维修人员表
create table mainworker_info(
    mid int(10) primary key auto_increment,#维修工序号
    mnumber varchar(10) unique not null,#维修工编号
    mname varchar(15) not null#维修工姓名
);

#插入维修人员信息
insert into mainworker_info(mnumber,mname) value('001021','张三');
insert into mainworker_info(mnumber,mname) value('001022','李四');
insert into mainworker_info(mnumber,mname) value('001023','王五');
insert into mainworker_info(mnumber,mname) value('001024','赵六');
insert into mainworker_info(mnumber,mname) value('001033','陈七');

#公告栏信息表
create table notice_info(
    nid int(10) primary key auto_increment,#序号
    ncontent varchar(255) not null,#公告内容
    ndate date#日期
);

insert into notice_info(ncontent,ndate) value('11201实验室设备没有问题','2018-12-3');
insert into notice_info(ncontent,ndate) value('最新设备待购买，还需再等半个月','2019-2-17');
