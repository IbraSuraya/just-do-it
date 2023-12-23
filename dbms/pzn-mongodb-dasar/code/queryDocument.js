db.<collection>.find(query) // Mencari document dengan query

// SELECT * FROM customers WHERE _id = "Suraya"
db.customers.find({_id:"Suraya"});

// SELECT * FROM customers WHERE name = "Ibra Hasan Suraya"
db.customers.find({name:"Ibra Hasan Suraya"});

// SELECT * FROM products WHERE price = 2000
db.products.find({price: 2000});

// SELECT * FROM orders WHERE items.products_id=1
db.orders.find({"items.product_id": 1});