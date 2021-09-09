var DataTypes = require("sequelize").DataTypes;
var _AclRecord = require("./AclRecord");
var _ActivityLog = require("./ActivityLog");
var _ActivityLogCreateMassive = require("./ActivityLogCreateMassive");
var _ActivityLogType = require("./ActivityLogType");
var _Address = require("./Address");
var _AddressAttribute = require("./AddressAttribute");
var _AddressAttributeValue = require("./AddressAttributeValue");
var _Affiliate = require("./Affiliate");
var _BackInStockSubscription = require("./BackInStockSubscription");
var _BlogComment = require("./BlogComment");
var _BlogPost = require("./BlogPost");
var _Campaign = require("./Campaign");
var _Category = require("./Category");
var _CategoryTemplate = require("./CategoryTemplate");
var _CheckoutAttribute = require("./CheckoutAttribute");
var _CheckoutAttributeValue = require("./CheckoutAttributeValue");
var _Country = require("./Country");
var _CrossSellProduct = require("./CrossSellProduct");
var _Currency = require("./Currency");
var _Customer = require("./Customer");
var _CustomerAddresses = require("./CustomerAddresses");
var _CustomerAttribute = require("./CustomerAttribute");
var _CustomerAttributeValue = require("./CustomerAttributeValue");
var _CustomerPassword = require("./CustomerPassword");
var _CustomerRole = require("./CustomerRole");
var _Customer_CustomerRole_Mapping = require("./Customer_CustomerRole_Mapping");
var _DeliveryDate = require("./DeliveryDate");
var _Discount = require("./Discount");
var _DiscountRequirement = require("./DiscountRequirement");
var _DiscountUsageHistory = require("./DiscountUsageHistory");
var _Discount_AppliedToCategories = require("./Discount_AppliedToCategories");
var _Discount_AppliedToManufacturers = require("./Discount_AppliedToManufacturers");
var _Discount_AppliedToProducts = require("./Discount_AppliedToProducts");
var _Download = require("./Download");
var _EmailAccount = require("./EmailAccount");
var _ExternalAuthenticationRecord = require("./ExternalAuthenticationRecord");
var _FacebookPixelConfiguration = require("./FacebookPixelConfiguration");
var _Forums_Forum = require("./Forums_Forum");
var _Forums_Group = require("./Forums_Group");
var _Forums_Post = require("./Forums_Post");
var _Forums_PostVote = require("./Forums_PostVote");
var _Forums_PrivateMessage = require("./Forums_PrivateMessage");
var _Forums_Subscription = require("./Forums_Subscription");
var _Forums_Topic = require("./Forums_Topic");
var _GdprConsent = require("./GdprConsent");
var _GdprLog = require("./GdprLog");
var _GenericAttribute = require("./GenericAttribute");
var _GiftCard = require("./GiftCard");
var _GiftCardUsageHistory = require("./GiftCardUsageHistory");
var _GoogleAuthenticatorRecord = require("./GoogleAuthenticatorRecord");
var _Language = require("./Language");
var _LocaleStringResource = require("./LocaleStringResource");
var _LocalizedProperty = require("./LocalizedProperty");
var _Log = require("./Log");
var _LoginAttempts = require("./LoginAttempts");
var _Manufacturer = require("./Manufacturer");
var _ManufacturerTemplate = require("./ManufacturerTemplate");
var _MeasureDimension = require("./MeasureDimension");
var _MeasureWeight = require("./MeasureWeight");
var _MessageTemplate = require("./MessageTemplate");
var _MigrationVersionInfo = require("./MigrationVersionInfo");
var _News = require("./News");
var _NewsComment = require("./NewsComment");
var _NewsLetterSubscription = require("./NewsLetterSubscription");
var _Order = require("./Order");
var _OrderItem = require("./OrderItem");
var _OrderItemStatusHistory = require("./OrderItemStatusHistory");
var _OrderNote = require("./OrderNote");
var _PermissionRecord = require("./PermissionRecord");
var _PermissionRecord_Role_Mapping = require("./PermissionRecord_Role_Mapping");
var _Picture = require("./Picture");
var _PictureBinary = require("./PictureBinary");
var _Poll = require("./Poll");
var _PollAnswer = require("./PollAnswer");
var _PollVotingRecord = require("./PollVotingRecord");
var _PredefinedProductAttributeValue = require("./PredefinedProductAttributeValue");
var _Product = require("./Product");
var _ProductAttribute = require("./ProductAttribute");
var _ProductAttributeCombination = require("./ProductAttributeCombination");
var _ProductAttributeValue = require("./ProductAttributeValue");
var _ProductAvailabilityRange = require("./ProductAvailabilityRange");
var _ProductReview = require("./ProductReview");
var _ProductReviewHelpfulness = require("./ProductReviewHelpfulness");
var _ProductReview_ReviewType_Mapping = require("./ProductReview_ReviewType_Mapping");
var _ProductTag = require("./ProductTag");
var _ProductTemplate = require("./ProductTemplate");
var _ProductWarehouseInventory = require("./ProductWarehouseInventory");
var _Product_Category_Mapping = require("./Product_Category_Mapping");
var _Product_Manufacturer_Mapping = require("./Product_Manufacturer_Mapping");
var _Product_Picture_Mapping = require("./Product_Picture_Mapping");
var _Product_ProductAttribute_Mapping = require("./Product_ProductAttribute_Mapping");
var _Product_ProductTag_Mapping = require("./Product_ProductTag_Mapping");
var _Product_SpecificationAttribute_Mapping = require("./Product_SpecificationAttribute_Mapping");
var _ProductsActivityLogCreateMassive = require("./ProductsActivityLogCreateMassive");
var _Purchase = require("./Purchase");
var _QueuedEmail = require("./QueuedEmail");
var _RecurringPayment = require("./RecurringPayment");
var _RecurringPaymentHistory = require("./RecurringPaymentHistory");
var _RelatedProduct = require("./RelatedProduct");
var _ReturnRequest = require("./ReturnRequest");
var _ReturnRequestAction = require("./ReturnRequestAction");
var _ReturnRequestReason = require("./ReturnRequestReason");
var _ReviewType = require("./ReviewType");
var _RewardPointsHistory = require("./RewardPointsHistory");
var _Rol = require("./Rol");
var _ScheduleTask = require("./ScheduleTask");
var _SearchTerm = require("./SearchTerm");
var _Setting = require("./Setting");
var _Shipment = require("./Shipment");
var _ShipmentItem = require("./ShipmentItem");
var _ShippingByWeightByTotalRecord = require("./ShippingByWeightByTotalRecord");
var _ShippingMethod = require("./ShippingMethod");
var _ShippingMethodRestrictions = require("./ShippingMethodRestrictions");
var _ShoppingCartItem = require("./ShoppingCartItem");
var _SpecificationAttribute = require("./SpecificationAttribute");
var _SpecificationAttributeGroup = require("./SpecificationAttributeGroup");
var _SpecificationAttributeOption = require("./SpecificationAttributeOption");
var _StateProvince = require("./StateProvince");
var _StockQuantityHistory = require("./StockQuantityHistory");
var _Store = require("./Store");
var _StoreMapping = require("./StoreMapping");
var _StorePickupPoint = require("./StorePickupPoint");
var _Superheroe = require("./Superheroe");
var _TaxCategory = require("./TaxCategory");
var _TaxRate = require("./TaxRate");
var _TaxTransactionLog = require("./TaxTransactionLog");
var _TierPrice = require("./TierPrice");
var _Topic = require("./Topic");
var _TopicTemplate = require("./TopicTemplate");
var _TypeStatusOrderItem = require("./TypeStatusOrderItem");
var _UrlRecord = require("./UrlRecord");
var _Vendor = require("./Vendor");
var _VendorAttribute = require("./VendorAttribute");
var _VendorAttributeValue = require("./VendorAttributeValue");
var _VendorNote = require("./VendorNote");
var _Warehouse = require("./Warehouse");

