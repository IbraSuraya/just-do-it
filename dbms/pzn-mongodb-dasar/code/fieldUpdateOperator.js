// Update products set stock = 0
db.products.updateMany({}, {
  $set: {
    stock: 0
  }
})

// update products set stock =+ 10
db.products.updateMany({}, {
  $inc: {
    stock : 10
  }
})

// ALTER TABLE customers change name full_name
db.customers.updateMany({}, {
  $rename: {
    name: "full_name"
  }
})

// Update customers set wrong = "ups"
db.customers.updateMany({}, {
  $set: {
    wrong: "Ups"
  }
})

// ALTER TABLE customers DROP COLUMN wrong
db.customers.updateMany({}, {
  $unset: {
    wrong: ""
  }
})

// Update products set lastModifiedDate = current_date()
db.products.updateMany({}, {
  $currentDate: {
    lastModifiedDate: {
      $type: "date"
    }
  }
})