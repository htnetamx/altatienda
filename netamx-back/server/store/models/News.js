const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('News', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Short: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Full: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    MetaKeywords: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    MetaTitle: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    LanguageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Language',
        key: 'Id'
      }
    },
    Published: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    StartDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AllowComments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LimitedToStores: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    MetaDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'News',
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
        name: "IX_7F02E3C278A944BE59537727A19FEA3A6855AE27",
        using: "BTREE",
        fields: [
          { name: "LanguageId" },
        ]
      },
    ]
  });
};
