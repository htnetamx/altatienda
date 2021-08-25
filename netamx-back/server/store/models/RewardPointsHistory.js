const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RewardPointsHistory', {
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
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Points: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PointsBalance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UsedAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    Message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EndDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ValidPoints: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UsedWithOrder: {
      type: DataTypes.CHAR(36),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RewardPointsHistory',
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
        name: "IX_60F9BB409B5074CAA77093426EBEF6A510194A0A",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
    ]
  });
};
