const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewsComment', {
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
    NewsItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'News',
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
    CommentTitle: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'NewsComment',
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
        name: "IX_FEA2E6F746138EB2B8393B8661D8A9091FBC9A46",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IX_4327C9836AB73A3FD882D71C073014C5DF40D484",
        using: "BTREE",
        fields: [
          { name: "NewsItemId" },
        ]
      },
      {
        name: "IX_BDAB1EFC98942D6D41898F6649AC03B2FBDA57E4",
        using: "BTREE",
        fields: [
          { name: "StoreId" },
        ]
      },
    ]
  });
};
