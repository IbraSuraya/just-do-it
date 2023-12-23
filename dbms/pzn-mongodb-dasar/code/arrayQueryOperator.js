// insert new products with tags
db.products.insertMany([
  {
    _id: 6,
    name: "Logitech Wireless Mouse",
    price: new NumberLong("175000"),
    category: "laptop",
    tags: ["logitech", "mouse", "accessories"]
  },
  {
    _id: 7,
    name: "Cooler Pad Gaming",
    price: new NumberLong("200000"),
    category: "laptop",
    tags: ["cooler", "laptop", "accessories", "fan"]
  },
  {
    _id: 8,
    name: "Samsung Curve Monitor",
    price: new NumberLong("1750000"),
    category: "computer",
    tags: ["samsung", "monitor", "computer"]
  }
])

// SELECT * FROM products WHERE (tags = 'samsung' AND tags = 'monitor')
db.products.find({
  tags: {
    $all : ['samsung', 'monitor']
  }
})

// SELECT * FROM products WHERE tags IN ('samsung', 'logitech')
db.products.find({
  tags: {
    $elemMatch: {
      $in : ['samsung', 'logitech']
    }
  }
})

// SELECT * FROM products WHERE count(tags) = 3
db.products.find({
  tags: {
    $size: 4
  }
})