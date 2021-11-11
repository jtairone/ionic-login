const express = require('express')
const morgan  = require('morgan')
const cors    = require('cors')
const { application } = require('express')
require('dotenv').config()
const cryptjs = require('crypto-js')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.json({'Status': 'rodando OK'});
})

app.post('/loginProtegido', (req, res)=>{
    const data = req.body;
    //decryptografando e mostrando no console
    let bytes = cryptjs.AES.decrypt(data.hash, process.env.SECRET);
    let decrypeData = JSON.parse(bytes.toString(cryptjs.enc.Utf8));
    console.log(decrypeData);
    //
    //retornando a requisição mostrando que chegou o login criptogravado
    res.json( { data, decrypeData } );
})
app.post('/loginInseguro', (req, res)=>{
    const data = req.body;
    res.json(data);
})

app.listen(8000, ()=>{
    console.log('Rodando em http://localhost:8000')
})