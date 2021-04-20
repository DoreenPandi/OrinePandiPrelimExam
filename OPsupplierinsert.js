const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."OP_supplier"(supp_name,supp_location) VALUES ($1,$2) RETURNING *';
const data = ['Legion', 'USA'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();