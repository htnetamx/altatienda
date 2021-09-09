const validateLayout = (layout) =>{
    const arrayError = [];
    if(layout.A != 'Date'){
        arrayError.push("Date");
    }else if(layout.B != 'SKUNeta'){
        arrayError.push("SKUNeta");
    }else if(layout.C != 'PurchasePrice'){
        arrayError.push("PurchasePrice");
    }else if (layout.D  != 'IVA'){
        arrayError.push("IVA");
    }else if (layout.E != 'Quantity'){
        arrayError.push("Quantity");
    }else if (layout.F != 'Caja'){
        arrayError.push("Caja");
    }else if (layout.G != 'Supplier'){
        arrayError.push("Supplier");
    }else if (layout.H != 'SupplierId'){
        arrayError.push("SupplierId");
    }
    return arrayError;
}

module.exports = {
    validateLayout
}