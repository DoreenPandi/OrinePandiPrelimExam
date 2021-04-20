const pool = require("./db");
const sql = 'UPDATE "PrelimExam"."OP_lineitem" SET po_id = $1, prod_id = $2 WHERE line_id=1 RETURNING *';
const data = [1, 4];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();