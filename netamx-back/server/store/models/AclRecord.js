const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AclRecord', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EntityName: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    CustomerRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CustomerRole',
        key: 'Id'
      }
    },
    EntityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AclRecord',
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
        name: "IX_02F617482C79A6C2BE7A0C8A6455B2E8E14780EC",
        using: "BTREE",
        fields: [
          { name: "CustomerRoleId" },
        ]
      },
      {
        name: "IX_AclRecord_EntityId_EntityName",
        using: "BTREE",
        fields: [
          { name: "EntityId" },
          { name: "EntityName" },
        ]
      },
    ]
  });
};
