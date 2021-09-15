const validateLayout = (layout) =>{
    const arrayError = [];
    if(layout.A != 'Purchase_id'){
        arrayError.push("Purchase_id");
    }
    if(layout.B != 'Date'){
        arrayError.push("Date");
    }
    if(layout.C != 'SKUNeta'){
        arrayError.push("SKUNeta");
    }
    if(layout.D != 'PurchasePrice'){
        arrayError.push("PurchasePrice");
    }
    if (layout.E  != 'IVA'){
        arrayError.push("IVA");
    }
    if (layout.F != 'Quantity'){
        arrayError.push("Quantity");
    }
    if (layout.G != 'Caja'){
        arrayError.push("Caja");
    }
    if (layout.H != 'Supplier'){
        arrayError.push("Supplier");
    }
    if (layout.I != 'SupplierId'){
        arrayError.push("SupplierId");
    }
    return arrayError;
}

module.exports = {
    validateLayout
}