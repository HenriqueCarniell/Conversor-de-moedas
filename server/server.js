const express = require('express');
const porta = 4000;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Chamei o backend com sucesso");
});

app.post("/", (req,res) => {
    res.send("çfjngaoifdsnbçoadsfnbkdnafbdab");
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});