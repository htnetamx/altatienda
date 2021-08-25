const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Forums_Post', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IPAddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'Id'
      }
    },
    TopicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Forums_Topic',
        key: 'Id'
      }
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    VoteCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Forums_Post',
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
        name: "IX_66346A7D2B56A00742967506FC5896A954702923",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IX_BB7E36F50844E72B331791A9096CADB5DBFBA6C3",
        using: "BTREE",
        fields: [
          { name: "TopicId" },
        ]
      },
    ]
  });
};
