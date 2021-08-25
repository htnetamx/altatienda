const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AddressAttributeValue', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    AddressAttributeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'AddressAttribute',
        key: 'Id'
      }
    },
    IsPreSelected: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AddressAttributeValue',
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
        name: "IX_B8DBEDC16E08BA4792A1836F0CFBAE45476188BC",
        using: "BTREE",
        fields: [
          { name: "AddressAttributeId" },
        ]
      },
    ]
  });
};
