const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StorePickupPoint', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AddressId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PickupFee: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    OpeningHours: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Latitude: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Longitude: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    TransitDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StorePickupPoint',
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
