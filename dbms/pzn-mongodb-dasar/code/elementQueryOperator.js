// SELECT * FROM products WHERE category IS NULL
db.products.find({
  category: {
    $exists: false
  }
})

// SELECT * FROM products WHERE TYPE(category) == 'string'
db.products.find({
  category: {
    $type: "string"
  }
})

// SELECT * FROM products WHERE type(price) IN ('int', 'long')
db.products.find({
  price:{
    $type: ['int', 'long']
  }
})