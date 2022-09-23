const express = require('express')
const app = express()
const PORT= 8000 ;
const {readFile} = require('fs').promises

const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public'); 
app.use(express.static(PUBLIC_DIRECTORY))

app.get('/', async (req, res) => {
//   res.sendFile('../public/index.html', { root: __dirname });
res.send(await readFile('./public/index.html', 'utf-8'))
})

app.get('/cari', async (req, res) => {
res.send(await readFile('./public/cari.html', 'utf-8'))
})

app.get('\.css$', async (req, res) => {
    res.send(await readFile('./public/css', 'utf-8'))
})

app.listen(PORT, 'localhost',() => {
  console.log(`Server is up on localhost:${PORT}`);
})
