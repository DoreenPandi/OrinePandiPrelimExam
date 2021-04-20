const pool = require("./db");
const sql = 'DELETE FROM "PrelimExam"."OP_product" WHERE prod_id =$1 RETURNING *';
const data = [3];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();