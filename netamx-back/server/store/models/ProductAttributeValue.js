const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductAttributeValue', {
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
    ColorSquaresRgb: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ProductAttributeMappingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product_ProductAttribute_Mapping',
        key: 'Id'
      }
    },
    AttributeValueTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AssociatedProductId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ImageSquaresPictureId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PriceAdjustment: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    PriceAdjustmentUsePercentage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    WeightAdjustment: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    Cost: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    CustomerEntersQty: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsPreSelected: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PictureId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductAttributeValue',
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
        name: "IX_C8FD7E41BDF864606B567EA54EAAB6219686F356",
        using: "BTREE",
        fields: [
          { name: "ProductAttributeMappingId" },
        ]
      },
      {
        name: "IX_ProductAttributeValue_ProductAttributeMappingId_DisplayOrder",
        using: "BTREE",
        fields: [
          { name: "ProductAttributeMappingId" },
          { name: "DisplayOrder" },
        ]
      },
    ]
  });
};
