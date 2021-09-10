const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderItemStatusHistory', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TypeStatusOrderItemId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TypeStatusOrderItem',
        key: 'Id'
      }
    },
    OrderItemId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'OrderItem',
        key: 'Id'
      }
    },
    CreatedAtUTC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Active: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ActivityLogMassiveId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ActivityLogCreateMassive',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'OrderItemStatusHistory',
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
        name: "OrderItemStatusHistory_FK",
        using: "BTREE",
        fields: [
          { name: "OrderItemId" },
        ]
      },
      {
        name: "OrderItemStatusHistory_FK_1",
        using: "BTREE",
        fields: [
          { name: "TypeStatusOrderItemId" },
        ]
      },
      {
        name: "OrderItemStatusHistory_FK_2",
        using: "BTREE",
        fields: [
          { name: "ActivityLogMassiveId" },
        ]
      },
    ]
  });
};
