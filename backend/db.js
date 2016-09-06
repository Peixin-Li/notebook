var mysql = require('mysql');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'notebook'
});

conn.connect();

conn.query('select * from n_user', function(err, rows, fields){
    if(err) throw err;
    console.log(rows);
    console.log(fields);
});

conn.end();