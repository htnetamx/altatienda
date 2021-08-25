const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer_CustomerRole_Mapping', {
    Customer_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Customer',
        key: 'Id'
      }
    },
    CustomerRole_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CustomerRole',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Customer_CustomerRole_Mapping',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Customer_Id" },
          { name: "CustomerRole_Id" },
        ]
      },
      {
        name: "IX_09E9645547A7290962418327EE12D590BC1995F5",
        using: "BTREE",
        fields: [
          { name: "Customer_Id" },
        ]
      },
      {
        name: "IX_E0FD9013E1AA40ED714BD90CE38AA3C1D57484E5",
        using: "BTREE",
        fields: [
          { name: "CustomerRole_Id" },
        ]
      },
    ]
  });
};
