const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxRate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TaxCategoryId: {
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
    Zip: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Percentage: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TaxRate',
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
