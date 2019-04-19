var routes = require('express').Router();
var pool = require('../db');


function execQuery(res, connection, q) {

    connection.query(q, (err,results,field) => {

        if (err) {

            console.log(err);

        } else {

            res.send(results);
            
        }

        connection.release();

    });

}

//get specific user id
routes.get('/spots', (req, res) => {

    pool.getConnection(function(err, connection) {
        if (err) {

            res.status(500).send('Server Error');
            console.log(err);
        } else {

            var q = `SELECT * FROM spots;`;

            execQuery(res, connection, q);

        } // not connected!        
    });
});




module.exports = routes;