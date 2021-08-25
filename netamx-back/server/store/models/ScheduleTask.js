const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScheduleTask', {
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
    Type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Seconds: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    StopOnError: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LastStartUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastEndUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastSuccessUtc: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ScheduleTask',
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
