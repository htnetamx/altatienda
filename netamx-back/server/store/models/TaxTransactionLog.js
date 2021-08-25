const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxTransactionLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StatusCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RequestMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ResponseMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedDateUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TaxTransactionLog',
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
