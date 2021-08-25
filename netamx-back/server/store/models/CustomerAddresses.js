const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerAddresses', {
    Address_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Address',
        key: 'Id'
      }
    },
    Customer_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Customer',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'CustomerAddresses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Address_Id" },
          { name: "Customer_Id" },
        ]
      },
      {
        name: "IX_64250EDA44F67EFAD151EB1EFE0D2EA08456B864",
        using: "BTREE",
        fields: [
          { name: "Address_Id" },
        ]
      },
      {
        name: "IX_9AC0D6FE14A030F18305F46F428ACB6898B4187F",
        using: "BTREE",
        fields: [
          { name: "Customer_Id" },
        ]
      },
    ]
  });
};
