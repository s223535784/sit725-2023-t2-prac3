const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s223535784:s223535784@cluster0.b7c8yhu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  client.connect();

  module.exports = client;