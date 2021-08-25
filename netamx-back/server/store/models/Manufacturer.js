const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Manufacturer', {
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
    ManufacturerTemplateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MetaDescription: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'Manufacturer',
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
        name: "IX_Manufacturer_DisplayOrder",
        using: "BTREE",
        fields: [
          { name: "DisplayOrder" },
        ]
      },
      {
        name: "IX_Manufacturer_LimitedToStores",
        using: "BTREE",
        fields: [
          { name: "LimitedToStores" },
        ]
      },
      {
        name: "IX_Manufacturer_SubjectToAcl",
        using: "BTREE",
        fields: [
          { name: "SubjectToAcl" },
        ]
      },
    ]
  });
};