function initModels(sequelize) {
  var AclRecord = _AclRecord(sequelize, DataTypes);
  var ActivityLog = _ActivityLog(sequelize, DataTypes);
  var ActivityLogCreateMassive = _ActivityLogCreateMassive(sequelize, DataTypes);
  var ActivityLogType = _ActivityLogType(sequelize, DataTypes);
  var Address = _Address(sequelize, DataTypes);
  var AddressAttribute = _AddressAttribute(sequelize, DataTypes);
  var AddressAttributeValue = _AddressAttributeValue(sequelize, DataTypes);
  var Affiliate = _Affiliate(sequelize, DataTypes);
  var BackInStockSubscription = _BackInStockSubscription(sequelize, DataTypes);
  var BlogComment = _BlogComment(sequelize, DataTypes);
  var BlogPost = _BlogPost(sequelize, DataTypes);
  var Campaign = _Campaign(sequelize, DataTypes);
  var Category = _Category(sequelize, DataTypes);
  var CategoryTemplate = _CategoryTemplate(sequelize, DataTypes);
  var CheckoutAttribute = _CheckoutAttribute(sequelize, DataTypes);
  var CheckoutAttributeValue = _CheckoutAttributeValue(sequelize, DataTypes);
  var Country = _Country(sequelize, DataTypes);
  var CrossSellProduct = _CrossSellProduct(sequelize, DataTypes);
  var Currency = _Currency(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var CustomerAddresses = _CustomerAddresses(sequelize, DataTypes);
  var CustomerAttribute = _CustomerAttribute(sequelize, DataTypes);
  var CustomerAttributeValue = _CustomerAttributeValue(sequelize, DataTypes);
  var CustomerPassword = _CustomerPassword(sequelize, DataTypes);
  var CustomerRole = _CustomerRole(sequelize, DataTypes);
  var Customer_CustomerRole_Mapping = _Customer_CustomerRole_Mapping(sequelize, DataTypes);
  var DeliveryDate = _DeliveryDate(sequelize, DataTypes);
  var Discount = _Discount(sequelize, DataTypes);
  var DiscountRequirement = _DiscountRequirement(sequelize, DataTypes);
  var DiscountUsageHistory = _DiscountUsageHistory(sequelize, DataTypes);
  var Discount_AppliedToCategories = _Discount_AppliedToCategories(sequelize, DataTypes);
  var Discount_AppliedToManufacturers = _Discount_AppliedToManufacturers(sequelize, DataTypes);
  var Discount_AppliedToProducts = _Discount_AppliedToProducts(sequelize, DataTypes);
  var Download = _Download(sequelize, DataTypes);
  var EmailAccount = _EmailAccount(sequelize, DataTypes);
  var ExternalAuthenticationRecord = _ExternalAuthenticationRecord(sequelize, DataTypes);
  var FacebookPixelConfiguration = _FacebookPixelConfiguration(sequelize, DataTypes);
  var Forums_Forum = _Forums_Forum(sequelize, DataTypes);
  var Forums_Group = _Forums_Group(sequelize, DataTypes);
  var Forums_Post = _Forums_Post(sequelize, DataTypes);
  var Forums_PostVote = _Forums_PostVote(sequelize, DataTypes);
  var Forums_PrivateMessage = _Forums_PrivateMessage(sequelize, DataTypes);
  var Forums_Subscription = _Forums_Subscription(sequelize, DataTypes);
  var Forums_Topic = _Forums_Topic(sequelize, DataTypes);
  var GdprConsent = _GdprConsent(sequelize, DataTypes);
  var GdprLog = _GdprLog(sequelize, DataTypes);
  var GenericAttribute = _GenericAttribute(sequelize, DataTypes);
  var GiftCard = _GiftCard(sequelize, DataTypes);
  var GiftCardUsageHistory = _GiftCardUsageHistory(sequelize, DataTypes);
  var GoogleAuthenticatorRecord = _GoogleAuthenticatorRecord(sequelize, DataTypes);
  var Language = _Language(sequelize, DataTypes);
  var LocaleStringResource = _LocaleStringResource(sequelize, DataTypes);
  var LocalizedProperty = _LocalizedProperty(sequelize, DataTypes);
  var Log = _Log(sequelize, DataTypes);
  var LoginAttempts = _LoginAttempts(sequelize, DataTypes);
  var Manufacturer = _Manufacturer(sequelize, DataTypes);
  var ManufacturerTemplate = _ManufacturerTemplate(sequelize, DataTypes);
  var MeasureDimension = _MeasureDimension(sequelize, DataTypes);
  var MeasureWeight = _MeasureWeight(sequelize, DataTypes);
  var MessageTemplate = _MessageTemplate(sequelize, DataTypes);
  var MigrationVersionInfo = _MigrationVersionInfo(sequelize, DataTypes);
  var News = _News(sequelize, DataTypes);
  var NewsComment = _NewsComment(sequelize, DataTypes);
  var NewsLetterSubscription = _NewsLetterSubscription(sequelize, DataTypes);
  var Order = _Order(sequelize, DataTypes);
  var OrderItem = _OrderItem(sequelize, DataTypes);
  var OrderItemStatusHistory = _OrderItemStatusHistory(sequelize, DataTypes);
  var OrderNote = _OrderNote(sequelize, DataTypes);
  var PermissionRecord = _PermissionRecord(sequelize, DataTypes);
  var PermissionRecord_Role_Mapping = _PermissionRecord_Role_Mapping(sequelize, DataTypes);
  var Picture = _Picture(sequelize, DataTypes);
  var PictureBinary = _PictureBinary(sequelize, DataTypes);
  var Poll = _Poll(sequelize, DataTypes);
  var PollAnswer = _PollAnswer(sequelize, DataTypes);
  var PollVotingRecord = _PollVotingRecord(sequelize, DataTypes);
  var PredefinedProductAttributeValue = _PredefinedProductAttributeValue(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var ProductAttribute = _ProductAttribute(sequelize, DataTypes);
  var ProductAttributeCombination = _ProductAttributeCombination(sequelize, DataTypes);
  var ProductAttributeValue = _ProductAttributeValue(sequelize, DataTypes);
  var ProductAvailabilityRange = _ProductAvailabilityRange(sequelize, DataTypes);
  var ProductReview = _ProductReview(sequelize, DataTypes);
  var ProductReviewHelpfulness = _ProductReviewHelpfulness(sequelize, DataTypes);
  var ProductReview_ReviewType_Mapping = _ProductReview_ReviewType_Mapping(sequelize, DataTypes);
  var ProductTag = _ProductTag(sequelize, DataTypes);
  var ProductTemplate = _ProductTemplate(sequelize, DataTypes);
  var ProductWarehouseInventory = _ProductWarehouseInventory(sequelize, DataTypes);
  var Product_Category_Mapping = _Product_Category_Mapping(sequelize, DataTypes);
  var Product_Manufacturer_Mapping = _Product_Manufacturer_Mapping(sequelize, DataTypes);
  var Product_Picture_Mapping = _Product_Picture_Mapping(sequelize, DataTypes);
  var Product_ProductAttribute_Mapping = _Product_ProductAttribute_Mapping(sequelize, DataTypes);
  var Product_ProductTag_Mapping = _Product_ProductTag_Mapping(sequelize, DataTypes);
  var Product_SpecificationAttribute_Mapping = _Product_SpecificationAttribute_Mapping(sequelize, DataTypes);
  var ProductsActivityLogCreateMassive = _ProductsActivityLogCreateMassive(sequelize, DataTypes);
  var Purchase = _Purchase(sequelize, DataTypes);
  var QueuedEmail = _QueuedEmail(sequelize, DataTypes);
  var RecurringPayment = _RecurringPayment(sequelize, DataTypes);
  var RecurringPaymentHistory = _RecurringPaymentHistory(sequelize, DataTypes);
  var RelatedProduct = _RelatedProduct(sequelize, DataTypes);
  var ReturnRequest = _ReturnRequest(sequelize, DataTypes);
  var ReturnRequestAction = _ReturnRequestAction(sequelize, DataTypes);
  var ReturnRequestReason = _ReturnRequestReason(sequelize, DataTypes);
  var ReviewType = _ReviewType(sequelize, DataTypes);
  var RewardPointsHistory = _RewardPointsHistory(sequelize, DataTypes);
  var Rol = _Rol(sequelize, DataTypes);
  var ScheduleTask = _ScheduleTask(sequelize, DataTypes);
  var SearchTerm = _SearchTerm(sequelize, DataTypes);
  var Setting = _Setting(sequelize, DataTypes);
  var Shipment = _Shipment(sequelize, DataTypes);
  var ShipmentItem = _ShipmentItem(sequelize, DataTypes);
  var ShippingByWeightByTotalRecord = _ShippingByWeightByTotalRecord(sequelize, DataTypes);
  var ShippingMethod = _ShippingMethod(sequelize, DataTypes);
  var ShippingMethodRestrictions = _ShippingMethodRestrictions(sequelize, DataTypes);
  var ShoppingCartItem = _ShoppingCartItem(sequelize, DataTypes);
  var SpecificationAttribute = _SpecificationAttribute(sequelize, DataTypes);
  var SpecificationAttributeGroup = _SpecificationAttributeGroup(sequelize, DataTypes);
  var SpecificationAttributeOption = _SpecificationAttributeOption(sequelize, DataTypes);
  var StateProvince = _StateProvince(sequelize, DataTypes);
  var StockQuantityHistory = _StockQuantityHistory(sequelize, DataTypes);
  var Store = _Store(sequelize, DataTypes);
  var StoreMapping = _StoreMapping(sequelize, DataTypes);
  var StorePickupPoint = _StorePickupPoint(sequelize, DataTypes);
  var Superheroe = _Superheroe(sequelize, DataTypes);
  var TaxCategory = _TaxCategory(sequelize, DataTypes);
  var TaxRate = _TaxRate(sequelize, DataTypes);
  var TaxTransactionLog = _TaxTransactionLog(sequelize, DataTypes);
  var TierPrice = _TierPrice(sequelize, DataTypes);
  var Topic = _Topic(sequelize, DataTypes);
  var TopicTemplate = _TopicTemplate(sequelize, DataTypes);
  var TypeStatusOrderItem = _TypeStatusOrderItem(sequelize, DataTypes);
  var UrlRecord = _UrlRecord(sequelize, DataTypes);
  var Vendor = _Vendor(sequelize, DataTypes);
  var VendorAttribute = _VendorAttribute(sequelize, DataTypes);
  var VendorAttributeValue = _VendorAttributeValue(sequelize, DataTypes);
  var VendorNote = _VendorNote(sequelize, DataTypes);
  var Warehouse = _Warehouse(sequelize, DataTypes);

  Address.belongsToMany(Customer, { as: 'Customers', through: CustomerAddresses, foreignKey: "Address_Id", otherKey: "Customer_Id" });
  Category.belongsToMany(Discount, { as: 'Discounts', through: Discount_AppliedToCategories, foreignKey: "Category_Id", otherKey: "Discount_Id" });
  Country.belongsToMany(ShippingMethod, { as: 'ShippingMethods', through: ShippingMethodRestrictions, foreignKey: "Country_Id", otherKey: "ShippingMethod_Id" });
  Customer.belongsToMany(Address, { as: 'Addresses', through: CustomerAddresses, foreignKey: "Customer_Id", otherKey: "Address_Id" });
  Customer.belongsToMany(CustomerRole, { as: 'CustomerRoles', through: Customer_CustomerRole_Mapping, foreignKey: "Customer_Id", otherKey: "CustomerRole_Id" });
  CustomerRole.belongsToMany(Customer, { as: 'Customers', through: Customer_CustomerRole_Mapping, foreignKey: "CustomerRole_Id", otherKey: "Customer_Id" });
  CustomerRole.belongsToMany(PermissionRecord, { as: 'PermissionRecords', through: PermissionRecord_Role_Mapping, foreignKey: "CustomerRole_Id", otherKey: "PermissionRecord_Id" });
  Discount.belongsToMany(Category, { as: 'Categories', through: Discount_AppliedToCategories, foreignKey: "Discount_Id", otherKey: "Category_Id" });
  Discount.belongsToMany(Manufacturer, { as: 'Manufacturers', through: Discount_AppliedToManufacturers, foreignKey: "Discount_Id", otherKey: "Manufacturer_Id" });
  Discount.belongsToMany(Product, { as: 'Products', through: Discount_AppliedToProducts, foreignKey: "Discount_Id", otherKey: "Product_Id" });
  Manufacturer.belongsToMany(Discount, { as: 'Discounts', through: Discount_AppliedToManufacturers, foreignKey: "Manufacturer_Id", otherKey: "Discount_Id" });
  PermissionRecord.belongsToMany(CustomerRole, { as: 'CustomerRoles', through: PermissionRecord_Role_Mapping, foreignKey: "PermissionRecord_Id", otherKey: "CustomerRole_Id" });
  Product.belongsToMany(Discount, { as: 'Discounts', through: Discount_AppliedToProducts, foreignKey: "Product_Id", otherKey: "Discount_Id" });
  Product.belongsToMany(ProductTag, { as: 'ProductTags', through: Product_ProductTag_Mapping, foreignKey: "Product_Id", otherKey: "ProductTag_Id" });
  ProductTag.belongsToMany(Product, { as: 'Products', through: Product_ProductTag_Mapping, foreignKey: "ProductTag_Id", otherKey: "Product_Id" });
  ShippingMethod.belongsToMany(Country, { as: 'Countries', through: ShippingMethodRestrictions, foreignKey: "ShippingMethod_Id", otherKey: "Country_Id" });
  OrderItemStatusHistory.belongsTo(ActivityLogCreateMassive, { as: "ActivityLogMassive", foreignKey: "ActivityLogMassiveId"});
  ActivityLogCreateMassive.hasMany(OrderItemStatusHistory, { as: "OrderItemStatusHistories", foreignKey: "ActivityLogMassiveId"});
  Product.belongsTo(ActivityLogCreateMassive, { as: "IdActivityLogCreateMassive_ActivityLogCreateMassive", foreignKey: "IdActivityLogCreateMassive"});
  ActivityLogCreateMassive.hasMany(Product, { as: "Products", foreignKey: "IdActivityLogCreateMassive"});
  ProductsActivityLogCreateMassive.belongsTo(ActivityLogCreateMassive, { as: "IdActivityLogCreateMassive_ActivityLogCreateMassive", foreignKey: "IdActivityLogCreateMassive"});
  ActivityLogCreateMassive.hasMany(ProductsActivityLogCreateMassive, { as: "ProductsActivityLogCreateMassives", foreignKey: "IdActivityLogCreateMassive"});
  ActivityLog.belongsTo(ActivityLogType, { as: "ActivityLogType", foreignKey: "ActivityLogTypeId"});
  ActivityLogType.hasMany(ActivityLog, { as: "ActivityLogs", foreignKey: "ActivityLogTypeId"});
  Affiliate.belongsTo(Address, { as: "Address", foreignKey: "AddressId"});
  Address.hasMany(Affiliate, { as: "Affiliates", foreignKey: "AddressId"});
  Customer.belongsTo(Address, { as: "ShippingAddress", foreignKey: "ShippingAddress_Id"});
  Address.hasMany(Customer, { as: "Customersx", foreignKey: "ShippingAddress_Id"});
  Customer.belongsTo(Address, { as: "BillingAddress", foreignKey: "BillingAddress_Id"});
  Address.hasMany(Customer, { as: "BillingAddress_Customers", foreignKey: "BillingAddress_Id"});
  CustomerAddresses.belongsTo(Address, { as: "Address", foreignKey: "Address_Id"});
  Address.hasMany(CustomerAddresses, { as: "CustomerAddresses", foreignKey: "Address_Id"});
  Order.belongsTo(Address, { as: "ShippingAddress", foreignKey: "ShippingAddressId"});
  Address.hasMany(Order, { as: "Orders", foreignKey: "ShippingAddressId"});
  Order.belongsTo(Address, { as: "PickupAddress", foreignKey: "PickupAddressId"});
  Address.hasMany(Order, { as: "PickupAddress_Orders", foreignKey: "PickupAddressId"});
  Order.belongsTo(Address, { as: "BillingAddress", foreignKey: "BillingAddressId"});
  Address.hasMany(Order, { as: "BillingAddress_Orders", foreignKey: "BillingAddressId"});
  AddressAttributeValue.belongsTo(AddressAttribute, { as: "AddressAttribute", foreignKey: "AddressAttributeId"});
  AddressAttribute.hasMany(AddressAttributeValue, { as: "AddressAttributeValues", foreignKey: "AddressAttributeId"});
  BlogComment.belongsTo(BlogPost, { as: "BlogPost", foreignKey: "BlogPostId"});
  BlogPost.hasMany(BlogComment, { as: "BlogComments", foreignKey: "BlogPostId"});
  Discount_AppliedToCategories.belongsTo(Category, { as: "Category", foreignKey: "Category_Id"});
  Category.hasMany(Discount_AppliedToCategories, { as: "Discount_AppliedToCategories", foreignKey: "Category_Id"});
  Product_Category_Mapping.belongsTo(Category, { as: "Category", foreignKey: "CategoryId"});
  Category.hasMany(Product_Category_Mapping, { as: "Product_Category_Mappings", foreignKey: "CategoryId"});
  CheckoutAttributeValue.belongsTo(CheckoutAttribute, { as: "CheckoutAttribute", foreignKey: "CheckoutAttributeId"});
  CheckoutAttribute.hasMany(CheckoutAttributeValue, { as: "CheckoutAttributeValues", foreignKey: "CheckoutAttributeId"});
  Address.belongsTo(Country, { as: "Country", foreignKey: "CountryId"});
  Country.hasMany(Address, { as: "Addresses", foreignKey: "CountryId"});
  ShippingMethodRestrictions.belongsTo(Country, { as: "Country", foreignKey: "Country_Id"});
  Country.hasMany(ShippingMethodRestrictions, { as: "ShippingMethodRestrictions", foreignKey: "Country_Id"});
  StateProvince.belongsTo(Country, { as: "Country", foreignKey: "CountryId"});
  Country.hasMany(StateProvince, { as: "StateProvinces", foreignKey: "CountryId"});
  ActivityLog.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(ActivityLog, { as: "ActivityLogs", foreignKey: "CustomerId"});
  BackInStockSubscription.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(BackInStockSubscription, { as: "BackInStockSubscriptions", foreignKey: "CustomerId"});
  BlogComment.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(BlogComment, { as: "BlogComments", foreignKey: "CustomerId"});
  CustomerAddresses.belongsTo(Customer, { as: "Customer", foreignKey: "Customer_Id"});
  Customer.hasMany(CustomerAddresses, { as: "CustomerAddresses", foreignKey: "Customer_Id"});
  CustomerPassword.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(CustomerPassword, { as: "CustomerPasswords", foreignKey: "CustomerId"});
  Customer_CustomerRole_Mapping.belongsTo(Customer, { as: "Customer", foreignKey: "Customer_Id"});
  Customer.hasMany(Customer_CustomerRole_Mapping, { as: "Customer_CustomerRole_Mappings", foreignKey: "Customer_Id"});
  ExternalAuthenticationRecord.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(ExternalAuthenticationRecord, { as: "ExternalAuthenticationRecords", foreignKey: "CustomerId"});
  Forums_Post.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(Forums_Post, { as: "Forums_Posts", foreignKey: "CustomerId"});
  Forums_PrivateMessage.belongsTo(Customer, { as: "ToCustomer", foreignKey: "ToCustomerId"});
  Customer.hasMany(Forums_PrivateMessage, { as: "Forums_PrivateMessages", foreignKey: "ToCustomerId"});
  Forums_PrivateMessage.belongsTo(Customer, { as: "FromCustomer", foreignKey: "FromCustomerId"});
  Customer.hasMany(Forums_PrivateMessage, { as: "FromCustomer_Forums_PrivateMessages", foreignKey: "FromCustomerId"});
  Forums_Subscription.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(Forums_Subscription, { as: "Forums_Subscriptions", foreignKey: "CustomerId"});
  Forums_Topic.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(Forums_Topic, { as: "Forums_Topics", foreignKey: "CustomerId"});
  Log.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(Log, { as: "Logs", foreignKey: "CustomerId"});
  NewsComment.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(NewsComment, { as: "NewsComments", foreignKey: "CustomerId"});
  Order.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(Order, { as: "Orders", foreignKey: "CustomerId"});
  PollVotingRecord.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(PollVotingRecord, { as: "PollVotingRecords", foreignKey: "CustomerId"});
  ProductReview.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(ProductReview, { as: "ProductReviews", foreignKey: "CustomerId"});
  ReturnRequest.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(ReturnRequest, { as: "ReturnRequests", foreignKey: "CustomerId"});
  RewardPointsHistory.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(RewardPointsHistory, { as: "RewardPointsHistories", foreignKey: "CustomerId"});
  ShoppingCartItem.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(ShoppingCartItem, { as: "ShoppingCartItems", foreignKey: "CustomerId"});
  CustomerAttributeValue.belongsTo(CustomerAttribute, { as: "CustomerAttribute", foreignKey: "CustomerAttributeId"});
  CustomerAttribute.hasMany(CustomerAttributeValue, { as: "CustomerAttributeValues", foreignKey: "CustomerAttributeId"});
  AclRecord.belongsTo(CustomerRole, { as: "CustomerRole", foreignKey: "CustomerRoleId"});
  CustomerRole.hasMany(AclRecord, { as: "AclRecords", foreignKey: "CustomerRoleId"});
  Customer_CustomerRole_Mapping.belongsTo(CustomerRole, { as: "CustomerRole", foreignKey: "CustomerRole_Id"});
  CustomerRole.hasMany(Customer_CustomerRole_Mapping, { as: "Customer_CustomerRole_Mappings", foreignKey: "CustomerRole_Id"});
  PermissionRecord_Role_Mapping.belongsTo(CustomerRole, { as: "CustomerRole", foreignKey: "CustomerRole_Id"});
  CustomerRole.hasMany(PermissionRecord_Role_Mapping, { as: "PermissionRecord_Role_Mappings", foreignKey: "CustomerRole_Id"});
  TierPrice.belongsTo(CustomerRole, { as: "CustomerRole", foreignKey: "CustomerRoleId"});
  CustomerRole.hasMany(TierPrice, { as: "TierPrices", foreignKey: "CustomerRoleId"});
  DiscountRequirement.belongsTo(Discount, { as: "Discount", foreignKey: "DiscountId"});
  Discount.hasMany(DiscountRequirement, { as: "DiscountRequirements", foreignKey: "DiscountId"});
  DiscountUsageHistory.belongsTo(Discount, { as: "Discount", foreignKey: "DiscountId"});
  Discount.hasMany(DiscountUsageHistory, { as: "DiscountUsageHistories", foreignKey: "DiscountId"});
  Discount_AppliedToCategories.belongsTo(Discount, { as: "Discount", foreignKey: "Discount_Id"});
  Discount.hasMany(Discount_AppliedToCategories, { as: "Discount_AppliedToCategories", foreignKey: "Discount_Id"});
  Discount_AppliedToManufacturers.belongsTo(Discount, { as: "Discount", foreignKey: "Discount_Id"});
  Discount.hasMany(Discount_AppliedToManufacturers, { as: "Discount_AppliedToManufacturers", foreignKey: "Discount_Id"});
  Discount_AppliedToProducts.belongsTo(Discount, { as: "Discount", foreignKey: "Discount_Id"});
  Discount.hasMany(Discount_AppliedToProducts, { as: "Discount_AppliedToProducts", foreignKey: "Discount_Id"});
  DiscountRequirement.belongsTo(DiscountRequirement, { as: "Parent", foreignKey: "ParentId"});
  DiscountRequirement.hasMany(DiscountRequirement, { as: "DiscountRequirements", foreignKey: "ParentId"});
  QueuedEmail.belongsTo(EmailAccount, { as: "EmailAccount", foreignKey: "EmailAccountId"});
  EmailAccount.hasMany(QueuedEmail, { as: "QueuedEmails", foreignKey: "EmailAccountId"});
  Forums_Topic.belongsTo(Forums_Forum, { as: "Forum", foreignKey: "ForumId"});
  Forums_Forum.hasMany(Forums_Topic, { as: "Forums_Topics", foreignKey: "ForumId"});
  Forums_Forum.belongsTo(Forums_Group, { as: "ForumGroup", foreignKey: "ForumGroupId"});
  Forums_Group.hasMany(Forums_Forum, { as: "Forums_Forums", foreignKey: "ForumGroupId"});
  Forums_PostVote.belongsTo(Forums_Post, { as: "ForumPost", foreignKey: "ForumPostId"});
  Forums_Post.hasMany(Forums_PostVote, { as: "Forums_PostVotes", foreignKey: "ForumPostId"});
  Forums_Post.belongsTo(Forums_Topic, { as: "Topic", foreignKey: "TopicId"});
  Forums_Topic.hasMany(Forums_Post, { as: "Forums_Posts", foreignKey: "TopicId"});
  GiftCardUsageHistory.belongsTo(GiftCard, { as: "GiftCard", foreignKey: "GiftCardId"});
  GiftCard.hasMany(GiftCardUsageHistory, { as: "GiftCardUsageHistories", foreignKey: "GiftCardId"});
  BlogPost.belongsTo(Language, { as: "Language", foreignKey: "LanguageId"});
  Language.hasMany(BlogPost, { as: "BlogPosts", foreignKey: "LanguageId"});
  LocaleStringResource.belongsTo(Language, { as: "Language", foreignKey: "LanguageId"});
  Language.hasMany(LocaleStringResource, { as: "LocaleStringResources", foreignKey: "LanguageId"});
  LocalizedProperty.belongsTo(Language, { as: "Language", foreignKey: "LanguageId"});
  Language.hasMany(LocalizedProperty, { as: "LocalizedProperties", foreignKey: "LanguageId"});
  News.belongsTo(Language, { as: "Language", foreignKey: "LanguageId"});
  Language.hasMany(News, { as: "Newss", foreignKey: "LanguageId"});
  Poll.belongsTo(Language, { as: "Language", foreignKey: "LanguageId"});
  Language.hasMany(Poll, { as: "Polls", foreignKey: "LanguageId"});
  Discount_AppliedToManufacturers.belongsTo(Manufacturer, { as: "Manufacturer", foreignKey: "Manufacturer_Id"});
  Manufacturer.hasMany(Discount_AppliedToManufacturers, { as: "Discount_AppliedToManufacturers", foreignKey: "Manufacturer_Id"});
  Product_Manufacturer_Mapping.belongsTo(Manufacturer, { as: "Manufacturer", foreignKey: "ManufacturerId"});
  Manufacturer.hasMany(Product_Manufacturer_Mapping, { as: "Product_Manufacturer_Mappings", foreignKey: "ManufacturerId"});
  NewsComment.belongsTo(News, { as: "NewsItem", foreignKey: "NewsItemId"});
  News.hasMany(NewsComment, { as: "NewsComments", foreignKey: "NewsItemId"});
  DiscountUsageHistory.belongsTo(Order, { as: "Order", foreignKey: "OrderId"});
  Order.hasMany(DiscountUsageHistory, { as: "DiscountUsageHistories", foreignKey: "OrderId"});
  GiftCardUsageHistory.belongsTo(Order, { as: "UsedWithOrder", foreignKey: "UsedWithOrderId"});
  Order.hasMany(GiftCardUsageHistory, { as: "GiftCardUsageHistories", foreignKey: "UsedWithOrderId"});
  OrderItem.belongsTo(Order, { as: "Order", foreignKey: "OrderId"});
  Order.hasMany(OrderItem, { as: "OrderItems", foreignKey: "OrderId"});
  OrderNote.belongsTo(Order, { as: "Order", foreignKey: "OrderId"});
  Order.hasMany(OrderNote, { as: "OrderNotes", foreignKey: "OrderId"});
  RecurringPayment.belongsTo(Order, { as: "InitialOrder", foreignKey: "InitialOrderId"});
  Order.hasMany(RecurringPayment, { as: "RecurringPayments", foreignKey: "InitialOrderId"});
  Shipment.belongsTo(Order, { as: "Order", foreignKey: "OrderId"});
  Order.hasMany(Shipment, { as: "Shipments", foreignKey: "OrderId"});
  GiftCard.belongsTo(OrderItem, { as: "PurchasedWithOrderItem", foreignKey: "PurchasedWithOrderItemId"});
  OrderItem.hasMany(GiftCard, { as: "GiftCards", foreignKey: "PurchasedWithOrderItemId"});
  OrderItemStatusHistory.belongsTo(OrderItem, { as: "OrderItem", foreignKey: "OrderItemId"});
  OrderItem.hasMany(OrderItemStatusHistory, { as: "OrderItemStatusHistories", foreignKey: "OrderItemId"});
  PermissionRecord_Role_Mapping.belongsTo(PermissionRecord, { as: "PermissionRecord", foreignKey: "PermissionRecord_Id"});
  PermissionRecord.hasMany(PermissionRecord_Role_Mapping, { as: "PermissionRecord_Role_Mappings", foreignKey: "PermissionRecord_Id"});
  PictureBinary.belongsTo(Picture, { as: "Picture", foreignKey: "PictureId"});
  Picture.hasMany(PictureBinary, { as: "PictureBinaries", foreignKey: "PictureId"});
  Product_Picture_Mapping.belongsTo(Picture, { as: "Picture", foreignKey: "PictureId"});
  Picture.hasMany(Product_Picture_Mapping, { as: "Product_Picture_Mappings", foreignKey: "PictureId"});
  PollAnswer.belongsTo(Poll, { as: "Poll", foreignKey: "PollId"});
  Poll.hasMany(PollAnswer, { as: "PollAnswers", foreignKey: "PollId"});
  PollVotingRecord.belongsTo(PollAnswer, { as: "PollAnswer", foreignKey: "PollAnswerId"});
  PollAnswer.hasMany(PollVotingRecord, { as: "PollVotingRecords", foreignKey: "PollAnswerId"});
  BackInStockSubscription.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(BackInStockSubscription, { as: "BackInStockSubscriptions", foreignKey: "ProductId"});
  Discount_AppliedToProducts.belongsTo(Product, { as: "Product", foreignKey: "Product_Id"});
  Product.hasMany(Discount_AppliedToProducts, { as: "Discount_AppliedToProducts", foreignKey: "Product_Id"});
  OrderItem.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(OrderItem, { as: "OrderItems", foreignKey: "ProductId"});
  ProductAttributeCombination.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(ProductAttributeCombination, { as: "ProductAttributeCombinations", foreignKey: "ProductId"});
  ProductReview.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(ProductReview, { as: "ProductReviews", foreignKey: "ProductId"});
  ProductWarehouseInventory.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(ProductWarehouseInventory, { as: "ProductWarehouseInventories", foreignKey: "ProductId"});
  Product_Category_Mapping.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(Product_Category_Mapping, { as: "Product_Category_Mappings", foreignKey: "ProductId"});
  Product_Manufacturer_Mapping.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(Product_Manufacturer_Mapping, { as: "Product_Manufacturer_Mappings", foreignKey: "ProductId"});
  Product_Picture_Mapping.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(Product_Picture_Mapping, { as: "Product_Picture_Mappings", foreignKey: "ProductId"});
  Product_ProductAttribute_Mapping.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(Product_ProductAttribute_Mapping, { as: "Product_ProductAttribute_Mappings", foreignKey: "ProductId"});
  Product_ProductTag_Mapping.belongsTo(Product, { as: "Product", foreignKey: "Product_Id"});
  Product.hasMany(Product_ProductTag_Mapping, { as: "Product_ProductTag_Mappings", foreignKey: "Product_Id"});
  Product_SpecificationAttribute_Mapping.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(Product_SpecificationAttribute_Mapping, { as: "Product_SpecificationAttribute_Mappings", foreignKey: "ProductId"});
  ProductsActivityLogCreateMassive.belongsTo(Product, { as: "IdProducts_Product", foreignKey: "IdProducts"});
  Product.hasMany(ProductsActivityLogCreateMassive, { as: "ProductsActivityLogCreateMassives", foreignKey: "IdProducts"});
  ShoppingCartItem.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(ShoppingCartItem, { as: "ShoppingCartItems", foreignKey: "ProductId"});
  StockQuantityHistory.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(StockQuantityHistory, { as: "StockQuantityHistories", foreignKey: "ProductId"});
  TierPrice.belongsTo(Product, { as: "Product", foreignKey: "ProductId"});
  Product.hasMany(TierPrice, { as: "TierPrices", foreignKey: "ProductId"});
  PredefinedProductAttributeValue.belongsTo(ProductAttribute, { as: "ProductAttribute", foreignKey: "ProductAttributeId"});
  ProductAttribute.hasMany(PredefinedProductAttributeValue, { as: "PredefinedProductAttributeValues", foreignKey: "ProductAttributeId"});
  Product_ProductAttribute_Mapping.belongsTo(ProductAttribute, { as: "ProductAttribute", foreignKey: "ProductAttributeId"});
  ProductAttribute.hasMany(Product_ProductAttribute_Mapping, { as: "Product_ProductAttribute_Mappings", foreignKey: "ProductAttributeId"});
  ProductReviewHelpfulness.belongsTo(ProductReview, { as: "ProductReview", foreignKey: "ProductReviewId"});
  ProductReview.hasMany(ProductReviewHelpfulness, { as: "ProductReviewHelpfulnesses", foreignKey: "ProductReviewId"});
  ProductReview_ReviewType_Mapping.belongsTo(ProductReview, { as: "ProductReview", foreignKey: "ProductReviewId"});
  ProductReview.hasMany(ProductReview_ReviewType_Mapping, { as: "ProductReview_ReviewType_Mappings", foreignKey: "ProductReviewId"});
  Product_ProductTag_Mapping.belongsTo(ProductTag, { as: "ProductTag", foreignKey: "ProductTag_Id"});
  ProductTag.hasMany(Product_ProductTag_Mapping, { as: "Product_ProductTag_Mappings", foreignKey: "ProductTag_Id"});
  ProductAttributeValue.belongsTo(Product_ProductAttribute_Mapping, { as: "ProductAttributeMapping", foreignKey: "ProductAttributeMappingId"});
  Product_ProductAttribute_Mapping.hasMany(ProductAttributeValue, { as: "ProductAttributeValues", foreignKey: "ProductAttributeMappingId"});
  RecurringPaymentHistory.belongsTo(RecurringPayment, { as: "RecurringPayment", foreignKey: "RecurringPaymentId"});
  RecurringPayment.hasMany(RecurringPaymentHistory, { as: "RecurringPaymentHistories", foreignKey: "RecurringPaymentId"});
  ProductReview_ReviewType_Mapping.belongsTo(ReviewType, { as: "ReviewType", foreignKey: "ReviewTypeId"});
  ReviewType.hasMany(ProductReview_ReviewType_Mapping, { as: "ProductReview_ReviewType_Mappings", foreignKey: "ReviewTypeId"});
  Order.belongsTo(RewardPointsHistory, { as: "RewardPointsHistoryEntry", foreignKey: "RewardPointsHistoryEntryId"});
  RewardPointsHistory.hasMany(Order, { as: "Orders", foreignKey: "RewardPointsHistoryEntryId"});
  Superheroe.belongsTo(Rol, { as: "Role", foreignKey: "RoleId"});
  Rol.hasMany(Superheroe, { as: "Superheroes", foreignKey: "RoleId"});
  ShipmentItem.belongsTo(Shipment, { as: "Shipment", foreignKey: "ShipmentId"});
  Shipment.hasMany(ShipmentItem, { as: "ShipmentItems", foreignKey: "ShipmentId"});
  ShippingMethodRestrictions.belongsTo(ShippingMethod, { as: "ShippingMethod", foreignKey: "ShippingMethod_Id"});
  ShippingMethod.hasMany(ShippingMethodRestrictions, { as: "ShippingMethodRestrictions", foreignKey: "ShippingMethod_Id"});
  SpecificationAttributeOption.belongsTo(SpecificationAttribute, { as: "SpecificationAttribute", foreignKey: "SpecificationAttributeId"});
  SpecificationAttribute.hasMany(SpecificationAttributeOption, { as: "SpecificationAttributeOptions", foreignKey: "SpecificationAttributeId"});
  SpecificationAttribute.belongsTo(SpecificationAttributeGroup, { as: "SpecificationAttributeGroup", foreignKey: "SpecificationAttributeGroupId"});
  SpecificationAttributeGroup.hasMany(SpecificationAttribute, { as: "SpecificationAttributes", foreignKey: "SpecificationAttributeGroupId"});
  Product_SpecificationAttribute_Mapping.belongsTo(SpecificationAttributeOption, { as: "SpecificationAttributeOption", foreignKey: "SpecificationAttributeOptionId"});
  SpecificationAttributeOption.hasMany(Product_SpecificationAttribute_Mapping, { as: "Product_SpecificationAttribute_Mappings", foreignKey: "SpecificationAttributeOptionId"});
  Address.belongsTo(StateProvince, { as: "StateProvince", foreignKey: "StateProvinceId"});
  StateProvince.hasMany(Address, { as: "Addresses", foreignKey: "StateProvinceId"});
  BlogComment.belongsTo(Store, { as: "Store", foreignKey: "StoreId"});
  Store.hasMany(BlogComment, { as: "BlogComments", foreignKey: "StoreId"});
  NewsComment.belongsTo(Store, { as: "Store", foreignKey: "StoreId"});
  Store.hasMany(NewsComment, { as: "NewsComments", foreignKey: "StoreId"});
  ProductReview.belongsTo(Store, { as: "Store", foreignKey: "StoreId"});
  Store.hasMany(ProductReview, { as: "ProductReviews", foreignKey: "StoreId"});
  StoreMapping.belongsTo(Store, { as: "Store", foreignKey: "StoreId"});
  Store.hasMany(StoreMapping, { as: "StoreMappings", foreignKey: "StoreId"});
  LoginAttempts.belongsTo(Superheroe, { as: "SuperHeroe", foreignKey: "SuperHeroeId"});
  Superheroe.hasMany(LoginAttempts, { as: "LoginAttempts", foreignKey: "SuperHeroeId"});
  OrderItem.belongsTo(TypeStatusOrderItem, { as: "TypeStatusOrderItem", foreignKey: "TypeStatusOrderItemId"});
  TypeStatusOrderItem.hasMany(OrderItem, { as: "OrderItems", foreignKey: "TypeStatusOrderItemId"});
  OrderItemStatusHistory.belongsTo(TypeStatusOrderItem, { as: "TypeStatusOrderItem", foreignKey: "TypeStatusOrderItemId"});
  TypeStatusOrderItem.hasMany(OrderItemStatusHistory, { as: "OrderItemStatusHistories", foreignKey: "TypeStatusOrderItemId"});
  VendorNote.belongsTo(Vendor, { as: "Vendor", foreignKey: "VendorId"});
  Vendor.hasMany(VendorNote, { as: "VendorNotes", foreignKey: "VendorId"});
  VendorAttributeValue.belongsTo(VendorAttribute, { as: "VendorAttribute", foreignKey: "VendorAttributeId"});
  VendorAttribute.hasMany(VendorAttributeValue, { as: "VendorAttributeValues", foreignKey: "VendorAttributeId"});
  ProductWarehouseInventory.belongsTo(Warehouse, { as: "Warehouse", foreignKey: "WarehouseId"});
  Warehouse.hasMany(ProductWarehouseInventory, { as: "ProductWarehouseInventories", foreignKey: "WarehouseId"});

  return {
    AclRecord,
    ActivityLog,
    ActivityLogCreateMassive,
    ActivityLogType,
    Address,
    AddressAttribute,
    AddressAttributeValue,
    Affiliate,
    BackInStockSubscription,
    BlogComment,
    BlogPost,
    Campaign,
    Category,
    CategoryTemplate,
    CheckoutAttribute,
    CheckoutAttributeValue,
    Country,
    CrossSellProduct,
    Currency,
    Customer,
    CustomerAddresses,
    CustomerAttribute,
    CustomerAttributeValue,
    CustomerPassword,
    CustomerRole,
    Customer_CustomerRole_Mapping,
    DeliveryDate,
    Discount,
    DiscountRequirement,
    DiscountUsageHistory,
    Discount_AppliedToCategories,
    Discount_AppliedToManufacturers,
    Discount_AppliedToProducts,
    Download,
    EmailAccount,
    ExternalAuthenticationRecord,
    FacebookPixelConfiguration,
    Forums_Forum,
    Forums_Group,
    Forums_Post,
    Forums_PostVote,
    Forums_PrivateMessage,
    Forums_Subscription,
    Forums_Topic,
    GdprConsent,
    GdprLog,
    GenericAttribute,
    GiftCard,
    GiftCardUsageHistory,
    GoogleAuthenticatorRecord,
    Language,
    LocaleStringResource,
    LocalizedProperty,
    Log,
    LoginAttempts,
    Manufacturer,
    ManufacturerTemplate,
    MeasureDimension,
    MeasureWeight,
    MessageTemplate,
    MigrationVersionInfo,
    News,
    NewsComment,
    NewsLetterSubscription,
    Order,
    OrderItem,
    OrderItemStatusHistory,
    OrderNote,
    PermissionRecord,
    PermissionRecord_Role_Mapping,
    Picture,
    PictureBinary,
    Poll,
    PollAnswer,
    PollVotingRecord,
    PredefinedProductAttributeValue,
    Product,
    ProductAttribute,
    ProductAttributeCombination,
    ProductAttributeValue,
    ProductAvailabilityRange,
    ProductReview,
    ProductReviewHelpfulness,
    ProductReview_ReviewType_Mapping,
    ProductTag,
    ProductTemplate,
    ProductWarehouseInventory,
    Product_Category_Mapping,
    Product_Manufacturer_Mapping,
    Product_Picture_Mapping,
    Product_ProductAttribute_Mapping,
    Product_ProductTag_Mapping,
    Product_SpecificationAttribute_Mapping,
    ProductsActivityLogCreateMassive,
    Purchase,
    QueuedEmail,
    RecurringPayment,
    RecurringPaymentHistory,
    RelatedProduct,
    ReturnRequest,
    ReturnRequestAction,
    ReturnRequestReason,
    ReviewType,
    RewardPointsHistory,
    Rol,
    ScheduleTask,
    SearchTerm,
    Setting,
    Shipment,
    ShipmentItem,
    ShippingByWeightByTotalRecord,
    ShippingMethod,
    ShippingMethodRestrictions,
    ShoppingCartItem,
    SpecificationAttribute,
    SpecificationAttributeGroup,
    SpecificationAttributeOption,
    StateProvince,
    StockQuantityHistory,
    Store,
    StoreMapping,
    StorePickupPoint,
    Superheroe,
    TaxCategory,
    TaxRate,
    TaxTransactionLog,
    TierPrice,
    Topic,
    TopicTemplate,
    TypeStatusOrderItem,
    UrlRecord,
    Vendor,
    VendorAttribute,
    VendorAttributeValue,
    VendorNote,
    Warehouse,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
