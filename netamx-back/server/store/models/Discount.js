const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Discount', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    CouponCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AdminComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DiscountTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UsePercentage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DiscountPercentage: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    DiscountAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    MaximumDiscountAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    StartDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RequiresCouponCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsCumulative: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DiscountLimitationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LimitationTimes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MaximumDiscountedQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AppliedToSubCategories: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Discount',
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
