const express = require("express")
const app = express()
const Sequelize = require("sequelize")

//Connection with MySQL data base
const sequelize = new Sequelize("banco_projeto", "root", "Marcela2612!", {
    host: "localhost",
    dialect: "mysql"
})

//Routes
app.get('/', (req, res)=>{
    res.sendFile(__dirname+"main.html")
})

/*
app.get('/cadastro', (req, res)=>{
    res.render("formulario")
})

app.post('/add', (req, res)=>{
    res.send(`Titulo: ${req.body.titulo} Postagem: ${req.body.conteudo}`)
})
*/

app.listen(8081, ()=>{
    console.log("Servidor rodando na url: http://localhost:8081")
})
