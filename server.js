const sqlite3 = require('sqlite3');
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize =  require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

const tasksRouter = require('./routes/tasks_routers');
const registrationsRouter = require('./routes/registrations_routers');
const sessionsRouter = require('./routes/sessions_routers');
//const tasks = require('./controllers/tasks');
const findUserMiddleware = require('./middlewares/find_user');
const authUserMiddleware = require('./middlewares/auth_user');
//se crea una sola vez
app.use(bodyParser.urlencoded({extended: true}));

//let db = new sqlite3.Database('proyecto-backend');
/*
const sequelize = new Sequelize('proyecto-backend',null,null,{
    dialect:'sqlite',
    storage:'./proyecto-backend'
});
*/
//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');
app.use(methodOverride('_method'));
app.set('view engine','pug');

app.use(session({
  secret:['213231jhjkhjk1jh23k12','454h6j5khjh64jkh6j4k'],
  saveUninitialized: false,
  resave: false
}));


app.use(findUserMiddleware);
app.use(authUserMiddleware);
app.use(tasksRouter);
app.use(registrationsRouter);
app.use(sessionsRouter);


app.get('/',function(req,res){
    res.render('home',{user:req.user});
});
/*app.get('/tasks',tasks.home);

app.post('/pendientes',function(req,res) {
        //db.run("INSERT INTO task(description) VALUES('Hola mundiño')");
        res.send('insercion existosa');
});
*/
app.listen(3000);
/*
process.on('SIGINT',function(){
    console.log('Adios el servidor');
    db.close();
    process.exit();
});
*/
