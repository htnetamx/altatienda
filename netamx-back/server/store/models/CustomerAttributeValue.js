const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerAttributeValue', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    CustomerAttributeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CustomerAttribute',
        key: 'Id'
      }
    },
    IsPreSelected: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CustomerAttributeValue',
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
        name: "IX_F42BE25FE6DC8F058A887BA1DEFB46198BC8D321",
        using: "BTREE",
        fields: [
          { name: "CustomerAttributeId" },
        ]
      },
    ]
  });
};
