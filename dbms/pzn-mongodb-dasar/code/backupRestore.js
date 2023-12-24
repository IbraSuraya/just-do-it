./bin/mongodump --uri="mongodb://mongo:mongo@localhost:27017/practice?authSource=admin" --out=../backup-dump

./bin/mongoexport --uri="mongodb://mongo:mongo@localhost:27017/practice?authSource=admin" --collection="customers" --out=../backup-export/customers.json

./bin/mongorestore --uri="mongodb://mongo:mongo@localhost:27017/practice_restore?authSource=admin" --dir=../backup-dump/practice
use practice_restore
db.getCollectionNames()

./bin/mongoimport --uri="mongodb://mongo:mongo@localhost:27017/practice_import?authSource=admin" --collection="customers" --file=../backup-export/customers.json
use practice_import
db.customers.find()