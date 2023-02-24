const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const Sequelize = require("sequelize")

//Config
    //Template Engine
        app.engine('handlebars', exphbs({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
        app.set('views', "C:/Users/jeanm/Google Drive/Estudo/Computação/Linguagens/JavaScript/Exercicios/Projeto 01/views")
        app.use(express.urlencoded({extended:false}))
        app.use(express.json())

    //Conexão com o banco de dados MySQL
    const sequelize = new Sequelize("banco_projeto", "root", "Marcela2612!", {
        host: "localhost",
        dialect: "mysql"
    })

//Rotas
    app.get('/cadastro', function(req, res){
        res.render("formulario")
    })

    app.post('/add', function(req, res){
        res.send(`Titulo: ${req.body.titulo} Postagem: ${req.body.conteudo}`)
    })


app.listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081")
})
