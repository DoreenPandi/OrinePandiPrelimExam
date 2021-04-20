const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."OP_purchaseorder"(po_date, po_status, cust_id, supp_id) VALUES ($1,$2,$3,$4) RETURNING *';
const data = ['18/04/2021', 'Arrived', 1, 1];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();