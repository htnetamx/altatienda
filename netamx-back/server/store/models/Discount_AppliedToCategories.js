const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Discount_AppliedToCategories', {
    Discount_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Discount',
        key: 'Id'
      }
    },
    Category_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Category',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Discount_AppliedToCategories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Discount_Id" },
          { name: "Category_Id" },
        ]
      },
      {
        name: "IX_3B15D52F81BDC47B279B9DD028BD1445B9A462F7",
        using: "BTREE",
        fields: [
          { name: "Discount_Id" },
        ]
      },
      {
        name: "IX_49CBAA99A1E2A276261D82400D383E5FE727C172",
        using: "BTREE",
        fields: [
          { name: "Category_Id" },
        ]
      },
    ]
  });
};
