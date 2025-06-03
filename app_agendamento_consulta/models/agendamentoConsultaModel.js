const Sequelize = require('sequelize');
const db = require('../db');

const agendamentoConsulta = db.define('agendamento_consulta',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_de_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereço: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clinica: {
        type: Sequelize.STRING,
        allowNull: false
    },
    especialidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_consulta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hora_consulta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    observação: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = agendamentoConsulta;