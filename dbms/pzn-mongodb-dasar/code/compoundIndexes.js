// CREATE INDEX AT price AND tags IN products
db.products.createIndex({
  stock: 1,
  tags: 1
})

// Find products by stock and tags (will use index)
db.products.find({
  stock: 10,
  tags: "popular"
})

// debug with index
db.products.find({
  stock: 10
}).explain()

db.products.find({
  stock: 10,
  tags: "popular"
}).explain()

// debug without index
db.products.find({
  tags: "popular"
}).explain()

// Index Strategy
// Kerja compound field, Misal field : [A, B, C
// Maka yang bisa digunakan pada index ini adalah koombinasi dari : 
// A, 
// A, B
// A, B, C