// switched database admin
use admin 

// create user with access read only
// hanya bisa pindah, tp samsek gk bisa apa2
db.createUser({
  user: 'contoh',
  pwd: 'contoh',
  roles: [
    {
      role: 'read',
      db: 'test'
    }
  ]
})

// create user with access read write
db.createUser({
  user: 'contoh2',
  pwd: 'contoh2',
  roles: [
    {
      role: 'readWrite',
      db: 'test'
    }
  ]
})

"mongodb://contoh:contoh@localhost:27017/test?authSource=admin"

"mongodb://contoh2:contoh2@localhost:27017/test?authSource=admin"

// get all users
db.getUsers()

// Try insert/Write doc in just user contoh2
db.sample.insertOne({
  _id: 1,
  name: "eko"
})

// Try read doc in user contoh and contoh2
db.sample.find()

// change pws for user contoh
use admin
db.changeUserPassword('contoh', 'rahasia')
"mongodb://contoh:rahasia@localhost:27017/test?authSource=admin"

// drop user contoh
use admin
db.dropUser("contoh")

// update user
db.updateUser("contoh2", {
  roles: [
    {
      role: 'readWrite',
      db: 'test'
    },
    {
      role: 'readWrite',
      db: 'practice'
    }
  ]
})
