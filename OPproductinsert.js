const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."OP_product"(prod_name, prod_cat, supp_id) VALUES ($1,$2,$3) RETURNING *';
const data = ['Strix RTX 3060ti', 'GPU', 1];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();