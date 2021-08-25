const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CheckoutAttribute', {
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
    TextPrompt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ShippableProductRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsTaxExempt: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TaxCategoryId: {
      type: DataTypes.INTEGER,
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
    LimitedToStores: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'CheckoutAttribute',
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
    ]
  });
};
