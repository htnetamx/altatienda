const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RecurringPaymentHistory', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RecurringPaymentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'RecurringPayment',
        key: 'Id'
      }
    },
    OrderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'RecurringPaymentHistory',
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
        name: "IX_F15784D9E7C2AA49EAB3905620E308A649587B16",
        using: "BTREE",
        fields: [
          { name: "RecurringPaymentId" },
        ]
      },
    ]
  });
};
