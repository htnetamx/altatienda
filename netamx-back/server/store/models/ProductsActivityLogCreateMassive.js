const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductsActivityLogCreateMassive', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdActivityLogCreateMassive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ActivityLogCreateMassive',
        key: 'Id'
      }
    },
    IdProducts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Product',
        key: 'Id'
      }
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Status: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    OldPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    NewPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ProductsActivityLogCreateMassive',
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
        name: "ProductsActivityLogCreateMassive_FK",
        using: "BTREE",
        fields: [
          { name: "IdActivityLogCreateMassive" },
        ]
      },
      {
        name: "ProductsActivityLogCreateMassive_FK_1",
        using: "BTREE",
        fields: [
          { name: "IdProducts" },
        ]
      },
    ]
  });
};
