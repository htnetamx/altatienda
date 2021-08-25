const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vendor', {
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
    Email: {
      type: DataTypes.STRING(400),
      allowNull: true
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
    PictureId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AddressId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AdminComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Active: {
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
    MetaDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PageSize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AllowCustomersToSelectPageSize: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'Vendor',
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
