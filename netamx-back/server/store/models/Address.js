const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Address', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CountryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Country',
        key: 'Id'
      }
    },
    StateProvinceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'StateProvince',
        key: 'Id'
      }
    },
    FirstName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LastName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Company: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    County: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    City: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Address1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Address2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ZipPostalCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PhoneNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FaxNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CustomAttributes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Address',
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
        name: "IX_0318CCE12D3601D14FD4102212A47D530180466D",
        using: "BTREE",
        fields: [
          { name: "CountryId" },
        ]
      },
      {
        name: "IX_4A044E7C99A04BAA49E77199A91412218B24A8C4",
        using: "BTREE",
        fields: [
          { name: "StateProvinceId" },
        ]
      },
    ]
  });
};
