const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GdprConsent', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IsRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    RequiredMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DisplayDuringRegistration: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOnCustomerInfoPage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GdprConsent',
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
