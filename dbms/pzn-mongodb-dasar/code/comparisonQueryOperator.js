// insert product documents again
db.products.insertMany([
  {
      _id: 3,
      name: "Pop Mie Rasa Bakso",
      price: new NumberLong("2500"),
      category: "food"
  },
  {
    _id: 4,
    name: "Samsung Galaxy S9+",
    price: new NumberLong("10000000"),
    category: "handphone"
  },
  {
    _id: 5,
    name: "Acer Predator XXI",
    price: new NumberLong("25000000"),
    category: "laptop"
  },
]);
db.products.find();

// SELECT * FROM customers WHERE _id="Suraya"
db.customers.find({
  _id:{
    $eq: "Suraya"
  }
});

// SELECT * FROM products WHERE price > 1000
db.products.find({
  price: {
    $gt: 2000
  }
});

// SELECT * FROM products WHERE category in ('handphone', 'laptop') AND price > 5 Juta
db.products.find({
  category: {
    $in: ['handphone', 'laptop']
  },
  price:{
    $gt:5000000
  }
});