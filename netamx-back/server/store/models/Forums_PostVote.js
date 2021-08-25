const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Forums_PostVote', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ForumPostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Forums_Post',
        key: 'Id'
      }
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsUp: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Forums_PostVote',
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
        name: "IX_CE01D00491CDDF94D755273812C89769B8A6D72D",
        using: "BTREE",
        fields: [
          { name: "ForumPostId" },
        ]
      },
    ]
  });
};
