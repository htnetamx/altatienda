const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductWarehouseInventory', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'Id'
      }
    },
    WarehouseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Warehouse',
        key: 'Id'
      }
    },
    StockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ReservedQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductWarehouseInventory',
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
        name: "IX_194D2A5B9EF87F154B5DD69A1834FAFCDD487B94",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
      {
        name: "IX_D53A72DA5744EF523A405436021498998DDFABEA",
        using: "BTREE",
        fields: [
          { name: "WarehouseId" },
        ]
      },
    ]
  });
};
