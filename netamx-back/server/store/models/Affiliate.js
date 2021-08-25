const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Affiliate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AddressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Address',
        key: 'Id'
      }
    },
    AdminComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FriendlyUrlName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Affiliate',
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
        name: "IX_53E30AC40CBC90074D6593764F2E48388B497292",
        using: "BTREE",
        fields: [
          { name: "AddressId" },
        ]
      },
    ]
  });
};
