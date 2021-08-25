const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ActivityLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IpAddress: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    EntityName: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    ActivityLogTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ActivityLogType',
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
    EntityId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ActivityLog',
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
        name: "IX_FA05048FC292BA387AD9F54569223A2361D29543",
        using: "BTREE",
        fields: [
          { name: "ActivityLogTypeId" },
        ]
      },
      {
        name: "IX_0F273FFBCE7BB550E87EADE8C0D4FE78CEA4F21A",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IX_ActivityLog_CreatedOnUtc",
        using: "BTREE",
        fields: [
          { name: "CreatedOnUtc" },
        ]
      },
    ]
  });
};
