const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Campaign', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Subject: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CustomerRoleId: {
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
    }
  }, {
    sequelize,
    tableName: 'Campaign',
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
