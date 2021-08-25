const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RelatedProduct', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductId1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProductId2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'RelatedProduct',
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
        name: "IX_RelatedProduct_ProductId1",
        using: "BTREE",
        fields: [
          { name: "ProductId1" },
        ]
      },
    ]
  });
};
