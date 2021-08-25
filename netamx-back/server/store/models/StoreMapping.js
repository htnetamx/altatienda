const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StoreMapping', {
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
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Store',
        key: 'Id'
      }
    },
    EntityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'StoreMapping',
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
        name: "IX_FC249F594D98DD91961F5A358D8544703BE6E138",
        using: "BTREE",
        fields: [
          { name: "StoreId" },
        ]
      },
      {
        name: "IX_StoreMapping_EntityId_EntityName",
        using: "BTREE",
        fields: [
          { name: "EntityId" },
          { name: "EntityName" },
        ]
      },
    ]
  });
};
