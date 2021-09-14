const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Store', {
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
    Url: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    Hosts: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CompanyName: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CompanyAddress: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CompanyPhoneNumber: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CompanyVat: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SslEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DefaultLanguageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Longitud: {
      type: DataTypes.DECIMAL(20,15),
      allowNull: false
    },
    Latitud: {
      type: DataTypes.DECIMAL(20,15),
      allowNull: false
    },
    Hunter: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CompanyPhoneNumber2: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Delegacion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Colonia: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PlaceId: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    FormattedAddress: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Store',
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
