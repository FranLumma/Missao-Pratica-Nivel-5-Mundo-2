const banco = require("mongoose");

const options = { useUnifiedTopology: true, useNewUrlParser: true };

banco
  .connect("mongodb://localhost:27017/?directConnection=true")
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

banco.Promise = global.Promise;

module.exports = banco;
