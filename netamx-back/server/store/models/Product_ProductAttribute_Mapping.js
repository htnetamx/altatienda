const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product_ProductAttribute_Mapping', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductAttributeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ProductAttribute',
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
    TextPrompt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AttributeControlTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ValidationMinLength: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ValidationMaxLength: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ValidationFileAllowedExtensions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ValidationFileMaximumSize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DefaultValue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ConditionAttributeXml: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Product_ProductAttribute_Mapping',
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
        name: "IX_47FA8F827F33CA5D7C889B64078C36A49F6790A6",
        using: "BTREE",
        fields: [
          { name: "ProductAttributeId" },
        ]
      },
      {
        name: "IX_F6226437D41700C3BDEDDE266458E52BCE9E3715",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
      {
        name: "IX_Product_ProductAttribute_Mapping_ProductId_DisplayOrder",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
          { name: "DisplayOrder" },
        ]
      },
    ]
  });
};
