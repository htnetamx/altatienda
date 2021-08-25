const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SpecificationAttributeOption', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ColorSquaresRgb: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SpecificationAttributeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SpecificationAttribute',
        key: 'Id'
      }
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SpecificationAttributeOption',
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
        name: "IX_20CA206E1041B61FFB1739DEAB2C2134475DBA4B",
        using: "BTREE",
        fields: [
          { name: "SpecificationAttributeId" },
        ]
      },
    ]
  });
};
