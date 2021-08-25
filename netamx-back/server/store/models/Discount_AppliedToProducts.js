const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Discount_AppliedToProducts', {
    Discount_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Discount',
        key: 'Id'
      }
    },
    Product_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Product',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Discount_AppliedToProducts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Discount_Id" },
          { name: "Product_Id" },
        ]
      },
      {
        name: "IX_33C579DE1781A7E8E15007E3FE54F0FF377BC60C",
        using: "BTREE",
        fields: [
          { name: "Discount_Id" },
        ]
      },
      {
        name: "IX_57E9214528270AE442DF14F651EFC02B2218B19E",
        using: "BTREE",
        fields: [
          { name: "Product_Id" },
        ]
      },
    ]
  });
};
