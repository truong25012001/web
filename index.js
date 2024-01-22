const express = require("express");
var methodOverride = require('method-override');
const app = express();


const cookieParser = require("cookie-parser");
const session = require("express-session");

var flash = require('express-flash');
require('dotenv').config();
const port = process.env.PORT;
const systemConfig = require("./config/system");
var bodyParser = require('body-parser');
const database = require("./config/database");
database.connect();

const routeAdmin = require("./routes/admin/index.route");
const route = require("./routes/client/index.route");


app.use(cookieParser('xnxx'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(methodOverride('_method'));
app.use(express.static(`${__dirname}/public`));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

routeAdmin(app);
route(app);

// App Local variable

app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
})