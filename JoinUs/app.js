var faker = require("faker");
var mysql = require('mysql');
const express = require('express');
const app = express();

app.listen(3000, function(req,res){
  console.log("Connected on port 3000");
})

// console.log(faker.address.city());
//remember when connecting to mysql database to remember your root password and create an existing database beforehand
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'joinus'
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

//connects to database
connection.connect(function(err) {
    //throws error if there is one or else confirms connection
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected to mysql datbase' + connection.database);
});

// testQuery = "select curdate() as date, curtime() as time";
//queries execute sql commands
// connection.query(testQuery,function (error,results,fields) {
//     if(error){
//         throw error;
//     }
//     console.log("The time is: " + results[0].time);
//     console.log("The date is: " + results[0].date);
// });

//creates a table with query
// var tableQuery = "create table users(email varchar(255) primary key, created_at timestamp default now())"
// connection.query(tableQuery, function (error,results,fields) {
//     if(error) throw error;
// });

// bulk inserts values with query
//need array of values if inserting multiple values
// for(let i =0; i<100; i++){
//     var insertQuery = "insert into users (email) values ?";
//     var values = [[faker.internet.email()],[faker.internet.email()],[faker.internet.email()],[faker.internet.email()],[faker.internet.email()]];
//     connection.query(insertQuery,[values], function (error,results,fields) {
//         if(error) throw error;
//         console.log("Inserted");
//     })
// }



//selects values with query
var selectQuery = "select count(*) from users";
connection.query(selectQuery,function (error,results,fields) {
    if(error) throw error;
    console.log(results);
});
