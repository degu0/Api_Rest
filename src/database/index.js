import Sequelize from "sequelize";
import dataConfig from '../config/database';
import Aluno from "../models/Aluno";
import User from "../models/User";
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(dataConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
