'use strict';

const Model = require('../memory-model.js');

/**
 * API Router Module (V1)
 * Integrates with various models through a common Interface (.get(), .post(), .put(), .delete())
 * @module src/models/categories/categories-model
 */

/**
 * @typedef categories-model
 * @property {schema} - Model schema from child Class
 */

const schema = {
  _id: {required:true},
  name: {required:true},
};

class Categories extends Model {}

module.exports = new Categories(schema);
