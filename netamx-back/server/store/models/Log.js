const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ShortMessage: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IpAddress: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Customer',
        key: 'Id'
      }
    },
    LogLevelId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FullMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PageUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReferrerUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Log',
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
        name: "IX_E09C290A319BBF71BAEA063D33F45A248F16B85E",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IX_Log_CreatedOnUtc",
        using: "BTREE",
        fields: [
          { name: "CreatedOnUtc" },
        ]
      },
    ]
  });
};
