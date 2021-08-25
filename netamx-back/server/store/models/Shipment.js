const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shipment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'Id'
      }
    },
    TrackingNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TotalWeight: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    ShippedDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeliveryDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AdminComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Shipment',
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
        name: "IX_D7D61795361B29A6E41BFFB60A36B99CE2E77A50",
        using: "BTREE",
        fields: [
          { name: "OrderId" },
        ]
      },
    ]
  });
};
