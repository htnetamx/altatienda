const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductReviewHelpfulness', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductReviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ProductReview',
        key: 'Id'
      }
    },
    WasHelpful: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductReviewHelpfulness',
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
        name: "IX_7528780A72E711ED59C639ABE6F5E79394EFC9C8",
        using: "BTREE",
        fields: [
          { name: "ProductReviewId" },
        ]
      },
    ]
  });
};
