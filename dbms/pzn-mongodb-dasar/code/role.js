// create role with custome privileges
db.createRole({
  role: 'session_management',
  roles: [
    {
      role: 'read',
      db: 'practice'
    }
  ],
  privileges: [
    {
      resource: {
        db: "practice",
        collection: "sessions"
      },
      actions: ["insert"]
    }
  ]
})

// show all roles with privileges
// inheritedPrivileges itu berasalh dari roles read
db.getRoles({
  showPrivileges: true
})

// create user with custom role
db.createUser({
  user: 'ibra',
  pwd: 'ibra',
  roles: ['session_management']
})

db.getUsers()

"mongodb://ibra:ibra@localhost:27017/practice?authSource=admin"

// login using user ibra
// find sessions (succcess)
db.sessions.find()
db.customers.find()

// insert customers (error)
db.customers.insertOne({
  _id: "contoh",
  name: "Maulana Zulkar Rorid"
})

// insert session (success)
db.sessions.insertOne({
  _id: 'test',
  name: 'test'
})

// delete session (error)
db.sessions.deleteOne({
  _id: 'test'
})

// update session (error)
db.sessions.updateOne({
  _id: 'test'
}, {
  $set: {
      name: 'test lagi'
  }
})
