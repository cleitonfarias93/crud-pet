const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const registroPets = require('./models/registroPets')

app.use(bodyParser.urlencoded( {extended:true} ));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.post('/cadastrar', function(req, res){
    registroPets.create({
        tipo: req.body.tipo,
        nome: req.body.nome,
        datanasc: req.body.dataNasc,
        raca: req.body.raca,
        sexo: req.body.sexo,
        cor: req.body.cor,
        nomepai: req.body.nomePai,
        nomemae: req.body.nomeMae
    }).then(function(){
        res.send(200);
    }).catch(function(err){
        res.send("O cadastro falhou: " + err);
    })
});

app.get('/listar', function(req, res){
    registroPets.findAll().then(function(registroPets){
        res.send(JSON.stringify(registroPets));
    })
});

app.get('/deletar/:id', function(req, res){
    registroPets.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.status(200);
    }).catch(function(err){
        res.send("Erro Ao deletar: " + err);
    })
});

app.get('/petbyid/:id', function(req, res){
    registroPets.findAll({
        where: {'id': req.params.id}
    }).then(function(registroPets) {
        res.send(JSON.stringify(registroPets));
    }).catch(function(err){
        res.send("Erro na consulta: " + err);
    })
});

app.post('/editar', function(req, res){
    registroPets.update({
        tipo: req.body.tipo,
        nome: req.body.nome,
        datanasc: req.body.datanasc,
        raca: req.body.raca,
        sexo: req.body.sexo,
        cor: req.body.cor,
        nomepai: req.body.nomepai,
        nomemae: req.body.nomemae },

        {where: {'id': req.body.id }

    }).then(function(){
        res.status(200);
    }).catch(function(err){
        res.send("Erro ao editar Pet: " + err);
    })
})

app.listen(8080, function(){console.log("Servidor Web Rodando na Porta 8080")});