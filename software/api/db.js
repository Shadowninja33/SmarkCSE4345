var mysql = require('mysql');
var fs = require('fs');

//sql credentials
var pool = mysql.createPool({

    host     : 'db1.akimball.com',
    user     : 'root',
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : 'parking'

  });

module.exports = pool;