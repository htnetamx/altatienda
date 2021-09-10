const global = require("./global");
const store = require("./stores");
const product = require("./product");
const auth = require("./auth");
const order = require("./order");
const purchase = require("./purchase");
const modules = [
  global,
  store,
  product, 
  auth,
  order,
  purchase
];

module.exports = modules;
