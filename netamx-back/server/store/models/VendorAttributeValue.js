const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VendorAttributeValue', {
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
    VendorAttributeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'VendorAttribute',
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
    tableName: 'VendorAttributeValue',
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
        name: "IX_C4D5E3F596710165FA89CD9C228D835174B8CB35",
        using: "BTREE",
        fields: [
          { name: "VendorAttributeId" },
        ]
      },
    ]
  });
};
