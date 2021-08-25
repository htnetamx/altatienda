const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Forums_Forum', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ForumGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Forums_Group',
        key: 'Id'
      }
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NumTopics: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NumPosts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LastTopicId: {
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
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'Forums_Forum',
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
        name: "IX_8DCD3E5EEB323E614072D382CED0FDE15C28A20C",
        using: "BTREE",
        fields: [
          { name: "ForumGroupId" },
        ]
      },
      {
        name: "IX_Forums_Forum_DisplayOrder",
        using: "BTREE",
        fields: [
          { name: "DisplayOrder" },
        ]
      },
    ]
  });
};
