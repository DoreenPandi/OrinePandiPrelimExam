const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."OP_customer"(cust_name,cust_add) VALUES ($1,$2) RETURNING *';
const data = ['Orine', 'Buhangin'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();