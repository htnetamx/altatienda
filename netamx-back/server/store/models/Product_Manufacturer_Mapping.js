const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product_Manufacturer_Mapping', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ManufacturerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Manufacturer',
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
    IsFeaturedProduct: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Product_Manufacturer_Mapping',
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
        name: "IX_DABA4762DFE5DDE81827BC9AEBC96E0930755460",
        using: "BTREE",
        fields: [
          { name: "ManufacturerId" },
        ]
      },
      {
        name: "IX_4DE2FF87C02296F96D7DA49634AE6719C03E5E06",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
      {
        name: "IX_Product_Manufacturer_Mapping_IsFeaturedProduct",
        using: "BTREE",
        fields: [
          { name: "IsFeaturedProduct" },
        ]
      },
      {
        name: "IX_PMM_Product_and_Manufacturer",
        using: "BTREE",
        fields: [
          { name: "ManufacturerId" },
          { name: "ProductId" },
        ]
      },
      {
        name: "IX_PMM_ProductId_Extended",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
          { name: "IsFeaturedProduct" },
        ]
      },
    ]
  });
};
