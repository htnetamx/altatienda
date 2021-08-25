const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Topic', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SystemName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IncludeInSitemap: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IncludeInTopMenu: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IncludeInFooterColumn1: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IncludeInFooterColumn2: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IncludeInFooterColumn3: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AccessibleWhenStoreClosed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsPasswordProtected: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Published: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TopicTemplateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MetaKeywords: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MetaDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MetaTitle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SubjectToAcl: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LimitedToStores: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Topic',
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
    ]
  });
};
