const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GiftCard', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PurchasedWithOrderItemId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'OrderItem',
        key: 'Id'
      }
    },
    GiftCardTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    IsGiftCardActivated: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    GiftCardCouponCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RecipientName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RecipientEmail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SenderName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SenderEmail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsRecipientNotified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GiftCard',
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
        name: "IX_E753BB83C0D47CD444B41734828D6CE31BDA4547",
        using: "BTREE",
        fields: [
          { name: "PurchasedWithOrderItemId" },
        ]
      },
    ]
  });
};
