const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    MetaKeywords: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    MetaTitle: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    Sku: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    ManufacturerPartNumber: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    Gtin: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    RequiredProductIds: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    AllowedQuantities: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ProductTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ParentGroupedProductId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VisibleIndividually: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ShortDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FullDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AdminComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ProductTemplateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VendorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ShowOnHomepage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    MetaDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AllowCustomerReviews: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ApprovedRatingSum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NotApprovedRatingSum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ApprovedTotalReviews: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NotApprovedTotalReviews: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SubjectToAcl: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LimitedToStores: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsGiftCard: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    GiftCardTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OverriddenGiftCardAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    RequireOtherProducts: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AutomaticallyAddRequiredProducts: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsDownload: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DownloadId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UnlimitedDownloads: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    MaxNumberOfDownloads: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DownloadExpirationDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DownloadActivationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HasSampleDownload: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    SampleDownloadId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HasUserAgreement: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    UserAgreementText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsRecurring: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    RecurringCycleLength: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RecurringCyclePeriodId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RecurringTotalCycles: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsRental: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    RentalPriceLength: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RentalPricePeriodId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsShipEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsFreeShipping: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ShipSeparately: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AdditionalShippingCharge: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    DeliveryDateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsTaxExempt: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TaxCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsTelecommunicationsOrBroadcastingOrElectronicServices: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ManageInventoryMethodId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProductAvailabilityRangeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UseMultipleWarehouses: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    WarehouseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DisplayStockAvailability: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisplayStockQuantity: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    MinStockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LowStockActivityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NotifyAdminForQuantityBelow: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BackorderModeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AllowBackInStockSubscriptions: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    OrderMinimumQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OrderMaximumQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AllowAddingOnlyExistingAttributeCombinations: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    NotReturnable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisableBuyButton: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DisableWishlistButton: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AvailableForPreOrder: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PreOrderAvailabilityStartDateTimeUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CallForPrice: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    OldPrice: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    ProductCost: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    CustomerEntersPrice: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    MinimumCustomerEnteredPrice: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    MaximumCustomerEnteredPrice: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    BasepriceEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    BasepriceAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    BasepriceUnitId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BasepriceBaseAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    BasepriceBaseUnitId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MarkAsNew: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    MarkAsNewStartDateTimeUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MarkAsNewEndDateTimeUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HasTierPrices: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    HasDiscountsApplied: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Weight: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    Length: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    Width: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    Height: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    AvailableStartDateTimeUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AvailableEndDateTimeUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Published: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdatedOnUtc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PerTaras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    Deprecated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    },
    IsPromotionProduct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    },
    IdActivityLogCreateMassive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ActivityLogCreateMassive',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Product',
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
        name: "IX_Product_PriceDatesEtc",
        using: "BTREE",
        fields: [
          { name: "Price" },
          { name: "AvailableStartDateTimeUtc" },
          { name: "AvailableEndDateTimeUtc" },
          { name: "Published" },
          { name: "Deleted" },
        ]
      },
      {
        name: "IX_Product_Deleted_and_Published",
        using: "BTREE",
        fields: [
          { name: "Published" },
          { name: "Deleted" },
        ]
      },
      {
        name: "IX_Product_Published",
        using: "BTREE",
        fields: [
          { name: "Published" },
        ]
      },
      {
        name: "IX_Product_ShowOnHomepage",
        using: "BTREE",
        fields: [
          { name: "ShowOnHomepage" },
        ]
      },
      {
        name: "IX_Product_ParentGroupedProductId",
        using: "BTREE",
        fields: [
          { name: "ParentGroupedProductId" },
        ]
      },
      {
        name: "IX_Product_VisibleIndividually",
        using: "BTREE",
        fields: [
          { name: "VisibleIndividually" },
        ]
      },
      {
        name: "IX_Product_LimitedToStores",
        using: "BTREE",
        fields: [
          { name: "LimitedToStores" },
        ]
      },
      {
        name: "IX_Product_SubjectToAcl",
        using: "BTREE",
        fields: [
          { name: "SubjectToAcl" },
        ]
      },
      {
        name: "IX_Product_Delete_Id",
        using: "BTREE",
        fields: [
          { name: "Deleted" },
          { name: "Id" },
        ]
      },
      {
        name: "IX_GetLowStockProducts",
        using: "BTREE",
        fields: [
          { name: "Deleted" },
          { name: "VendorId" },
          { name: "ProductTypeId" },
          { name: "ManageInventoryMethodId" },
          { name: "MinStockQuantity" },
          { name: "UseMultipleWarehouses" },
        ]
      },
      {
        name: "IX_Product_VisibleIndividually_Published_Deleted_Extended",
        using: "BTREE",
        fields: [
          { name: "VisibleIndividually" },
          { name: "Published" },
          { name: "Deleted" },
        ]
      },
      {
        name: "Product_FK",
        using: "BTREE",
        fields: [
          { name: "IdActivityLogCreateMassive" },
        ]
      },
    ]
  });
};
