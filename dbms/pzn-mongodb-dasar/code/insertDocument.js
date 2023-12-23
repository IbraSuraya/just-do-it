db.<collection>.insertOne(document)         // Menambah dokuemn ke collection
db.<collection>.insertMany(array<document>) // Menambah semua dokuemn di array ke collection

// insert customers document
db.customers.insertOne({
    _id: "Suraya",
    name: "Ibra Hasan Suraya"
});
db.customers.find();

// insert product documents
db.products.insertMany([
    {
        _id: 1,
        name: "Indomie Ayam Bawang",
        price: new NumberLong("2000")
    },
    {
        _id: 2,
        name: "Mie Sedap Soto",
        price: new NumberLong("2500")
    }
]);
db.products.find();

// insert orders documents
db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong("9000"),
    items: [
        {
            product_id: 1,
            price: new NumberLong("2000"),
            quantity: new NumberInt("2")
        },
        {            
            product_id: 2,
            price: new NumberLong("2500"),
            quantity: new NumberInt("2")
        }
    ]
});
db.orders.find();