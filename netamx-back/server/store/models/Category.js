const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(400),
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
    PageSizeOptions: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CategoryTemplateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MetaDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ParentCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PictureId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PageSize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AllowCustomersToSelectPageSize: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ShowOnHomepage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IncludeInTopMenu: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    SubjectToAcl: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LimitedToStores: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Published: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PriceRangeFiltering: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PriceFrom: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    PriceTo: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    ManuallyPriceRange: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Category',
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
        name: "IX_Category_DisplayOrder",
        using: "BTREE",
        fields: [
          { name: "DisplayOrder" },
        ]
      },
      {
        name: "IX_Category_ParentCategoryId",
        using: "BTREE",
        fields: [
          { name: "ParentCategoryId" },
        ]
      },
      {
        name: "IX_Category_LimitedToStores",
        using: "BTREE",
        fields: [
          { name: "LimitedToStores" },
        ]
      },
      {
        name: "IX_Category_SubjectToAcl",
        using: "BTREE",
        fields: [
          { name: "SubjectToAcl" },
        ]
      },
      {
        name: "IX_Category_Deleted_Extended",
        using: "BTREE",
        fields: [
          { name: "Deleted" },
        ]
      },
    ]
  });
};
