//����mysqlģ��
const mysql=require('mysql');
//�������ӳ�
var pool=mysql.createPool({
		honst: '127.0.0.1',
		port:  '3306',
		user:'root',
		password:'',
		database:'TXJP',
		connectionLimit:30
});
//�������ӳض���
module.exports=pool;