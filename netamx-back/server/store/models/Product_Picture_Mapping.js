const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product_Picture_Mapping', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PictureId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Picture',
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
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Product_Picture_Mapping',
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
        name: "IX_1151378E30052BEAC16DB55D3E56D8D6A857FB02",
        using: "BTREE",
        fields: [
          { name: "PictureId" },
        ]
      },
      {
        name: "IX_0A76F88D5B36EE11752798CC1AEC887B119395D8",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
    ]
  });
};
