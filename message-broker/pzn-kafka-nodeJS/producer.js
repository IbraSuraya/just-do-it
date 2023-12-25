import { Kafka, Partitioners } from "kafkajs";

// Config port server kafka 
const kafka = new Kafka({
  brokers: ["localhost:9092"],
  clientId: "producer-nodeJS"
})

const producer = kafka.producer({
  // setting pemilihan partition berdasarkan key
  createPartitioner: Partitioners.DefaultPartitioner
})

// Connect Server Kafka dengan producer
await producer.connect()

// ==================== Mengirim Data ====================
// Menggunakan for loop, agar otomatis generate dan input data
for (let i = 17; i < 27; i++) {
  await producer.send({
    topic: "practice",
    
    // Karena menggunakan [], maka bisa mengirim banyak data sekaligus
    messages: [
      {
        "key" : `key${i}`,
        "value": `node${i}`
      }
    ]
  })
}

// Disconnect Server Kafka dengan producer
await producer.disconnect();