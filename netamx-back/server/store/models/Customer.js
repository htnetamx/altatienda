const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Username: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    EmailToRevalidate: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SystemName: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    BillingAddress_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Address',
        key: 'Id'
      }
    },
    ShippingAddress_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Address',
        key: 'Id'
      }
    },
    CustomerGuid: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    AdminComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsTaxExempt: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AffiliateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VendorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HasShoppingCartItems: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    RequireReLogin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    FailedLoginAttempts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CannotLoginUntilDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsSystemAccount: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LastIpAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastLoginDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastActivityDateUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    RegisteredInStoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Customer',
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
        name: "IX_79820CBB6A38BC446E7FC52E7582A458F3A2AC75",
        using: "BTREE",
        fields: [
          { name: "BillingAddress_Id" },
        ]
      },
      {
        name: "IX_5FD07AEA757DD98D3E04CA86906517868F44A287",
        using: "BTREE",
        fields: [
          { name: "ShippingAddress_Id" },
        ]
      },
      {
        name: "IX_Customer_Email",
        using: "BTREE",
        fields: [
          { name: "Email" },
        ]
      },
      {
        name: "IX_Customer_Username",
        using: "BTREE",
        fields: [
          { name: "Username" },
        ]
      },
      {
        name: "IX_Customer_CustomerGuid",
        using: "BTREE",
        fields: [
          { name: "CustomerGuid" },
        ]
      },
      {
        name: "IX_Customer_SystemName",
        using: "BTREE",
        fields: [
          { name: "SystemName" },
        ]
      },
      {
        name: "IX_Customer_CreatedOnUtc",
        using: "BTREE",
        fields: [
          { name: "CreatedOnUtc" },
        ]
      },
    ]
  });
};
