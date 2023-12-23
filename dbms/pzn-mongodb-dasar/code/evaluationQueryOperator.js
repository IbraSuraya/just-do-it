// insert customers doc with _id == name
db.customers.insertOne({
  _id: "radit",
  name: "radit"
})

// SELECT * FROM customers WHERE _id = name
db.customers.find({
  $expr : {
    $eq : ['$_id', '$name']
  }
})

// ==============================================
// SELECT * FROM products WHERE name IS NOT NULL AND category IS NOT NULL
db.products.find({
  $jsonSchema: {
    required: ['name', 'category']
  }
})

// SELECT * FROM products WHERE name IS NOT NULL and TYPE(name) = 'STRING' AND TYPE(price) = 'NUMBER'
db.products.find({
  $jsonSchema: {
    required: ['name'],
    properties: {
      name: {
        type: 'string'
      },
      price: {
        type: 'number'
      }
    }
  }
})

// ==============================================
// SELECT * FROM products WHERE price % 5 = 0 (Kelipatan 5)
db.products.find({
  price: {
    $mod: [5, 0]
  }
})

// SELECT * FROM products WHERE price % 5 = 0 (Kelipatan 5)
db.products.find({
  price: {
    $mod: [1000000, 0]
  }
})

// ==============================================
// SELECT * FROM products WHERE name LIKE "%mie%"
// Dimanapun terdapat mie dan non case sensitive
db.products.find({
  name: {
    $regex: /mie/,
    $options: "i"
  }
})

// SELECT * FROM products WHERE name LIKE "Mie%"
// Diawali Mie
db.products.find({
  name: {
    $regex: /^Mie/
  }
})

// ==============================================
// SELECT * FROM products where _id = name
// Hanya berlaku fungsi basic JS, bukan seperti di nodeJS
// Hanya berlaku di mongo Shell, tidak di compass
db.customers.find({
  $where: function(){
    return this._id == this.name;
  }
})

