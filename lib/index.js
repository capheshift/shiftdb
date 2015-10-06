// tw7
'use strict';

var _ = require('lodash');

// class controll business function for staff object
var ShiftDB = function(storeName) {
  this.storeName = storeName;
  this.context = JSON.parse(localStorage.getItem(this.storeName));
  var save = function() {
    localStorage.setItem(this.storeName, JSON.stringify(this.context));
    return true;
  };

  this.getAll = function() {
    return this.context;
  };

  this.getById = function(id) {
    var result = _.filter(this.context, function(item) {
      return item.id === id;
    });
    return result[0] || null;
  };

  this.addNew = function(newItem) {
    this.context.push(newItem);
    save(this.context);
    return newItem;
  };

  this.update = function(id, data) {
    var item = this.getById(id);
    item = data;
    save(this.context);
    return this.context;
  };

  this.remove = function(id) {
    _.remove(this.context, function(item) {
      return item.id == id;
    });
    save(this.context);
    return true;
  };
};

module.exports = ShiftDB;