const express = require('express');
const app = express();

const port =process.env.PORT || 5004;

const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addbooks',name:'Add Books'
    },
    {
        link:'/addauthors',name:'Add Authors'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'SignUp'
    }
];



const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const addauthorsRouter = require('./src/routes/addauthorRoutes')(nav)
const addbooksRouter = require('./src/routes/addbookRoutes')(nav)
const loginRouter = require('./src/routes/lgnRoutes')(nav)
const signupRouter = require('./src/routes/sgnup')(nav)

app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views')
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addauthors',addauthorsRouter);
app.use('/addbooks',addbooksRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);

 

app.get('/', function(req,res){

    res.render("index",
    {
        nav,
        title:'Library'
    });

});

app.listen(port,()=>{console.log("Server Ready at" + port)});

