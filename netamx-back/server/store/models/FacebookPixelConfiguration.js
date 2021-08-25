const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FacebookPixelConfiguration', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PixelId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisableForUsersNotAcceptingCookieConsent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PassUserProperties: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    UseAdvancedMatching: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TrackPageView: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TrackAddToCart: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TrackPurchase: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TrackViewContent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TrackAddToWishlist: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TrackInitiateCheckout: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TrackSearch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TrackContact: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TrackCompleteRegistration: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CustomEvents: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FacebookPixelConfiguration',
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
