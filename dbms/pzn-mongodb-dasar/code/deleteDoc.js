// insert spammer doc
db.customers.insertOne({
  _id: 'spammer',
  full_name: 'Spammer'
})

// Delete doc by _id
db.customers.deleteOne({
  _id: 'spammer'
})

// insert many spammer doc
db.customers.insertMany([
  {
    _id: 'spammer1',
    full_name: 'Spammer1'
  },
  {
    _id: 'spammer2',
    full_name: 'Spammer2'
  },
  {
    _id: 'spammer3',
    full_name: 'Spammer3'
  }
])

// delete many doc
db.customers.deleteMany({
  _id: {
    $regex: "spammer"
  }
})