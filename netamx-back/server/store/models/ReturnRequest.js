const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReturnRequest', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReasonForReturn: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    RequestedAction: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'Id'
      }
    },
    CustomNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OrderItemId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CustomerComments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UploadedFileId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StaffNotes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReturnRequestStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ReturnRequest',
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
        name: "IX_6111E95274ADB34D717DB9F3FF6270CEC853028C",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
    ]
  });
};
