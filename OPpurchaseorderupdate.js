const pool = require("./db");
const sql = 'UPDATE "PrelimExam"."OP_purchaseorder" SET po_date = $1, po_status = $2, cust_id = $3, supp_id = $4 WHERE po_id=1 RETURNING *';
const data = ['19/04/2021','Arrived', 1, 1];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();