const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product_ProductTag_Mapping', {
    Product_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Product',
        key: 'Id'
      }
    },
    ProductTag_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ProductTag',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Product_ProductTag_Mapping',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Product_Id" },
          { name: "ProductTag_Id" },
        ]
      },
      {
        name: "IX_5F850DC84A298A0021177DFFE6DA6AF5A8BA529D",
        using: "BTREE",
        fields: [
          { name: "Product_Id" },
        ]
      },
      {
        name: "IX_5A62FE7519887322703971B07D62C2648D56BDEB",
        using: "BTREE",
        fields: [
          { name: "ProductTag_Id" },
        ]
      },
    ]
  });
};
