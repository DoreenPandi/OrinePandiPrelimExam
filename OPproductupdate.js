const pool = require("./db");
const sql = 'UPDATE "PrelimExam"."OP_product" SET prod_name = $1, prod_cat = $2, supp_id = $3 WHERE prod_id=2 RETURNING *';
const data = ['Strix GTX 3090','GPU', 1];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();