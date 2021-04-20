const pool = require("./db");

;(async () => {
  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    //1st Order
    const purchaseorder1 = 'INSERT INTO "PrelimExam"."OP_purchaseorder" (po_date, po_status, cust_id, supp_id) VALUES($1, $2, $3, $4) RETURNING po_id';
    const order1 = ['20/04/2021', 'Delivering', 4, 11];
    const poid1 = await client.query(purchaseorder1, order1);
    //Line item of purchase order and product
    const lineitem1 = 'INSERT INTO "PrelimExam"."OP_lineitem" (po_id, prod_id) VALUES ($1, $2)';
    const line1 = [poid1.rows[0].po_id, 8];
    await client.query(lineitem1,line1);

    //2nd Order
    const purchaseorder2 = 'INSERT INTO "PrelimExam"."OP_purchaseorder" (po_date, po_status, cust_id, supp_id) VALUES($1, $2, $3, $4) RETURNING po_id';
    const order2 = ['20/04/2021', 'Delivering', 4, 12];
    const poid2 = await client.query(purchaseorder2, order2);
    //Line item of purchase order and product
    const lineitem2 = 'INSERT INTO "PrelimExam"."OP_lineitem" (po_id, prod_id) VALUES ($1, $2)';
    const line2 = [poid2.rows[0].po_id, 9];
    await client.query(lineitem2,line2);

    await client.query('SAVEPOINT cancel')
    //3rd Order
    const purchaseorder3 = 'INSERT INTO "PrelimExam"."OP_purchaseorder" (po_date, po_status, cust_id, supp_id) VALUES($1, $2, $3, $4) RETURNING po_id';
    const order3 = ['20/04/2021', 'Delivering', 4, 12];
    const poid3 = await client.query(purchaseorder3, order3);
    //Line item of purchase order and product
    const lineitem3 = 'INSERT INTO "PrelimExam"."OP_lineitem" (po_id, prod_id) VALUES ($1, $2)';
    const line3 = [poid3.rows[0].po_id, 9];
    await client.query(lineitem3,line3);

    await client.query('ROLLBACK TO cancel')
    await client.query('COMMIT')

  } catch (e) {
    await client.query('ROLLBACK')
    throw e

  } finally {
    client.release()
  }
})().catch(e => console.error(e.stack))