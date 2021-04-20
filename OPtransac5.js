const pool = require("./db");
printfinal = "";

//printing customer purchaseorder
pool.query('SELECT "po_date","po_status" FROM "PrelimExam"."OP_purchaseorder" WHERE cust_id = 3', (err, res) => {
	try {	
		const print1 = console.log('Date: ', res.rows[0].po_date, 'Status: ', res.rows[0].po_status);
        printfinal = print1;
	} catch (err) {
		console.error(err.message);
	}
});
pool.query('SELECT "cust_name", "cust_add" FROM "PrelimExam"."OP_customer" WHERE cust_id = 3', (err, res) => {
	try {
		const printfinal2 = console.log('Customer: ', res.rows[0].cust_name, 'Address: ', res.rows[0].cust_add);
        printfinal = printfinal + printfinal2;
	} catch (err) {
		console.error(err.message);
	}
});
pool.query('SELECT "prod_name","prod_cat" FROM "PrelimExam"."OP_product" WHERE prod_id = 5', (err, res) => {
	try {
		const printfinal3 = console.log('Item Type: ', res.rows[0].prod_cat , 'Item: ', res.rows[0].prod_name);
        printfinal = printfinal + printfinal3;
	} catch (err) {
		console.error(err.message);
	}
});
pool.query('SELECT "supp_name", "supp_location" FROM "PrelimExam"."OP_supplier" WHERE supp_id = 8', (err, res) => {
	try {
		const printfinal4 = console.log('Company: ', res.rows[0].supp_name, 'Location: ', res.rows[0].supp_location);
        printfinal = printfinal + printfinal4;
	} catch (err) {
		console.error(err.message);
	}
});
console.log(printfinal)
