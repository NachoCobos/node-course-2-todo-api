//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//deleteMany
	//db.collection('Users').deleteMany({name: 'Nacho'}).then((result) => {
	//	console.log(result);
	//});

	//deleteOne
	//db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	//	console.log(result);
	//});

	//findOneAndDelete
	//db.collection('Users').findOneAndDelete({_id: new ObjectID('5ad4e51ee518ca98a80ef67d')}).then((result) => {
	//	console.log(result);
	//});

	db.collection('Users').deleteMany({name: 'Nacho'});

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5ad4e51ee518ca98a80ef67d')}).then((results) => {
		console.log(JSON.stringify(results, undefined, 2));
	});


	// db.close();
});