const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Hunter', {
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
    PhoneNumber: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Hunter',
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
