const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Discount_AppliedToManufacturers', {
    Discount_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Discount',
        key: 'Id'
      }
    },
    Manufacturer_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Manufacturer',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Discount_AppliedToManufacturers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Discount_Id" },
          { name: "Manufacturer_Id" },
        ]
      },
      {
        name: "IX_B27FB643C3BB153FA3E393FE3CE8AB72E6A6B90F",
        using: "BTREE",
        fields: [
          { name: "Discount_Id" },
        ]
      },
      {
        name: "IX_4878483EA6D877C2F4E05C5D2E7DCBCE5F1D7D84",
        using: "BTREE",
        fields: [
          { name: "Manufacturer_Id" },
        ]
      },
    ]
  });
};
