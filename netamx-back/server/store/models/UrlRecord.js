const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UrlRecord', {
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
    Slug: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    EntityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LanguageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'UrlRecord',
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
        name: "IX_UrlRecord_Slug",
        using: "BTREE",
        fields: [
          { name: "Slug" },
        ]
      },
      {
        name: "IX_UrlRecord_Custom_1",
        using: "BTREE",
        fields: [
          { name: "EntityId" },
          { name: "EntityName" },
          { name: "LanguageId" },
          { name: "IsActive" },
        ]
      },
    ]
  });
};
