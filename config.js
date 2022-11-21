const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.DATABASE);

module.exports = {client};