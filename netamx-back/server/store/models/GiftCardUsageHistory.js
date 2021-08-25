const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GiftCardUsageHistory', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GiftCardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'GiftCard',
        key: 'Id'
      }
    },
    UsedWithOrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'Id'
      }
    },
    UsedValue: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GiftCardUsageHistory',
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
        name: "IX_8D5FE9820B51CCB45277D64FC6E52C55CDEB59CF",
        using: "BTREE",
        fields: [
          { name: "GiftCardId" },
        ]
      },
      {
        name: "IX_2DDA907C9212253D7148AA484EFC08F8DB11DBB9",
        using: "BTREE",
        fields: [
          { name: "UsedWithOrderId" },
        ]
      },
    ]
  });
};
