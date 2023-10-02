import { DataTypes, Model, Sequelize } from "sequelize";

// ts errors:
// Method 'set' in class 'User' is not assignable to the same method in base 'Model'
// Method 'setAttributes' in class 'User' is not assignable to the same method in base 'Model'
// possible related to: https://github.com/microsoft/TypeScript/issues/41181 ??
class User extends Model {
  declare firstname: string;
  declare lastname: string;
}

const sequelize = new Sequelize('not-important');

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'User'
});
