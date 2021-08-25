const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShippingByWeightByTotalRecord', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    WeightFrom: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    WeightTo: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    OrderSubtotalFrom: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    OrderSubtotalTo: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    AdditionalFixedCost: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    PercentageRateOfSubtotal: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    RatePerWeightUnit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    LowerWeightLimit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    Zip: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    WarehouseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CountryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StateProvinceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ShippingMethodId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TransitDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ShippingByWeightByTotalRecord',
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
