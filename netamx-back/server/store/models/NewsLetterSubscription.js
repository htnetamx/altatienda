const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewsLetterSubscription', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    NewsLetterSubscriptionGuid: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'NewsLetterSubscription',
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
        name: "IX_NewsletterSubscription_Email_StoreId",
        using: "BTREE",
        fields: [
          { name: "Email" },
          { name: "StoreId" },
        ]
      },
    ]
  });
};
