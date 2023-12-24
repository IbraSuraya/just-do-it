// switched to database admin
// best practice
use admin 

// create admin user
db.createUser({
  user: "mongo",
  pwd: "mongo",
  roles: [
    'userAdminAnyDatabase',
    'readWriteAnyDatabase'
  ]
})

// get information user
db.getUser()
