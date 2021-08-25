const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RecurringPayment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    InitialOrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'Id'
      }
    },
    CycleLength: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CyclePeriodId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TotalCycles: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StartDateUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LastPaymentFailed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'RecurringPayment',
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
        name: "IX_BE0E46A4D4C7979A25335958B1321179F95A9263",
        using: "BTREE",
        fields: [
          { name: "InitialOrderId" },
        ]
      },
    ]
  });
};
