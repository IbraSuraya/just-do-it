// update products set ratings = [90, 80, 70]
db.products.updateMany({}, {
  $set: {
    ratings: [90, 80, 70]
  }
})

// Update first element of array, query must include array field
// walapun semua docs, pada element array ratingsnya 90, tetap butuh query
db.products.updateMany({
  ratings: 90
}, {
  $set: {
    'ratings.$': 100
  }
})

// update all element of array to 100
db.products.updateMany({}, {
  $set: {
    "ratings.$[]": 100
  }
})

// update products set ratings = [90, 80, 70]
db.products.updateMany({}, {
  $set: {
    ratings: [90, 80, 70]
  }
})

// update element of array based on arrayFilters
// element == kondisi
db.products.updateMany({}, {
  $set: {
    "ratings.$[element]": 100
  }
}, {
  arrayFilters: [
    {
      element: {
        $gte: 80
      }
    }
  ]
})

// update element of array with given index
db.products.updateMany({}, {
  $set: {
    'ratings.0': 50,
    'ratings.1': 60
  }
})

// add or replace "popular" to array if not exists
db.products.find({_id:1})
db.products.updateMany({
  _id: 1
}, {
  $addToSet: {
    tags: "popular"
  }
})


// remove first element of array (hapus 50)
db.products.updateOne({
  _id: 1
}, {
  $pop: {
    ratings: -1
  }
})

// remove last element of array (hapus 70)
db.products.updateOne({
  _id: 2
}, {
  $pop: {
    ratings: 1
  }
})

// update products set ratings = [90, 80, 70]
db.products.updateMany({}, {
  $set: {
    ratings: [90, 80, 70]
  }
})

// remove all element where ratings >= 80
db.products.updateMany({}, {
  $pull: {
    ratings: {
      $gte: 80
    }
  }
})

// Add 100 to ratings
db.products.updateMany({}, {
  $push: {
    ratings: 100
  }
})

// remove element 100
db.products.updateMany({}, {
  $pullAll: {
    ratings: [100]
  }
})