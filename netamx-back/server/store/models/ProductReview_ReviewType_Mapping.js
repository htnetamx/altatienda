const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductReview_ReviewType_Mapping', {
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
    ReviewTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ReviewType',
        key: 'Id'
      }
    },
    Rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductReview_ReviewType_Mapping',
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
        name: "IX_E6BD958D6D6A3B595249B1F2FB2836558198DBD6",
        using: "BTREE",
        fields: [
          { name: "ProductReviewId" },
        ]
      },
      {
        name: "IX_A80FB7B7F056FCA6FF7011C07E1DF0DB21DD2723",
        using: "BTREE",
        fields: [
          { name: "ReviewTypeId" },
        ]
      },
    ]
  });
};
