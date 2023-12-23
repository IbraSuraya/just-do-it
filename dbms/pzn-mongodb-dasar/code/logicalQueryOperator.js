// SELECT * FROM products WHERE category IN ('handphone', 'laptop') AND price > 20 juta
db. products.find({
  $and: [
    {category: {$in: ['handphone', 'laptop']}},
    {price: {$gt: 20000000}}
  ]
});

// SELECT * FROM products WHERE category NOT IN ('handphone', 'laptop')
db.products.find({
  category:{
    $not: {$in : ['handphone', 'laptop']}
  }
});

// SELECT * FROM products WHERE price BETWEEN 10 juta AND 20 juta AND categoru != 'food'
db.products.find({
  price: {
    $gte: 10000000,
    $lte: 20000000
  },
  category: {
    $ne: "food"
  }
});