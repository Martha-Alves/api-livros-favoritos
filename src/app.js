import express from "express";

const app = express();

const livros = [
    {id: 1, "titulo": "O Pequeno Principe"},
    {id: 2, "titulo": "O Amor Não é Óbvio"},
    {id: 3, "titulo": "A Revolução dos Bichos"},
    {id: 4, "titulo": "Machado de Assis Contos"},
];

app.get("/", (req, res) => res.status(200).send("Bem-vindo, esta é uma biblioteca dos meus livros favoritos!"));

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
});

export default app;