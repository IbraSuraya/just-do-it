// Create seesion collection
db.createCollection("sessions")

// Create TTL Index
db.sessions.createIndex({
  createdAt: 1
}, {
  expireAfterSeconds: 10
})

// Check index
db.sessions.getIndexex()

// Will expire after 10 seconds, but backgorund job run every 60 seconds
db.sessions.insertOne({
  _id: 1,
  session: "Session 1",
  createdAt: new Date()
})