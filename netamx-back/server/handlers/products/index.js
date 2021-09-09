import * as db from '../../database'
import productTemplate from "../../constants/productTemplate";
import MeasureWeight from "../../constants/MeasureWeight";
var moment = require('moment'); 

const withoutFoundRepetProduct = (data) => {
    let result = true
    let todo =[]
    try {
        data.forEach(element => {
            result = result && !todo.includes(element[0])
            todo.push(element[0])
        });
    } catch (error) {
        result = false
    }
    return result
}

const checkRowPromotionsProducts = async (data) =>{
    let status = true
    let errors = []
    let Id = null
    let ShowOnHomepage = 0
    let OrderMinimumQuantity = 0
    let OrderMaximumQuantity = 0
    let Price = 0
    let OldPrice = 0

    let UpdatedOnUtc = moment();
    try {   
        const dataProduct = await db.sequelize.query("select p.Id,p.Price, p.OldPrice from Product p where p.Sku ='"+data.B+"' ORDER BY p.CreatedOnUtc desc limit 1", { type: db.sequelize.QueryTypes.SELECT});
        if(dataProduct.length == 1) {
            Id = dataProduct[0].Id
        }else if(dataProduct.length > 1){
            status= false
            errors.push('Existe más de un producto con este SKU.')
        }else {
            status= false
            errors.push('No existe el SKU del producto.')
        }
        ShowOnHomepage =  data.A == 'TRUE' ? 1 : 0
        OrderMinimumQuantity = data.K
        OrderMaximumQuantity = data.L
        Price = data.M
        OldPrice = data.N

    } catch (error) {
        status = false
        errors.push(error)
    }
    return {
        status,
        errors,
        Id,
        ShowOnHomepage,
        OrderMinimumQuantity,
        OrderMaximumQuantity,
        Price,
        OldPrice,
        UpdatedOnUtc
    }
}

