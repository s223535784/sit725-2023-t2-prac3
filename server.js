let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbConnection');
let router = require('../routes/router');

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://s223535784:s223535784@cluster0.b7c8yhu.mongodb.net/?retryWrites=true&w=majority";let collection;
// let collection;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat', router);


app.listen(port, ()=>{
    console.log('express server started');
    //runDB();
});

// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

// async function runDB() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       collection = client.db().collection('Cats');
//       console.log(collection);
//     } catch (ex) {
//         console.error(ex);
//     }
// }



app.get('/', function (req,res) {
    res.render('index.html');
});

