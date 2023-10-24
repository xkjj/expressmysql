///XAMPP - windows
let mysql  = require('mysql2');
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',   //this also could be root
    database: 'kjarosz02',
    port: '3306' 
});

db.connect((err)=> {
    if(err) throw err;
});

module.exports = db;
