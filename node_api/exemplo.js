//const lista = [
//    'waleska',
//    'eduarda',
//    'dos'
//];

//lista.push('santos')
//for(let i = 0; i < lista.length; i++){
//    console.log(lista[i])
//}

//for(const a of lista){
//    console.log(a)
//}

//lista.forEach(element => (console.log(element)));

//const nomeDaFuncao = (element) => {
 //   console.log(element);
//}
//lista.forEach(nomeDaFuncao);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('./test.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})