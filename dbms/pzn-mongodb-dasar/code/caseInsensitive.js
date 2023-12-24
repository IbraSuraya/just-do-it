// Create unique index in full_name
db.customers.createIndex({
  full_name: 1
}, {
  collation: {
    locale: 'en',
    strength: 2
  }
})
// en : kode bahasa "english" as DEFAULT
// 2 : Insensitive | 1 : Sensitive

// Not using index, muncul hasil
db.customers.find({
  full_name : "Ibra Hasan Suraya"
});

// Not using index, tidak muncul hasil
db.customers.find({
  full_name : "ibra Hasan Suraya"
});

// Using index dengan tetap memnggunakan collation, karena strengthnya 2
db.customers.find({
  full_name : "IBRA HASAN SURAYA"
}).collation({
  locale: 'en',
  strength: 2
});