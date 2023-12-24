// Create unique index in email
db.customers.createIndex({
  email: 1
}, {
  unique: true,
  sparse: true
})
// Sparse : Index hanya diterapkan pada dokumen yang memiliki field yang di index
// Maksudnya : pada collection customers, tidak semua doc memiliki email, dari mereka yg tidak memiliki email, mereka dianggap duplicat
// Maka perlu sparse ini [Null Empty dianggap duplicat]

db.customers.getIndexes()

// Update customers set email = ? where _id = ?
db.customers.updateOne({
  _id: "ibra"
}, {
  $set: {
      email: "ibra@example.com"
  }
})

// error duplicate email, karena _id sudah memiliki email ini
db.customers.updateOne({
  _id: "radit"
}, {
  $set: {
      email: "ibra@example.com"
  }
})