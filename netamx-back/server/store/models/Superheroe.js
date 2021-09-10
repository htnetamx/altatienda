const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Superheroe', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Name2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LastName1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LastName2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NameUser: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "Superheroe_UN"
    },
    Password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Active: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Rol',
        key: 'Id'
      }
    },
    CreatedAtUTC: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Superheroe',
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
        name: "Superheroe_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NameUser" },
        ]
      },
      {
        name: "Superheroe_FK",
        using: "BTREE",
        fields: [
          { name: "RoleId" },
        ]
      },
    ]
  });
};
