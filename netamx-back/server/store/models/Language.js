const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Language', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    LanguageCulture: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    UniqueSeoCode: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FlagImageFileName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Rtl: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LimitedToStores: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DefaultCurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Published: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Language',
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
        name: "IX_Language_DisplayOrder",
        using: "BTREE",
        fields: [
          { name: "DisplayOrder" },
        ]
      },
    ]
  });
};
