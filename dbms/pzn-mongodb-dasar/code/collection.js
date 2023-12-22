db.getCollectionNames()     // Mengambil semua nama collection
db.createCollection(name)   // Membuat collection baru
db.getCollection(name)      // Mendapatkan object collection
db.<name>                   // Sama dengan db.getCollection(<name>)
db.getCollectionInfos()     // Mendapatkan semua informasi collection

db.<collection>.find()      // mengambil semua document
db.<collection>.count()      // mengambil jumlah document
db.<collection>.drop()      // menghapus collection
db.<collection>.totalSize()      // Mengambil total ukuran collection
db.<collection>.stats()      // Mengambil informasi statistik collection

// practice : create collection(table)
db.createCollection("customers");
db.createCollection("products");
db.createCollection("orders");
db.getCollectionNames();

// untuk melihat dokument/data tiap collection
db.customers.find();
db.products.find();
db.orders.find();