const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Download', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DownloadGuid: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    UseDownloadUrl: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DownloadUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DownloadBinary: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    ContentType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Filename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsNew: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Download',
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
