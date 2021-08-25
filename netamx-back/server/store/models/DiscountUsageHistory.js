const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DiscountUsageHistory', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DiscountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Discount',
        key: 'Id'
      }
    },
    OrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'Id'
      }
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DiscountUsageHistory',
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
        name: "IX_8F03BAA695B2105F0748CD33C1C69257A187A6AC",
        using: "BTREE",
        fields: [
          { name: "DiscountId" },
        ]
      },
      {
        name: "IX_90D4BA0B388CAF5150F27E1D9F2781A06F77284E",
        using: "BTREE",
        fields: [
          { name: "OrderId" },
        ]
      },
    ]
  });
};
