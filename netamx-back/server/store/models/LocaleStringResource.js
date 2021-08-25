const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LocaleStringResource', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ResourceName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ResourceValue: {
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
    }
  }, {
    sequelize,
    tableName: 'LocaleStringResource',
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
        name: "IX_C902AB0FC6278AB50D88DBAAAE90B40D17CBE388",
        using: "BTREE",
        fields: [
          { name: "LanguageId" },
        ]
      },
      {
        name: "IX_LocaleStringResource",
        using: "BTREE",
        fields: [
          { name: "ResourceName" },
          { name: "LanguageId" },
        ]
      },
    ]
  });
};
