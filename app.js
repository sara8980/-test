console.log("my app started")
const express = require("express");
const app = express();
counter=0;
const toys = [
    {
        name: "kapla",
        price: 100,
        id: "123"
    },
    {
        name: "duplo",
        price: 120,
        id: "567"
    },
    {
        name: "kliks",
        price:50,
        id: "321"
    }
]

app.get('/',(request,response)=>{
    const html=`<div>
    <h1>Home</h1>
    <h1>Hello to all<h1>
    </div>`
    response.send(html);
})
app.get('/catalog',(reqest,response)=>{
    response.send(toys)
})
app.get('/toy',(request,response)=>{
    const toyId = request.query.id;
    const toy=toys.find((t)=>{
        return t.id==toyId
    })
    response.send(toy.name)
})
app.get('/sign-in',(reqest,response)=>{

})
app.listen('3000', ()=>{
    console.log('app is listening on port 3000');
})