const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReviewType', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VisibleToAllCustomers: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ReviewType',
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
