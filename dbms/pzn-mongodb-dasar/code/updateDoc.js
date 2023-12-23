// UPDATE products SET category = "food" WHERE _id = 1
db.products.updateOne({
  _id: 1
}, {
  $set: {
    category: "food"
  }
})

// UPDATE products SET category = "food" WHERE _id = 2
db.products.updateOne({
  _id: 2
}, {
  $set: {
    category: "food"
  }
})

// UPDATE products SET tags = ['food'] WHERE category = 'food' AND tags IS NULL
db.products.updateMany({
  $and: [
    {
      category: {
        $eq: 'food'
      }
    },
    {
      tags: {
        $exists: false
      }
    }
  ]
}, {
  $set: {
    tags: ['food']
  }
})

// ============ REPLACE ============
// Insert wrong doc
db.products.insertOne({
  _id: 9,
  name: "Ups Salah",
  wrong: "Salah again"
})

// Replace doc with id 9
db.products.replaceOne({
  _id: 9
}, {
  name: "Adidas Sepatu lari Pria",
  price: new NumberLong("1100000"),
  category: 'shoes',
  tags: ['adidas', 'shoes', 'running']
})