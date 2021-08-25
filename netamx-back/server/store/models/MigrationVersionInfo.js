const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MigrationVersionInfo', {
    Version: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    AppliedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MigrationVersionInfo',
    timestamps: false,
    indexes: [
      {
        name: "UC_Version",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Version" },
        ]
      },
    ]
  });
};
