const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PredefinedProductAttributeValue', {
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
    ProductAttributeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ProductAttribute',
        key: 'Id'
      }
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
    IsPreSelected: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PredefinedProductAttributeValue',
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
        name: "IX_0B8B35187AF308E8F9D8B2E28B3DA957BE85A5DB",
        using: "BTREE",
        fields: [
          { name: "ProductAttributeId" },
        ]
      },
    ]
  });
};
