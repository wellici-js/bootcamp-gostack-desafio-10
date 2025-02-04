import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/entitys/User';
import File from '../app/models/entitys/File';

const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
