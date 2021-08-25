const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TierPrice', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerRoleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CustomerRole',
        key: 'Id'
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'Id'
      }
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    StartDateTimeUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndDateTimeUtc: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TierPrice',
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
        name: "IX_D7FF9897F12FC9DE46D1D9AA52049475E05C6946",
        using: "BTREE",
        fields: [
          { name: "CustomerRoleId" },
        ]
      },
      {
        name: "IX_231B5005C419BF705692EE4AB5BBEF7EFFA20935",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
    ]
  });
};
