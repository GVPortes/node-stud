const express = require('express'); 
const app = express();
const port = 3000;


//parametro REQ requisição passada
//parametro res é a devolução da resposta
app.get ('/', (req, res) => {
    console.log("Entrou aqui");
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Para consultar "GET"
//Para inserir algo "Post"
//Para apagar "Delete"
//Para alterar "put" "patch"

