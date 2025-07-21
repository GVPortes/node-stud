const express = require('express'); 
const app = express();
const port = 3000;


//parametro REQ requisição passada
//parametro res é a devolução da resposta
app.get ('/', (req, res) => {
    console.log("Entrou aqui");
    res.send("app GET!");
//ele nunca atualiza o console.log, ele só executa quando a rota é chamada
// então se você chamar a rota várias vezes, ele vai imprimir várias vezes
// mas o console.log só é executado quando a rota é chamada
//para atualizar o console.log, você precisa reiniciar o servidor
//mas agora a gente instalou o nodemon, então ele vai reiniciar automaticamente
// então você não precisa mais reiniciar o servidor manualmente
// o nodemon vai reiniciar o servidor automaticamente quando você salvar o arquivo
//então você pode salvar o arquivo e ver o console.log atualizado
});

app.post('/', (req, res) => {
    res.send("app POST!");
});

app.delete('/', (req, res) => {
    res.send("app DELETE!");
});
app.put('/', (req, res) => {
    res.send("app PUT!");
}); 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Para consultar "GET"
//Para inserir algo "Post"
//Para apagar "Delete"
//Para alterar "put" "patch"

