const express = require('express')
const app = require('path')

const app = express()
const port = process.env.PORT ||3000


app.use(express.static(__dirname+'beingzero-3/newproject'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/beingzero-3/newproject/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))