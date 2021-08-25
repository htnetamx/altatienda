const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Country', {
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
    TwoLetterIsoCode: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ThreeLetterIsoCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    AllowsBilling: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AllowsShipping: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    NumericIsoCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SubjectToVat: {
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
    LimitedToStores: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Country',
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
        name: "IX_Country_DisplayOrder",
        using: "BTREE",
        fields: [
          { name: "DisplayOrder" },
        ]
      },
    ]
  });
};
