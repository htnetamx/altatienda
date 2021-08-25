const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Picture', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MimeType: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    SeoFilename: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    AltAttribute: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TitleAttribute: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsNew: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    VirtualPath: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Picture',
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
