const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShippingMethodRestrictions', {
    ShippingMethod_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ShippingMethod',
        key: 'Id'
      }
    },
    Country_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Country',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'ShippingMethodRestrictions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ShippingMethod_Id" },
          { name: "Country_Id" },
        ]
      },
      {
        name: "IX_A67E057E4259D823DFDB3A4FFFBDC22F9FF88570",
        using: "BTREE",
        fields: [
          { name: "ShippingMethod_Id" },
        ]
      },
      {
        name: "IX_98FECBA712EC3A7AF759C110137BABE6423115BA",
        using: "BTREE",
        fields: [
          { name: "Country_Id" },
        ]
      },
    ]
  });
};
