delete from kappal_fuels.employee;
delete from kappal_fuels.user;
delete from kappal_fuels.department;
delete from kappal_fuels.employee_roles;
delete from kappal_fuels.user_group;

insert into kappal_fuels.department values("sales","people doing the sale");
insert into kappal_fuels.department values("clerk","people doing the clerikal works");
insert into kappal_fuels.department values("management","people doing the management work");
insert into kappal_fuels.department values("facilities","people doing the facility works");
insert into kappal_fuels.department values("servicing","people maintaining the application system");

insert into kappal_fuels.employee_roles values("appdeveloper","a person developing, installing and maintaining the application system");

insert into kappal_fuels.employee(employee_id,employee_fname,employee_mname,employee_lname,address_1,address_2,pincode,mobile_no,office_no,email,dob,doj,gender,role_id,department_id) 
values("e0000002","Subramaniam","","Venkatajalam","no.1/2, boombuhar street, saligramam","chennai,tamilnadu","600026","+91 9003135553","+044 5463 4631","sekar.psg@gmail.com","1982-03-25 13:17:17","2020-10-25 13:17:17","M","appdeveloper","servicing");
insert into kappal_fuels.employee(employee_id,employee_fname,employee_mname,employee_lname,address_1,address_2,pincode,mobile_no,office_no,email,dob,doj,gender,role_id,supervisor_id,department_id) 
values("e0000001","Veerajothi","","Durairaj","no.11/72, kamber street, vengaivasal","chennai,tamilnadu","600073","+91 8056156916","+044 5463 4635","veerajothi.durairaj@gmail.com","1987-03-25 13:17:17","2020-10-25 13:17:17","M","appdeveloper","e0000002","servicing");
insert into kappal_fuels.employee(employee_id,employee_fname,employee_mname,employee_lname,address_1,address_2,pincode,mobile_no,office_no,email,dob,doj,gender,role_id,department_id) 
values("e0000003","Subbiah","","Ramanathan","no.1/2, gangai amman koil street, kelambakkam","chennai,tamilnadu","600117","+91 6383413590","+044 5463 4645","subbiah.ramanathan@outlook.com","1982-03-25 13:17:17","2020-10-25 13:17:17","M","appdeveloper","servicing");
insert into kappal_fuels.employee(employee_id,employee_fname,employee_mname,employee_lname,address_1,address_2,pincode,mobile_no,office_no,email,dob,doj,gender,role_id,supervisor_id,department_id) 
values("e0000004","Lakshmi","Narayanan","Venkatajalam","old no.133, new no.200, 5th cross strees, MGR salai, keelkattalai","chennai,tamilnadu","600005","+91 6385078780","+044 5463 4645","vlaxminarayanan@gmail.com","1985-03-25 13:17:17","2020-10-25 13:17:17","M","appdeveloper","e0000003","servicing");

insert into kappal_fuels.user_group(user_group_id,user_group_desc) values("employee","last level employee who has basic access");
insert into kappal_fuels.user_group(user_group_id,user_group_desc) values("admin","top level manager who has all access to system");
insert into kappal_fuels.user_group(user_group_id,user_group_desc) values("supervisor","An employee who has basic acccess and able to produce audit reports");
insert into kappal_fuels.user_group(user_group_id,user_group_desc) values("auditor","An outsider who has acccess to produce audit reports");

insert into kappal_fuels.user(user_id,user_groupid,password,work_email) values("vjo","employee","vjo","veerajothi.durairaj@gmail.com");
insert into kappal_fuels.user(user_id,user_groupid,password,work_email) values("sbu","admin","sbu","sekar.psg@gmail.com");
insert into kappal_fuels.user(user_id,user_groupid,password,work_email) values("sbh","supervisor","sbh","subbiah.ramanathan@outlook.com");
insert into kappal_fuels.user(user_id,user_groupid,password,work_email) values("sth","auditor","sth","vlaxminarayanan@gmail.com");

select * from kappal_fuels.department;
select * from kappal_fuels.employee_roles;
select * from kappal_fuels.employee;
select * from kappal_fuels.user_group;
select * from kappal_fuels.user;