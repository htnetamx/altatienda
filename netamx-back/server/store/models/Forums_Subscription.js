const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Forums_Subscription', {
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
    SubscriptionGuid: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    ForumId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TopicId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Forums_Subscription',
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
        name: "IX_04445AF7F58A268687EF7EFAF57B1E4692C90756",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IX_Forums_Subscription_ForumId",
        using: "BTREE",
        fields: [
          { name: "ForumId" },
        ]
      },
      {
        name: "IX_Forums_Subscription_TopicId",
        using: "BTREE",
        fields: [
          { name: "TopicId" },
        ]
      },
    ]
  });
};
