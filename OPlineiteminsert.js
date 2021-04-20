const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."OP_lineitem"(po_id, prod_id) VALUES ($1,$2) RETURNING *';
const data = [1,3];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();