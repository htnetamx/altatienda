const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductReview', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
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
      allowNull: false,
      references: {
        model: 'Store',
        key: 'Id'
      }
    },
    IsApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReviewText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReplyText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CustomerNotifiedOfReply: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HelpfulYesTotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HelpfulNoTotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductReview',
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
        name: "IX_34DF548025246734401C64D1904FDC5119A405CC",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IX_C3A2EB2CAD92A0F3C47CCA524FD2848BC0026B81",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
      {
        name: "IX_CCA2A4F066E9F5700F1C5792E4F4D96B78E887D6",
        using: "BTREE",
        fields: [
          { name: "StoreId" },
        ]
      },
    ]
  });
};
