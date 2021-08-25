const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BlogComment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Store',
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
    BlogPostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'BlogPost',
        key: 'Id'
      }
    },
    CommentText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'BlogComment',
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
        name: "IX_9B64658D6D24EDEAB7F497D63D82313E0CCB64F5",
        using: "BTREE",
        fields: [
          { name: "StoreId" },
        ]
      },
      {
        name: "IX_610623902D397FF33F3287BF1345D7512C66145D",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IX_7EA6B2B4EAF446CC41EE99A3824A85C8190B57D0",
        using: "BTREE",
        fields: [
          { name: "BlogPostId" },
        ]
      },
    ]
  });
};
