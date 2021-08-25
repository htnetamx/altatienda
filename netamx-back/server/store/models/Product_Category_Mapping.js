const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product_Category_Mapping', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
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
    tableName: 'Product_Category_Mapping',
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
        name: "IX_65D0E0647344EB198B9C2CE245C24526EA026B04",
        using: "BTREE",
        fields: [
          { name: "CategoryId" },
        ]
      },
      {
        name: "IX_C069A2C78E4169E39784E2F8D1C8390483CCDC24",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
      {
        name: "IX_PCM_Product_and_Category",
        using: "BTREE",
        fields: [
          { name: "CategoryId" },
          { name: "ProductId" },
        ]
      },
      {
        name: "IX_Product_Category_Mapping_IsFeaturedProduct",
        using: "BTREE",
        fields: [
          { name: "IsFeaturedProduct" },
        ]
      },
      {
        name: "IX_PCM_ProductId_Extended",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
          { name: "IsFeaturedProduct" },
        ]
      },
    ]
  });
};
