// Create index text
// semakin besar bobot, maka semakin high priority
db.products.createIndex({
  name: "text",
  category: "text",
  tags: "text"
}, {
  weights: {
    name: 10, 
    category: 5,
    tags: 1
  }
})

// GET index
db.products.getIndexes()

// Search products with text "mie" dalam 1 suku kata
// case insensitve
db.products.find({
  $text: {
    $search: "mie"
  }
})

// Search products with text "mie" OR "laptop"
db.products.find({
  $text: {
    $search: "mie laptop"
  }
})

// search products with text "mie AND sedap"
db.products.find({
  $text: {
    $search: '"mie sedap"'
  }
})

// search products with text "mie" AND NOT "sedap"
db.products.find({
  $text: {
    $search: "mie -sedap"
  }
})

// Debugging query optimization
db.products.find({
  $text: {
    $search: "mie -sedap"
  }
}).explain()

// =========== $meta operator ===========
db.products.find({
  $text: {
    $search: "mie laptop"
  }
}, {
  searchScore: {
    $meta: "textScore"
  }
})