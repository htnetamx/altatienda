const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SpecificationAttribute', {
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
    SpecificationAttributeGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SpecificationAttributeGroup',
        key: 'Id'
      }
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SpecificationAttribute',
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
        name: "IX_A448A454CD518AB0B594506AF5062542BBA79170",
        using: "BTREE",
        fields: [
          { name: "SpecificationAttributeGroupId" },
        ]
      },
    ]
  });
};
