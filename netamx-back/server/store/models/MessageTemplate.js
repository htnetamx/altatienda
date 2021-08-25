const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MessageTemplate', {
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
    BccEmailAddresses: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Subject: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    EmailAccountId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DelayBeforeSend: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DelayPeriodId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AttachedDownloadId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LimitedToStores: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MessageTemplate',
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
    ]
  });
};
