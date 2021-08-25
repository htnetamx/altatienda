const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Currency', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CurrencyCode: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    DisplayLocale: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CustomFormatting: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,4),
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
    RoundingTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Currency',
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
        name: "IX_Currency_DisplayOrder",
        using: "BTREE",
        fields: [
          { name: "DisplayOrder" },
        ]
      },
    ]
  });
};
