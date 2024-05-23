const express = require('express');
const porta = 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Chamei o backend com sucesso");
});

app.post("/", (req, res) => {
    res.send("çfjngaoifdsnbçoadsfnbkdnafbdab");
});

app.get("/moeda", (req, res) => {
    const moedas = {
        BRL: "real",
        USD: "dolar",
        EUR: "euro"
    }


    res.status(200).json(moedas);
});

app.get('/conversao/:moedas', (req, res) => {

    //processo de conversão
    let moedas = req.params.moedas.split("-");
    let moeda1 = moedas[0];
    let moeda2 = moedas[1];



    //Fazer a conversão no backend e retornar no front end

    fetch(`https://economia.awesomeapi.com.br/json/last/${moeda1+"-"+ moeda2}`)
        .then(response => response.json())
        .then(data => {
            console.log(data[moeda1+moeda2].ask)
            res.status(200).json(data);
        })

})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});