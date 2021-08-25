const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BlogPost', {
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
    Body: {
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
    IncludeInSitemap: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    BodyOverview: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AllowComments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Tags: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StartDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MetaDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LimitedToStores: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'BlogPost',
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
        name: "IX_EFC2F432AA3D91D9D6E18EDFF06769FF1B7D5CD8",
        using: "BTREE",
        fields: [
          { name: "LanguageId" },
        ]
      },
    ]
  });
};
