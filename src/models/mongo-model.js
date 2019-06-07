'use strict';

/**
* @module src/models/mongo-model
*/

/**
 * @Class Mongo Model
 * @desc Mongo model for get, post, put, and delete requests
 */

class Model {

  /**
   * @param {players} schema - schema from players
   * @param {teams} schema - schema from teams
   */

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }
  
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
