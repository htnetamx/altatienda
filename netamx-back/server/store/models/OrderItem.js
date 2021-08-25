const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderItem', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'Id'
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'Id'
      }
    },
    OrderItemGuid: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UnitPriceInclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    UnitPriceExclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    PriceInclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    PriceExclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    DiscountAmountInclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    DiscountAmountExclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    OriginalProductCost: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    AttributeDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AttributesXml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DownloadCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsDownloadActivated: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LicenseDownloadId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ItemWeight: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    RentalStartDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RentalEndDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OrderItem',
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
        name: "IX_01DC8234EFFE848F4BACFA16F95AA7A4EF77375D",
        using: "BTREE",
        fields: [
          { name: "OrderId" },
        ]
      },
      {
        name: "IX_25727F4EB701F202F56ABC70D9470E7FB2F2D00B",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
    ]
  });
};
