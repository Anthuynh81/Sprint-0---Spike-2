//Sample Text
const http = require('http');
const mysql = require('mysql');

const port = 3000;
const table = [];

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sprint0'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

con.query('SELECT * FROM testTable', (err, rows) => {
    if(err) throw err;
    rows.forEach( (row) => {
        printRow = (`EmplID: ${row.EmplID}  FirstName: ${row.FirstName}  LastName: ${row.LastName}  Phone: ${row.Phone}  Age: ${row.Age}`)
        table.push(printRow)
    })
})

const server = http.createServer(function(req, res) {
    res.write("Hello World! \n");
    table.forEach( (row) => {
        res.write("\n" + row);
    })
    res.end()
})

server.listen(port, function(error) {
    if (error) {
        console.log('Error', error)
    } else {
        console.log('Its on port: ' + port)
    }
})

