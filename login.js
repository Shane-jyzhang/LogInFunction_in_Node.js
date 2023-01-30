
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();


//database connection:
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Zz991004',
	database : 'nodelogin'
});
connection.connect((err) =>{
	if (err) {
		console.log(err)
		return
	}
	console.log("connected!!!!!!!!!!!!")
})

//associate the modules:
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'js')));
/* app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    next();
  }); */

//http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});




//add a new route: authentication route using the POST method
// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');

			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

//home route:
// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	/* if (request.session.loggedin) {
		// Output username
		response.send('Welcome, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end(); */
	
    if (request.session.loggedin) {
        //response.send('Welcome, ' + request.session.username + '!');
        response.sendFile(path.join(__dirname + '/home.html'));
    }
    else{
        response.send('PLEASE LOGIN TO VIEW THIS PAGE!!')
    }
    
});

//get data from databse
/* app.get('/getData', function(req, res) {
	// Render login template
		//const client = connection.connect();
		const result = connection.query('SELECT * FROM waste ' )
		//const result = connection.query("SELECT values from waste where item = "+"'"+req.params.id+"'");
		const results = { 'results': (result) ? result.rows : null};
		res.send(results)
		connection.connect.release();
	}
); */

app.get("/getData", function (req, res) {
	const result = connection.query(
		
		 "SELECT consumption from record where itemsname = "+"'"+req.query.search+"'", 
	  	function (error, results) {
		res.send(results);	
	  }
	);
  });

app.listen(3000);