const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Forums_PrivateMessage', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Subject: {
      type: DataTypes.STRING(450),
      allowNull: false
    },
    Text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    FromCustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'Id'
      }
    },
    ToCustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'Id'
      }
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsRead: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsDeletedByAuthor: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsDeletedByRecipient: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Forums_PrivateMessage',
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
        name: "IX_F8737CF614F9242F33B0595B2D1875CFC7FEF892",
        using: "BTREE",
        fields: [
          { name: "FromCustomerId" },
        ]
      },
      {
        name: "IX_BEEA04738B03E1F4C529C32C0403C6C812F20E7C",
        using: "BTREE",
        fields: [
          { name: "ToCustomerId" },
        ]
      },
    ]
  });
};
