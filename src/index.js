const app = require('./app');

const port = 8021;

app.listen(port, ()=>{
    console.log("Server working on port ", port);
})