const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductAttributeCombination', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Sku: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    ManufacturerPartNumber: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    Gtin: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'Id'
      }
    },
    AttributesXml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AllowOutOfStockOrders: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    OverriddenPrice: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    NotifyAdminForQuantityBelow: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PictureId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MinStockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductAttributeCombination',
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
        name: "IX_10742F34F6C98BF11B11FBFB350254FBD0802277",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
    ]
  });
};
