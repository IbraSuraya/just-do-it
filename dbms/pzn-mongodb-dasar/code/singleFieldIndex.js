// Get semua index di customers
// 1 : Asc | -1 : Desc
db.customers.getIndexes()

// Create index at category in products collection
db.products.createIndex({
  category: 1
})

// get all indexes in products collection
db.products.getIndexes();

// Find products by category (will use index)
db.products.find({
  category: 'food'
})

// Debugging with index
// Check di stage: 'IXSCAN', indexName: 'category_1'
// loc : queryPlanner/winningPlan/queryPlan/inputStage
db.products.find({
  category: 'food'
}).explain();

// Sorting by category ASC but usage index
db.products.find({}).sort({
  category: 1
}).explain()

db.products.find({
  category : "food"
}).sort({
  category: 1
}).explain()


// Debugging withoudt index
// Check di stage: 'COLLSCAN'
db.products.find({
  tags: "laptop"
}).explain()

// delete index
db.products.dropIndex("category_1")