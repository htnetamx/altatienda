const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PermissionRecord_Role_Mapping', {
    PermissionRecord_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PermissionRecord',
        key: 'Id'
      }
    },
    CustomerRole_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CustomerRole',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'PermissionRecord_Role_Mapping',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PermissionRecord_Id" },
          { name: "CustomerRole_Id" },
        ]
      },
      {
        name: "IX_998C4F8A5D91E3E4FDC76D88B167DE40A75A3259",
        using: "BTREE",
        fields: [
          { name: "PermissionRecord_Id" },
        ]
      },
      {
        name: "IX_E7B19180C681C3B292B2234BF89F7F3FB62264BF",
        using: "BTREE",
        fields: [
          { name: "CustomerRole_Id" },
        ]
      },
    ]
  });
};
