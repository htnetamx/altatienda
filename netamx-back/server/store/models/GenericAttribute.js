const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GenericAttribute', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KeyGroup: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    Key: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    Value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    EntityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedOrUpdatedDateUTC: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GenericAttribute',
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
        name: "IX_GenericAttribute_EntityId_and_KeyGroup",
        using: "BTREE",
        fields: [
          { name: "EntityId" },
          { name: "KeyGroup" },
        ]
      },
    ]
  });
};
