const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Order', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomOrderNumber: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    BillingAddressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Address',
        key: 'Id'
      }
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'Id'
      }
    },
    PickupAddressId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Address',
        key: 'Id'
      }
    },
    ShippingAddressId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Address',
        key: 'Id'
      }
    },
    OrderGuid: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PickupInStore: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    OrderStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ShippingStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PaymentStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PaymentMethodSystemName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CustomerCurrencyCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CurrencyRate: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    CustomerTaxDisplayTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VatNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OrderSubtotalInclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    OrderSubtotalExclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    OrderSubTotalDiscountInclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    OrderSubTotalDiscountExclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    OrderShippingInclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    OrderShippingExclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    PaymentMethodAdditionalFeeInclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    PaymentMethodAdditionalFeeExclTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    TaxRates: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OrderTax: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    OrderDiscount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    OrderTotal: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    RefundedAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    RewardPointsHistoryEntryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'RewardPointsHistory',
        key: 'Id'
      }
    },
    CheckoutAttributeDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CheckoutAttributesXml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CustomerLanguageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AffiliateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CustomerIp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AllowStoringCreditCardNumber: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CardType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CardName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CardNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MaskedCreditCardNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CardCvv2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CardExpirationMonth: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CardExpirationYear: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AuthorizationTransactionId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AuthorizationTransactionCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AuthorizationTransactionResult: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CaptureTransactionId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CaptureTransactionResult: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SubscriptionTransactionId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PaidDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShippingMethod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ShippingRateComputationMethodSystemName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CustomValuesXml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    RedeemedRewardPointsEntryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Order',
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
        name: "IX_E7755CC7F881D5026F1484CD9F844657848310FB",
        using: "BTREE",
        fields: [
          { name: "BillingAddressId" },
        ]
      },
      {
        name: "IX_D4D583CDFB5B9FA861705763C89DE617044108E3",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IX_0E470D4A2077F13DD52B58146A78BB6D9FF598A3",
        using: "BTREE",
        fields: [
          { name: "PickupAddressId" },
        ]
      },
      {
        name: "IX_30A52D6385B52F71FB5EDB1D893B738E8549DE8B",
        using: "BTREE",
        fields: [
          { name: "ShippingAddressId" },
        ]
      },
      {
        name: "IX_Order_CreatedOnUtc",
        using: "BTREE",
        fields: [
          { name: "CreatedOnUtc" },
        ]
      },
      {
        name: "FK_E2B3006CB294B6FD2E08E9DB53E7296283CB8A61",
        using: "BTREE",
        fields: [
          { name: "RewardPointsHistoryEntryId" },
        ]
      },
    ]
  });
};
