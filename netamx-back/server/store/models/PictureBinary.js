const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PictureBinary', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PictureId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Picture',
        key: 'Id'
      }
    },
    BinaryData: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PictureBinary',
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
        name: "IX_E19B7EA10CC9EEDC673118A073359DDDD6E23D5E",
        using: "BTREE",
        fields: [
          { name: "PictureId" },
        ]
      },
    ]
  });
};
