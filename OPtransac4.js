const pool = require("./db");

//Edit supplier attributes
const sql = 'UPDATE "PrelimExam"."OP_supplier" SET supp_name = $1 WHERE supp_id = 8 RETURNING *';
const data = ['ROG'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();