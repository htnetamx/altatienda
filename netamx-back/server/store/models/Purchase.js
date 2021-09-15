const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Purchase', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SkuNeta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PurchasePrice: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    IVA: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Supplier: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IdSupplier: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Box: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CreateAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdateAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IdActivityLogCreateMassive: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdProduct: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PurchaseId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Purchase',
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
