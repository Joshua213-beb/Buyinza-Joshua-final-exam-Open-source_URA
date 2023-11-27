//model code here
const mongoose = require('mongoose');


//Tax Payer Registration Schema
const taxPayerSchema = new mongoose.Schema({
    payerName: { type: String, required: true },
    dob: { type: Date, required: true },
    occupation: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    annualIncome: { type: Number, required: true },
    tinNumber: { type: String, required: true },
});

const TaxPayer = mongoose.model('TaxPayer', taxPayerSchema);

//Asset Registration Schema
const assetSchema = new mongoose.Schema({
    assetName: { type: String, required: true },
    estimatedCost: { type: Number, required: true },
    ownersTIN: { type: String, match: /[0-9]{4}\/[MF]\/[0-9]{6}/, required: true },
    assetType: { type: String, enum: ['fixed', 'movable'], required: true },
    assetCode: { type: String, required: true },
});

const Asset = mongoose.model('Asset', assetSchema);


//Income Tax Payment Schema
const incomeTaxSchema = new mongoose.Schema({
    totalProfits: { type: Number, required: true },
    tin: { type: String, match: /[0-9]{4}\/[MF]\/[0-9]{6}/, required: true },
    taxPayable: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
});

const IncomeTaxPayment = mongoose.model('IncomeTaxPayment', incomeTaxSchema);


//Asset Transfer Schema
const assetTransferSchema = new mongoose.Schema({
    assetCode: { type: String, required: true },
    newOwnerTIN: { type: String, match: /[0-9]{4}\/[MF]\/[0-9]{6}/, required: true },
    transferDate: { type: Date, default: Date.now },
});

const AssetTransfer = mongoose.model('AssetTransfer', assetTransferSchema);


// Export all models
module.exports = {
    TaxPayer,
    Asset,
    IncomeTaxPayment,
    AssetTransfer,
};