const db = require('./db');

const registroPets = db.sequelize.define('registro_pets', {
    tipo: {
        type: db.Sequelize.STRING
    },
    nome: {
        type: db.Sequelize.STRING
    },
    datanasc: {
        type: db.Sequelize.DATE
    },
    raca: {
        type: db.Sequelize.STRING
    },
    sexo: {
        type: db.Sequelize.STRING
    },
    cor: {
        type: db.Sequelize.STRING
    },
    nomepai: {
        type: db.Sequelize.STRING
    },
    nomemae: {
        type: db.Sequelize.STRING
    }

})

//Criar a Tabela
//registroPets.sync({force: true});

module.exports = registroPets;