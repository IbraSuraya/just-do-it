// add 100, 200, 300, 70 to ratings
db.products.updateMany({},{
  $push: {
    ratings: {
      $each: [100, 200, 300, 70]
    }
  }
})

// add or replace trending, popular to tags
db.products.updateMany({}, {
  $addToSet: {
    tags: {
      $each: ['trending', 'popular']
    }
  }
})

// add hot in position 1
db.products.updateMany({}, {
  $push: {
    tags: {
      $each: ['hot'],
      $position: 1
    }
  }
})

// add all element and sort desc
db.products.updateMany({}, {
  $push: {
    ratings: {
      $each: [100, 200, 300, 400, 500],
      $sort: -1
    }
  }
})

// add all element, but limit with slice from behind
// 11 element pertama hilang
db.products.updateMany({}, {
  $push: {
    ratings: {
      $each: [100, 200, 300, 400, 500],
      $slice: -11
    }
  }
})