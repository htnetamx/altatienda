const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LoginAttempts', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ip: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CreatedAtUTC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SuperHeroeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Superheroe',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'LoginAttempts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "LoginAttempts_FK",
        using: "BTREE",
        fields: [
          { name: "SuperHeroeId" },
        ]
      },
    ]
  });
};
