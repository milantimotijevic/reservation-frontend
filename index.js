require('dotenv/config');
const express = require('express');
const app = express();

const handlebars = require('express3-handlebars')
	.create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.get('/',(req,res)=>{
	res.render('home');
});

app.locals.apiHost = process.env.API_HOST;

app.listen(3001);
