import {Kafka} from "kafkajs"

// Config port server kafka 
const kafka = new Kafka({
  "brokers": ["localhost:9092"]
})

// Config consumer with groupConsumer
const consumer = kafka.consumer({
  groupId: "nodeJS"
})

// Config consumer topic "practice" with from-beginning
await consumer.subscribe({
  topic: "practice",
  fromBeginning: true
})

// ==================== Membaca Data ====================
// Connect kafka dengan consumer
await consumer.connect()

// Menjalankan consume
await consumer.run({
  eachMessage: async (record) => {
    const message = record.message
    console.info(message.value.toString())
    // console.info(message.key.toString())
    // console.info(message.headers.toString())
    // console.info(message.offset.toString())
    // console.info(message.size.toString())
  }
})

