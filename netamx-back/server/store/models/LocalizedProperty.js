const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LocalizedProperty', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LocaleKeyGroup: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    LocaleKey: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    LocaleValue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    LanguageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Language',
        key: 'Id'
      }
    },
    EntityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'LocalizedProperty',
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
        name: "IX_DBC6F45E7AB497D690C477A31075255AF97FFBBF",
        using: "BTREE",
        fields: [
          { name: "LanguageId" },
        ]
      },
    ]
  });
};
