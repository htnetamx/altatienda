const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QueuedEmail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    From: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    FromName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    To: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    ToName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ReplyTo: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ReplyToName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CC: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Bcc: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Subject: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    EmailAccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EmailAccount',
        key: 'Id'
      }
    },
    PriorityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AttachmentFilePath: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AttachmentFileName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AttachedDownloadId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DontSendBeforeDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SentTries: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SentOnUtc: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QueuedEmail',
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
        name: "IX_EADE912948B576BF4259B7C4050DC339A54F63AE",
        using: "BTREE",
        fields: [
          { name: "EmailAccountId" },
        ]
      },
      {
        name: "IX_QueuedEmail_CreatedOnUtc",
        using: "BTREE",
        fields: [
          { name: "CreatedOnUtc" },
        ]
      },
      {
        name: "IX_QueuedEmail_SentOnUtc_DontSendBeforeDateUtc_Extended",
        using: "BTREE",
        fields: [
          { name: "SentOnUtc" },
          { name: "DontSendBeforeDateUtc" },
        ]
      },
    ]
  });
};
