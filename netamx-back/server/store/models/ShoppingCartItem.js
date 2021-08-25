const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShoppingCartItem', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
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
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ShoppingCartTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AttributesXml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CustomerEnteredPrice: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RentalStartDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RentalEndDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ShoppingCartItem',
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
        name: "IX_F59371B91ADC899F64B183252FFDAD65F99A60B0",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IX_874149FC8129BC9A477567717104BF5951801611",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
      {
        name: "IX_ShoppingCartItem_ShoppingCartTypeId_CustomerId",
        using: "BTREE",
        fields: [
          { name: "ShoppingCartTypeId" },
          { name: "CustomerId" },
        ]
      },
    ]
  });
};
