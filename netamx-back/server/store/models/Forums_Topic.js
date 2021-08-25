const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Forums_Topic', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Subject: {
      type: DataTypes.STRING(450),
      allowNull: false
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'Id'
      }
    },
    ForumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Forums_Forum',
        key: 'Id'
      }
    },
    TopicTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NumPosts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Views: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LastPostId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LastPostCustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LastPostTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Forums_Topic',
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
        name: "IX_DDBC009BDA798D5E86F200A619BAEFEE2780A562",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IX_74331CDF3DC43C580490017D2FF9557D66C6AF3C",
        using: "BTREE",
        fields: [
          { name: "ForumId" },
        ]
      },
    ]
  });
};
