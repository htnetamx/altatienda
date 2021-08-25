const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ExternalAuthenticationRecord', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'Id'
      }
    },
    Email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ExternalIdentifier: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ExternalDisplayIdentifier: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OAuthToken: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OAuthAccessToken: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ProviderSystemName: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ExternalAuthenticationRecord',
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
        name: "IX_6D54D5251B1D23560C6CCB69543958292FE936DC",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
    ]
  });
};
