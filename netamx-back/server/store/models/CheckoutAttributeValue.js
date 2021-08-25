const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CheckoutAttributeValue', {
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
    CheckoutAttributeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CheckoutAttribute',
        key: 'Id'
      }
    },
    PriceAdjustment: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    WeightAdjustment: {
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
    tableName: 'CheckoutAttributeValue',
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
        name: "IX_36B591D67F6ADB5848B096AF344F381721D1781C",
        using: "BTREE",
        fields: [
          { name: "CheckoutAttributeId" },
        ]
      },
    ]
  });
};
