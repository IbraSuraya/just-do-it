// SELECT _id, nam, category FROM products
// 1 : True/Ambil | 0 : False/Tidak Ambil
// _id selalu diambil
db.products.find({}, {
  name: 1,
  category: 1
}) 

// SELECT _id, name, category, price FROM products
// Semua kecuali tags
db.products.find({}, {
  tags: 0
})

// SELECT _id, name, category, price FROM products
db.products.find({}, {
  tags: 0,
  price: 0
})

// ======== KHUSUS doc yang memiliki data array ========
// SELECT _id, name, tags[FIRST ITEM] FROM products
db.products.find({}, {
  name: 1,
  tags: {
    $elemMatch: {
      $in: ['samsung', 'logitech', 'accessories']
    }
  }
})

// SELECT _id, name, tags[FIRST ITEM] FROM products WHERE tags IS NOT NULL
db.products.find({
  tags: {
    $exists: true
  }
}, {
  name: 1,
  "tags.$": 1
})

// SELECT _id, name, category, price, tags[0-1] FROM products, WHERE tags IS NOT NULL
db.products.find({
  tags: {
    $exists: true
  }
}, {
  name: 1,
  tags: {
    $slice: 2
  }
})