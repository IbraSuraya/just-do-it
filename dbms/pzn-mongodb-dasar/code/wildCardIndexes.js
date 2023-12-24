// Membuat wildcard index (customFields.$**_1)
db.customers.createIndex({
  "customFields.$**" : 1
})

// Get index
db.customers.getIndexes()

// Insert many customers
db.customers.insertMany([
  {
    _id: "jarwo",
    full_name: "Jarwo",
    customFields: {
      hobby: "Gaming",
      university: "Universitas Belum Ada"
    }
  },
  {
    _id: "maul",
    full_name: "Maul",
    customFields: {
      ipk: 3.2,
      university: "Universitas Belum Ada"
    }
  },
  {
    _id: "tedi",
    full_name: "Tedi",
    customFields: {
      motherName: "Tini",
      passion: "Entepreneur"
    }
  }
])

// debugging wildcard index
db.customers.find({
  "customFields.passion" : "Entepreneur"
}).explain();

db.customers.find({
  "customFields.ipk" : 3.2
}).explain();

db.customers.find({
  "customFields.hobby" : "Gaming"
}).explain();

// Catatan jgn kebanyak wildcard
// - Makin banyak diterapkan index pada collection
//   - maka makin cepat kita read doc dengan query
//   - namum makin lambat saat melakukan insert update doc