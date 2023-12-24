// Bulk new customer ibra, hasan
// bulk update dimana semua customer yang memilki id ibra, hasan, atau suraya, full_name nya diganti menjadi Ibra Hasan Suraya
db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        _id: "ibra",
        full_name: "Ibra"
      }
    }
  },
  {
    insertOne: {
      document: {
        _id: "hasan",
        full_name: "Hasan"
      }
    }
  },
  {
    updateMany: {
      filter: {
        _id: {
          $in: ["ibra", "hasan", "suraya"]
        }
      },
      update: {
        $set: {
          full_name: "Ibra Hasan Suraya"
        }
      }
    }
  }
])