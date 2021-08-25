const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerRole', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SystemName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FreeShipping: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TaxExempt: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsSystemRole: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    EnablePasswordLifetime: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    OverrideTaxDisplayType: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DefaultTaxDisplayTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PurchasedWithProductId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CustomerRole',
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
