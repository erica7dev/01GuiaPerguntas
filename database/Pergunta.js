const Sequelize = require("sequelize");
const connection = require("./database");

//define = nome da table
const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING, //string = texto curto
        allowNull: false //text = texto longo
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false //não deixa o campo ser vazio
    }
});

//sync = se não existir table, ele cria
//force: false= se table já existir ele não recria
Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;