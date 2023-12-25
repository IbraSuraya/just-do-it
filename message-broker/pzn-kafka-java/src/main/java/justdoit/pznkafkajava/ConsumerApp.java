package justdoit.pznkafkajava;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.serialization.StringDeserializer;

import java.time.Duration;
import java.util.List;
import java.util.Properties;

public class ConsumerApp {
    public static void main(String[] args) {
        Properties properties = new Properties();
        // config properties
        properties.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        properties.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");    // from-beginning
        // Config type data key value menggunakan string
        properties.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        properties.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        properties.put(ConsumerConfig.GROUP_ID_CONFIG, "java");     // Config consumerGroup

        // Create consumer
        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(properties);
        // Consume ke topci practice
        // karena menggunakan list, bisa subcribe ke banyak topic
        consumer.subscribe(List.of("practice"));

        while (true) {
            // poll untuk akses data
            // Duration untuk timeout jika tidak ada data
            ConsumerRecords<String, String> records = consumer.poll(Duration.ofSeconds(1));
            for (ConsumerRecord<String, String> message : records){
                System.out.println(message.value());
                // System.out.println(message.headers());
                // System.out.println(message.key());
                // System.out.println(message.offset());
                // System.out.println(message.partition());
            }
        }
    }
}
