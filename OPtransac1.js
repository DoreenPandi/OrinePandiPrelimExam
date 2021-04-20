const pool = require("./db");

;(async () => {
  const client = await pool.connect()

  try {
    
    //adding customers
    await client.query('BEGIN')
    const customer1 = 'INSERT INTO "PrelimExam"."OP_customer" (cust_name, cust_add) VALUES($1, $2) RETURNING cust_id';
    const cust1 = ['Jann', 'Buhangin'];
    await client.query(customer1, cust1);

    await client.query('BEGIN')
    const customer2 = 'INSERT INTO "PrelimExam"."OP_customer" (cust_name, cust_add) VALUES($1, $2) RETURNING cust_id';
    const cust2 = ['Patricia', 'Bajada'];
    await client.query(customer2, cust2);

    await client.query('BEGIN')
    const customer3 = 'INSERT INTO "PrelimExam"."OP_customer" (cust_name, cust_add) VALUES($1, $2) RETURNING cust_id';
    const cust3 = ['Doreen', 'Calinan'];
    await client.query(customer3, cust3);

    await client.query('BEGIN')
    const customer4 = 'INSERT INTO "PrelimExam"."OP_customer" (cust_name, cust_add) VALUES($1, $2) RETURNING cust_id';
    const cust4 = ['Nicole', 'Puan'];
    await client.query(customer4, cust4);

    await client.query('BEGIN')
    const customer5 = 'INSERT INTO "PrelimExam"."OP_customer" (cust_name, cust_add) VALUES($1, $2) RETURNING cust_id';
    const cust5 = ['Nikki', 'Toril'];
    await client.query(customer5, cust5);

    //adding suppliers
    const supplier1 = 'INSERT INTO "PrelimExam"."OP_supplier"(supp_name, supp_location) VALUES($1, $2) RETURNING supp_id';
    const supp1 = ['Republic of Gamers', 'USA']
    const suppid1 = await client.query(supplier1, supp1);

    const supplier2 = 'INSERT INTO "PrelimExam"."OP_supplier"(supp_name, supp_location) VALUES($1, $2) RETURNING supp_id';
    const supp2 = ['Logitech', 'China']
    const suppid2 = await client.query(supplier2, supp2);

    const supplier3 = 'INSERT INTO "PrelimExam"."OP_supplier"(supp_name, supp_location) VALUES($1, $2) RETURNING supp_id';
    const supp3 = ['Corsair', 'Russia']
    const suppid3 = await client.query(supplier3, supp3);

    const supplier4 = 'INSERT INTO "PrelimExam"."OP_supplier"(supp_name, supp_location) VALUES($1, $2) RETURNING supp_id';
    const supp4 = ['Razer', 'UK']
    const suppid4 = await client.query(supplier4, supp4);

    const supplier5 = 'INSERT INTO "PrelimExam"."OP_supplier"(supp_name, supp_location) VALUES($1, $2) RETURNING supp_id';
    const supp5 = ['Legion', 'Korea']
    const suppid5 = await client.query(supplier5, supp5);

    //adding products
    const product1 = 'INSERT INTO "PrelimExam"."OP_product" (prod_name, prod_cat, supp_id) VALUES ($1, $2, $3) RETURNING prod_id';
    const prod1 = ['Strix GL501','Laptop', suppid1.rows[0].supp_id];
    await client.query(product1, prod1);

    const product2 = 'INSERT INTO "PrelimExam"."OP_product" (prod_name, prod_cat, supp_id) VALUES ($1, $2, $3) RETURNING prod_id';
    const prod2 = ['Logitech G502','Mouse', suppid2.rows[0].supp_id];
    await client.query(product2, prod2);

    const product3 = 'INSERT INTO "PrelimExam"."OP_product" (prod_name, prod_cat, supp_id) VALUES ($1, $2, $3) RETURNING prod_id';
    const prod3 = ['Vengeance RGB','RAM', suppid3.rows[0].supp_id];
    await client.query(product3, prod3);

    const product4 = 'INSERT INTO "PrelimExam"."OP_product" (prod_name, prod_cat, supp_id) VALUES ($1, $2, $3) RETURNING prod_id';
    const prod4 = ['Viper Mini','Mouse', suppid4.rows[0].supp_id];
    await client.query(product4, prod4);

    const product5 = 'INSERT INTO "PrelimExam"."OP_product" (prod_name, prod_cat, supp_id) VALUES ($1, $2, $3) RETURNING prod_id';
    const prod5 = ['Legion Y530','Laptop', suppid5.rows[0].supp_id];
    await client.query(product5, prod5);

    await client.query('COMMIT')

  } catch (e) {
    await client.query('ROLLBACK')
    throw e

  } finally {
    client.release()
  }
})().catch(e => console.error(e.stack))