import app from "./src/app.js"; // importando express

const port = process.env.PORT || 3000; // BOAS PRÁTICAS! Isso é uma forma de deixar a responsabilidade de escolha da porta para o ambiente em que estamos hospedando nossa aplicação, assim não arrisco solicitar uma porta que já está em uso. 

app.listen(port, (req, res) => console.log("A API está funcionando!")) //basicamente, é o que faz o servidor escutar as requisições vindas da porta definida.