const express = require("express")
const cors = require("cors")
const app = express()
const axios = require("axios")
const { response } = require("express")
const porta = process.env.PORT || 4040
// Configurações 

app.use(cors())
app.use('/static', express.static('static'))

  function collect(){
     axios.get("https://sheetdb.io/api/v1/6gnniw4yzpsz3")
     .then( response => {
      for(let i = 0; i < response.data.length; i++) {
        app.get( `/index.html/${response.data[i].id}`, (req, res) => {
            res.sendfile((__dirname+"/default.html"))
      })
    }
  });
//Definindo a rota para cada produto constado na API
  }
  app.get('/', (req, res) => {
    res.sendFile((__dirname+"/index.html"))
  })

  collect()
app.listen(porta, () => console.log(`🚀 Server is running on PORT ${porta}`))
