const pool = require("./db");
const sql = 'UPDATE "PrelimExam"."OP_customer" SET cust_name = $1,cust_add = $2 WHERE cust_id=1 RETURNING *';
const data = ['Pandi','Calinan'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();