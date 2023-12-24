// create partial index
// Index ini digunakan pada doc dengan stock > 0
db.products.createIndex({
  price: 1
}, {
  partialFilterExpression: {
    stock: {
      $gt: 0
    }
  }
})

// not using index
db.products.find({
  price: 2500
})

// debug query with partial index
// kebetulan semau doc product mempunyai stock 10 semua
db.products.find({
  price: {
    $eq: 2500
  },
  stock: {
    $gt: 0
  }
})