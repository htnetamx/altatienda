const global = require("./global");
const store = require("./stores");
const product = require("./product");
const auth = require("./auth");
const order = require("./order");
const purchase = require("./purchase");
const hunter = require("./hunter");
const storeTypes = require("./storeTypes");
const modules = [
  global,
  store,
  product, 
  auth,
  order,
  purchase,
  hunter,
  storeTypes
];

module.exports = modules;
