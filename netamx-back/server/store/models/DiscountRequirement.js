const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DiscountRequirement', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DiscountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Discount',
        key: 'Id'
      }
    },
    ParentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'DiscountRequirement',
        key: 'Id'
      }
    },
    DiscountRequirementRuleSystemName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    InteractionTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsGroup: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DiscountRequirement',
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
        name: "IX_B38979C2C3C47F2E4B698BDA6D236ECB9332F896",
        using: "BTREE",
        fields: [
          { name: "DiscountId" },
        ]
      },
      {
        name: "IX_D506930CC015664811ECD666E873DB3A56442AC7",
        using: "BTREE",
        fields: [
          { name: "ParentId" },
        ]
      },
    ]
  });
};