const checkRowProduct = async (data) =>{
    let status = true
    let errors = []
    let ProductTypeId= null
    let ParentGroupedProductId = null
    let VisibleIndividually = null
    let Name = ''
    let ShortDescription = ''
    let FullDescription = ''
    let VendorId =null
    let ProductTemplateId = undefined
    let ShowOnHomepage = false
    let DisplayOrder =0
    let MetaKeywords =''
    let MetaDescription =''
    let MetaTitle = ''
    //let SeName= '' // no ubicado como campo
    let AllowCustomerReviews = 0
    let Published = 0
    let Sku = ''
    let ManufacturerPartNumber = ''
    let Gtin =  ''
    let IsGiftCard = 0
    let GiftCardTypeId = '' 
    let OverriddenGiftCardAmount = ''
    let RequireOtherProducts = 0
    let RequiredProductIds =''
    let AutomaticallyAddRequiredProducts = 0
    let IsDownload = 0
    let DownloadId = ''
    let UnlimitedDownloads= 0
    let MaxNumberOfDownloads =0
    let DownloadActivationTypeId = null 
    let HasSampleDownload = 0
    let SampleDownloadId = null
    let HasUserAgreement = null
    let UserAgreementText = ''
    let IsRecurring = 0
    let RecurringCycleLength =''
    let RecurringCyclePeriodId = null
    let RecurringTotalCycles = 0
    let IsRental = 0
    let RentalPriceLength = 0
    let RentalPricePeriodId = null 
    let IsShipEnabled = 0

    let IsFreeShipping = 0
    let ShipSeparately = 0
    let AdditionalShippingCharge = 0
    let DeliveryDateId = 0
    let IsTaxExempt = 0
    let TaxCategoryId = 0
    let IsTelecommunicationsOrBroadcastingOrElectronicServices = 0
    let ManageInventoryMethodId= null
    let ProductAvailabilityRangeId = 0
    let UseMultipleWarehouses =0
    let WarehouseId = null
    let StockQuantity = 0
    let DisplayStockAvailability = 0
    let DisplayStockQuantity = 0
    let MinStockQuantity = 0
    let LowStockActivityId = null
    let NotifyAdminForQuantityBelow = 0
    let BackorderModeId = null
    let AllowBackInStockSubscriptions = 0
    let OrderMinimumQuantity = 0
    let OrderMaximumQuantity = 0
    let AllowedQuantities = ''
    let AllowAddingOnlyExistingAttributeCombinations = 0
    let NotReturnable = 0
    let DisableBuyButton =0
    let DisableWishlistButton = 0
    let AvailableForPreOrder = 0
    let PreOrderAvailabilityStartDateTimeUtc = null // es fecha
    let CallForPrice = 0
    let Price = 0
    let OldPrice = 0
    let ProductCost =0
    let CustomerEntersPrice = 0
    let MinimumCustomerEnteredPrice = 0 
    let MaximumCustomerEnteredPrice = 0
    let BasepriceEnabled = 0
    let BasepriceAmount = 0
    let BasepriceUnitId = null
    let BasepriceBaseAmount = 0
    let BasepriceBaseUnitId = null
    let MarkAsNew = 0
    let MarkAsNewStartDateTimeUtc = null
    let MarkAsNewEndDateTimeUtc = null
    let Weight = 0
    let Length = 0
    let Width = 0
    let Height = 0
    let AvailableStartDateTimeUtc = null // es fecha
    let AvailableEndDateTimeUtc = null // es fecha
    let LimitedToStores = 0

    let Deleted = 0
    let CreatedOnUtc = moment();
    let UpdatedOnUtc = moment();

    // Add para tabla UrlRecord
    let Slug = data.O
    try {
        ProductTypeId= 5 //default asignado en la plantilla SimpleProduct = 5, GroupedProduct = 10
        ParentGroupedProductId = data.C
        VisibleIndividually = data.D == 'TRUE' ? 1 : 0
        Name = data.E
        ShortDescription = data.F
        FullDescription = data.G
        VendorId = 0
        ProductTemplateId = productTemplate[data.I]
        if(ProductTemplateId == undefined) {
            status = false
            errors.push("El valor del campo ProductTemplate no existe en el catálogo.")
        } 
        ShowOnHomepage =  data.J == 'TRUE' ? 1 : 0
        DisplayOrder = data.K
        MetaKeywords = data.L
        MetaDescription = data.M
        MetaTitle =data.N
        // SeName = ''
        AllowCustomerReviews = data.P == 'TRUE' ? 1 : 0
        Published =  data.Q == 'TRUE' ? 1 : 0
        ManufacturerPartNumber = data.S
        if(data.R.length > 1){
            Sku = data.R
            const dataProductSku = await db.sequelize.query("select p.Id from Product p where p.Sku ='"+Sku+"'", { type: db.sequelize.QueryTypes.SELECT});
            if(dataProductSku.length > 0) {
                status=false
                errors.push('El producto con Sku '+Sku +" ya esta dado de alta.")
            }
        }else{
            errors.push('No tenemos disponible el SKU.')
            status = false;
        }
        Gtin = data.T
        IsGiftCard = data.U == 'TRUE' ? 1 : 0
        GiftCardTypeId = 0 // Asignar 0 = virtual dado por Hugo
        OverriddenGiftCardAmount = data.W
        RequireOtherProducts = data.X == 'TRUE' ? 1 : 0
        RequiredProductIds = data.Y
        AutomaticallyAddRequiredProducts = data.Z == 'TRUE' ? 1 : 0
        IsDownload = data.AA == 'TRUE' ? 1 : 0
        DownloadId = data.AB
        UnlimitedDownloads = data.AC == 'TRUE' ? 1 : 0
        MaxNumberOfDownloads = data.AD
        DownloadActivationTypeId = 0 // Asigna 0 = When Order Is Paid
        HasSampleDownload = data.AF == 'TRUE' ? 1 : 0
        SampleDownloadId = data.AG
        HasUserAgreement = data.AH == 'TRUE' ? 1 : 0
        UserAgreementText = data.AI
        IsRecurring = data.AJ == 'TRUE' ? 1 : 0
        RecurringCycleLength = data.AK
        RecurringCyclePeriodId = 0 // Asignar 0 = Days dado por Hugo
        RecurringTotalCycles = data.AM
        IsRental = data.AN == 'TRUE' ? 1 : 0
        RentalPriceLength = data.AO
        RentalPricePeriodId = 0 // Asignar 0 = Days dado por Hugo
        IsShipEnabled =  data.AQ == 'TRUE' ? 1 : 0
        
        IsFreeShipping = data.AR == 'TRUE' ? 1 : 0
        ShipSeparately = data.AS == 'TRUE' ? 1 : 0
        AdditionalShippingCharge = data.AT
        DeliveryDateId = 0
        IsTaxExempt =  data.AV == 'TRUE' ? 1 : 0
        TaxCategoryId = 0
        IsTelecommunicationsOrBroadcastingOrElectronicServices = data.AX == 'TRUE' ? 1 : 0
        ManageInventoryMethodId= 0 // Asigna 0 = Dont Manage Stock propuesto por Hugo
        ProductAvailabilityRangeId = 0
        UseMultipleWarehouses =  data.BA == 'TRUE' ? 1 : 0
        WarehouseId = data.BB
        StockQuantity = data.BC
        DisplayStockAvailability = data.BD == 'TRUE' ? 1 : 0
        DisplayStockQuantity = data.BE == 'TRUE' ? 1 : 0
        MinStockQuantity = data.BF
        LowStockActivityId = 0 // Asignado 0 = nothing por Hugo
        NotifyAdminForQuantityBelow = data.BH
        BackorderModeId = 0 // O = BACKORDERS POR HUGO
        AllowBackInStockSubscriptions = data.BJ == 'TRUE' ? 1 : 0
        OrderMinimumQuantity = data.BK
        OrderMaximumQuantity = data.BL
        AllowedQuantities = data.BM
        AllowAddingOnlyExistingAttributeCombinations = data.BN == 'TRUE' ? 1 : 0
        NotReturnable = data.BO == 'TRUE' ? 1 : 0
        DisableBuyButton = data.BP == 'TRUE' ? 1 : 0
        DisableWishlistButton = data.BQ == 'TRUE' ? 1 : 0
        AvailableForPreOrder = data.BR == 'TRUE' ? 1 : 0
        PreOrderAvailabilityStartDateTimeUtc = null // es fecha
        CallForPrice = data.BT == 'TRUE' ? 1 : 0
        Price = data.BU
        OldPrice = data.BV
        ProductCost = data.BW
        CustomerEntersPrice = data.BX == 'TRUE' ? 1 : 0
        MinimumCustomerEnteredPrice = data.BY
        MaximumCustomerEnteredPrice = data.BZ
        BasepriceEnabled = data.CA == 'TRUE' ? 1 : 0
        BasepriceAmount = data.CB
        //
        BasepriceUnitId = MeasureWeight[data.CC]
        if(BasepriceUnitId == undefined) {
            status= false
            errors.push('El valor del campo BasepriceUnit no existe en el catálogo.')
        }
        
        BasepriceBaseAmount = data.CD
        BasepriceBaseUnitId = MeasureWeight[data.CE]
        if(BasepriceBaseUnitId == undefined) {
            status= false
            errors.push('El valor del campo BasepriceBaseUnitId no existe en el catálogo.')
        }
        MarkAsNew = data.CF == 'TRUE' ? 1 : 0
        MarkAsNewStartDateTimeUtc = null
        MarkAsNewEndDateTimeUtc = null
        Weight = data.CI
        Length = data.CJ
        Width = data.CK
        Height = data.CL
        AvailableStartDateTimeUtc = null // es fecha
        AvailableEndDateTimeUtc = null // es fecha
        LimitedToStores = data.CR
        
    } catch (error) {
        console.log('Error row product',error)
        status= false
        errors.push(error)
    }
    
    return {
        status,
        errors,
        ProductTypeId,
        ParentGroupedProductId,
        VisibleIndividually,
        Name,
        ShortDescription,
        FullDescription,
        VendorId,
        ProductTemplateId,
        ShowOnHomepage,
        DisplayOrder,
        MetaKeywords,
        MetaDescription,
        MetaTitle,
        AllowCustomerReviews,
        Published,
        Sku,
        ManufacturerPartNumber,
        Gtin,
        IsGiftCard,
        GiftCardTypeId,
        OverriddenGiftCardAmount,
        RequireOtherProducts,
        RequiredProductIds,
        AutomaticallyAddRequiredProducts,
        IsDownload,
        DownloadId,
        UnlimitedDownloads,
        MaxNumberOfDownloads,
        DownloadActivationTypeId,
        HasSampleDownload,
        SampleDownloadId,
        HasUserAgreement,
        UserAgreementText,
        IsRecurring,
        RecurringCycleLength,
        RecurringCyclePeriodId,
        RecurringTotalCycles,
        IsRental,
        RentalPriceLength,
        RentalPricePeriodId,
        IsShipEnabled,
        IsFreeShipping,
        ShipSeparately,
        AdditionalShippingCharge,
        DeliveryDateId,
        IsTaxExempt,
        TaxCategoryId,
        IsTelecommunicationsOrBroadcastingOrElectronicServices,
        ManageInventoryMethodId,
        ProductAvailabilityRangeId,
        UseMultipleWarehouses,
        WarehouseId,
        StockQuantity,
        DisplayStockAvailability,
        DisplayStockQuantity,
        MinStockQuantity,
        LowStockActivityId,
        NotifyAdminForQuantityBelow,
        BackorderModeId,
        AllowBackInStockSubscriptions,
        OrderMinimumQuantity,
        OrderMaximumQuantity,
        AllowedQuantities,
        AllowAddingOnlyExistingAttributeCombinations,
        NotReturnable,
        DisableBuyButton,
        DisableWishlistButton,
        AvailableForPreOrder,
        PreOrderAvailabilityStartDateTimeUtc,
        CallForPrice,
        Price,
        OldPrice,
        ProductCost,
        CustomerEntersPrice,
        MinimumCustomerEnteredPrice,
        MaximumCustomerEnteredPrice,
        BasepriceEnabled,
        BasepriceAmount,
        BasepriceUnitId,
        BasepriceBaseAmount,
        BasepriceBaseUnitId,
        MarkAsNew,
        MarkAsNewStartDateTimeUtc,
        MarkAsNewEndDateTimeUtc,
        Weight,
        Length,
        Width,
        Height,
        AvailableStartDateTimeUtc,
        AvailableEndDateTimeUtc,
        LimitedToStores,
        Deleted,
        CreatedOnUtc, 
        UpdatedOnUtc,
        ApprovedRatingSum : 0,
        NotApprovedRatingSum : 0,
        ApprovedTotalReviews: 0,
        NotApprovedTotalReviews: 0, 
        SubjectToAcl: 0,
        HasTierPrices: 0,
        HasDiscountsApplied:0,
        Slug
    }
}

module.exports = { 
    checkRowProduct,
    checkRowPromotionsProducts,
    withoutFoundRepetProduct
} 