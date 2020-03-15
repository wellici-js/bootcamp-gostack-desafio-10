import bcrypt from 'bcryptjs';
import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;

// User.init(
//   {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.VIRTUAL,
//     password_hash: DataTypes.STRING,
//   },
//   {
//     hooks: {
//       beforeSave: async user => {
//         if (user.password)
//           user.password_hash = await bcrypt.hash(user.password, 8);
//       },
//     },
//   }
// );

// User.prototype.checkpassword = function checkpassword(password) {
//   return bcrypt.compare(password, this.password_hash);
// };

// module.exports = new User();

// // module.exports = (sequelize, DataTypes) => {
// //   const User = sequelize.define(
// //     'User',
// //     {
// //       name: DataTypes.STRING,
// //       email: DataTypes.STRING,
// //       password_hash: DataTypes.STRING,
// //     },
// //     {
// //       hooks: {
// //         beforesave: async user => {
// //           if (user.password)
// //             user.password_hash = await bcrypt.hash(user.password, 8);
// //         },
// //       },
// //     }
// //   );
// //   // User.associate = function(models) {
// //   //   // associations can be defined here
// //   // };

// //   User.prototype.checkpassword = function checkpassword(password) {
// //     return bcrypt.compare(password, this.password_hash);
// //   };

// //   return User;
// // };
