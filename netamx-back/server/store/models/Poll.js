const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Poll', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    LanguageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Language',
        key: 'Id'
      }
    },
    SystemKeyword: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Published: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ShowOnHomepage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AllowGuestsToVote: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LimitedToStores: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    StartDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Poll',
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
        name: "IX_ED22A23331718AB1C4E03DC35EE6CE7A772786E8",
        using: "BTREE",
        fields: [
          { name: "LanguageId" },
        ]
      },
    ]
  });
};
