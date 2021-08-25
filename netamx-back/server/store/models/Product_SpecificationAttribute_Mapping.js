const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product_SpecificationAttribute_Mapping', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomValue: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'Id'
      }
    },
    SpecificationAttributeOptionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SpecificationAttributeOption',
        key: 'Id'
      }
    },
    AttributeTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AllowFiltering: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ShowOnProductPage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Product_SpecificationAttribute_Mapping',
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
        name: "IX_6E3598F36D97BFA8D2B1DA6A2D670FA36334106B",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
      {
        name: "IX_EE669865DEDFD7AEFB45F2F89EF1E442329254F3",
        using: "BTREE",
        fields: [
          { name: "SpecificationAttributeOptionId" },
        ]
      },
      {
        name: "IX_PSAM_AllowFiltering",
        using: "BTREE",
        fields: [
          { name: "AllowFiltering" },
        ]
      },
      {
        name: "IX_PSAM_SpecificationAttributeOptionId_AllowFiltering",
        using: "BTREE",
        fields: [
          { name: "SpecificationAttributeOptionId" },
          { name: "AllowFiltering" },
        ]
      },
    ]
  });
};
