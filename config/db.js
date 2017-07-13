"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connectionString = 'mongodb://joe:Rbwmt1717@ds161890.mlab.com:61890/restorationbwmt';
var mongodb = require("mongodb");
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongodb.MongoClient.connect(connectionString).then(function (db) {
            _this.db = db;
            console.log('Connected...');
        }).catch(function (err) {
            console.error(err);
        });
    };
    return Database;
}());
exports.default = Database;
