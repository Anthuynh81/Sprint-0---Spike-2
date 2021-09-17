const mysql = require('mysql');

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

con.query('SELECT * FROM testTable', (err, rows) => {
    if(err) throw err;

    console.log('Pulling testTable from database')
    rows.forEach( (row) => {
        console.log(`EmplID: ${row.EmplID}  FirstName: ${row.FirstName}  LastName: ${row.LastName}  Phone: ${row.Phone}  Age: ${row.Age}`)
    })
})

con.end((err) => {
});