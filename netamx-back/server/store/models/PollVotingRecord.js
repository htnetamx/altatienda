const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PollVotingRecord', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PollAnswerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PollAnswer',
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
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PollVotingRecord',
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
        name: "IX_623CFDF34577171DD8C2C47A6F2A473E1BD97E4F",
        using: "BTREE",
        fields: [
          { name: "PollAnswerId" },
        ]
      },
      {
        name: "IX_0076E1ECE40F941D4C0E2C14BFD3E8385771812D",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
    ]
  });
};
