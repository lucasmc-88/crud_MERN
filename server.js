const express =  require('express')
const app = express()

app.get('/',(req, res) => {
    res.end('bienvenido al servidor backend node.js corriendo')
})


// Configurar server basico

app.listen(5000, function(){
    console.log('el servidor node esta corriendo correctamente');
})