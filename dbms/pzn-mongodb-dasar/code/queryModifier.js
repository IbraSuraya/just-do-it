// SELECT count(*) FROM products
db.products.find({}).count()

// SELECT * FROM products LIMIT 4
db.products.find({}).limit(4)

// SELECT * FROM products OFFSET 2
db.products.find({}).skip(2)

// SELECT * FROM products LIMIT 4 OFFSET 2
db.products.find({}).limit(4).skip(2)
db.products.find({}).skip(2).limit(4)

// SELECT * FROM products ORDER BY category ASC, name DESC
// 1 : asc, -1 : desc
db.products.find({}).sort({
  category: 1,
  name: -1
})

db.products.find({}).sort({
  category: 1,
  name: -1
}).limit(4).skip(2)

