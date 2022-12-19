function Create() {
    if(validateNegativeValues()) {
        //alert(`All values should be positive`);
        document.getElementById('demo').value = '';
        document.getElementById('error').innerHTML = '<h3>All values should be positive</h3>'
        return ;
    }
    let isValidated = validateCount();
    if(isValidated.value) {
        if(isValidated.type == "amazonioBundleCount") {
            document.getElementById('error').innerHTML = `<h3>FBA Inventory/Transfer Order/Customer Returns Addons should be greater than equal to FBA Bundles.</h3>`;
        }
        else if(isValidated.type == "amazonmcfioBundleCount") {
            document.getElementById('error').innerHTML = `<h3>FBA Inventory/Transfer Order Addons should be greater than equal to FBA Bundles.</h3>`;
        }
        else {
            document.getElementById('error').innerHTML = `<h3>${isValidated.type} addon count is more than the store count.</h3>`;
        }
        document.getElementById('demo').value = '';
        return ;
    }

    document.getElementById('error').innerHTML = ''

    var addonStoreLicenses = {
        type: 'store',
        licenses: []
    }
    var addOnStoreLicense = {
        addOnEdition: ''
    }
    var { edition, numberOfStores, bundles, renewals, quotes, nfba, transferOrder, customerReturns, payouts, localSelling } = getInputValues();
    var connectorLicense = { 'connectorEdition': edition }
    if (numberOfStores) {
        connectorLicense.addonLicenses = [addonStoreLicenses]
        addOnStoreLicense.addOnEdition = edition
        while (numberOfStores--) {
            addonStoreLicenses.licenses.push(addOnStoreLicense)
        }
    }

    if (!connectorLicense.addonLicenses) {
        connectorLicense.addonLicenses = []
    }
    addonLicenses1 = {
        type: 'addon',
        licenses: []
    }

    var { FBACustomerReturnsAddOn, transferOrdersAddOn, localSellingAddOn, renewalsAddOn, quotesAddOn, fbaInvAdjAddOn, payoutAddOn } = getAllAddOnIds();

    while (bundles-- && document.getElementById('appList').value == "amazonio") {
        addonLicenses1.licenses.push(FBACustomerReturnsAddOn);
        customerReturns--;
        addonLicenses1.licenses.push(transferOrdersAddOn);
        transferOrder--;
        addonLicenses1.licenses.push(fbaInvAdjAddOn);
        nfba--;
    }

    while (bundles-- && document.getElementById('appList').value == "amazonmcfio") {
        addonLicenses1.licenses.push(transferOrdersAddOn);
        transferOrder--;
        addonLicenses1.licenses.push(fbaInvAdjAddOn);
        nfba--;
    }
    while (renewals--) {
        addonLicenses1.licenses.push(renewalsAddOn)
    }
    while (quotes--) {
        addonLicenses1.licenses.push(quotesAddOn)
    }
    while (nfba--) {
        addonLicenses1.licenses.push(fbaInvAdjAddOn)
    }
    while (transferOrder--) {
        addonLicenses1.licenses.push(transferOrdersAddOn)
    }
    while (customerReturns--) {
        addonLicenses1.licenses.push(FBACustomerReturnsAddOn)
    }
    while (payouts--) {
        addonLicenses1.licenses.push(payoutAddOn)
    }
    while (localSelling--) {
        addonLicenses1.licenses.push(localSellingAddOn)
    }
    if (addonLicenses1.licenses.length > 0)
        connectorLicense.addonLicenses.push(addonLicenses1)

    document.getElementById('demo').value = JSON.stringify(connectorLicense)
    var copyText = document.getElementById("demo");
    copyText.select();
    document.execCommand("copy");
}
function validateNegativeValues() {
    let { edition, numberOfStores, bundles, renewals, quotes, nfba, transferOrder, customerReturns, payouts, localSelling } = getInputValues();
    if(numberOfStores < 0 || bundles < 0 || renewals < 0 || quotes < 0 || nfba < 0 || transferOrder < 0 || customerReturns < 0 || payouts < 0 || localSelling < 0) {
        return true;
    }
    return false;
}
function validateCount() {
    let { edition, numberOfStores, bundles, renewals, quotes, nfba, transferOrder, customerReturns, payouts, localSelling } = getInputValues();
    let maxTotalCount = 1 + numberOfStores;
    if(bundles > maxTotalCount) {
        return {value: true, type: 'bundles'};
    }
    if(document.getElementById('appList').value == "amazonio" && (bundles > nfba || bundles > transferOrder || bundles > customerReturns)) {
        return {value: true, type: 'amazonioBundleCount'}
    }
    if(document.getElementById('appList').value == "amazonmcfio" && (bundles > nfba || bundles > transferOrder)) {
        return {value: true, type: 'amazonmcfioBundleCount'}
    }
    if(renewals > maxTotalCount) {
        return {value: true, type: 'renewals'};
    }
    if(quotes > maxTotalCount) {
        return {value: true, type: 'quotes'};
    }
    if(nfba > maxTotalCount) {
        return {value: true, type: 'nfba'};
    }
    if(transferOrder > maxTotalCount) {
        return {value: true, type: 'transferOrder'};
    }
    if(customerReturns > maxTotalCount) {
        return {value: true, type: 'customerReturns'};
    }
    if(payouts > maxTotalCount) {
        return {value: true, type: 'payouts'};
    }
    if(localSelling > maxTotalCount) {
        return {value: true, type: 'localSelling'};
    }
    return {value: false, type: ''};
}

function getAllAddOnIds() {
    var quotesAddOn = { 'addOnId': 'quotes' };
    var renewalsAddOn = { 'addOnId': 'contractRenewals' };
    var fbaInvAdjAddOn = { 'addOnId': 'fbaInventoryAdjustment' };
    var transferOrdersAddOn = { 'addOnId': 'transferOrder' };
    var FBACustomerReturnsAddOn = { 'addOnId': 'FBACustomerReturns' };
    var payoutAddOn = { 'addOnId': 'payout' };
    var localSellingAddOn = { 'addOnId': 'amazonLocalSelling' };
    return { FBACustomerReturnsAddOn, transferOrdersAddOn, localSellingAddOn, renewalsAddOn, quotesAddOn, fbaInvAdjAddOn, payoutAddOn };
}

function getInputValues() {
    var edition = document.getElementById('edition').value;
    var numberOfStores = Number(document.getElementById('nstore').value);
    var nfba = Number(document.getElementById('nfba').value);
    var transferOrder = Number(document.getElementById('transferOrder').value);
    var payouts = Number(document.getElementById('payouts').value);
    var customerReturns = Number(document.getElementById('customerReturns').value);
    var bundles = Number(document.getElementById('bundle').value);
    var quotes = Number(document.getElementById('quotes').value);
    var renewals = Number(document.getElementById('renewals').value);
    var localSelling = Number(document.getElementById('localSelling').value);
    return { edition, numberOfStores, bundles, renewals, quotes, nfba, transferOrder, customerReturns, payouts, localSelling };
}

function Reset() {
    document.getElementById('nstore').value =
        document.getElementById('nfba').value =
        document.getElementById('transferOrder').value =
        document.getElementById('payouts').value =
        document.getElementById('bundle').value =
        document.getElementById('customerReturns').value =
        document.getElementById('quotes').value =
        document.getElementById('renewals').value =
        document.getElementById('localSelling').value = ''
        document.getElementById('demo').value = ''
        document.getElementById('error').innerHTML = ''
}

function getAllApps() {
    return metadata.allApps;
}

function getEditionsByApp(appId) {
    return metadata.editions[appId] || [];
}

function appChange() {
    Reset()
    var appSelected = document.getElementById("appList").value
    modifyEditionsBasedOnApp(appSelected)
    hideElementsBasedOnApp(appSelected)
}

function hideElementsBasedOnApp(app) {
    var allDivs = ['nstore_div', 'nfba_div', 'transferOrder_div', 'customerReturns_div', 'payouts_div', 'quotes_div', 'renewals_div', 'bundle_div', 'localSelling_div']
    var supportedDivItem = metadata.addOns[app] || []
    allDivs.forEach(div => {
        if (supportedDivItem.includes(div))
            document.getElementById(div).style.display = "block";
        else
            document.getElementById(div).style.display = "none";
    });
}

function modifyEditionsBasedOnApp(appId) {
    var editionElement = document.getElementById("edition")
    var correspondingEditions = getEditionsByApp(appId)
    var i, L = editionElement.options.length - 1
    for (i = L; i >= 0; i--) {
        editionElement.remove(i)
    }
    for (var i = 0; i < correspondingEditions.length; i++) {
        var option = document.createElement('option')
        option.text = correspondingEditions[i].text
        option.value = correspondingEditions[i].value
        editionElement.add(option)
    }
}

function appLoad() {
    var allAppList = getAllApps();
    let options = allAppList.map(item => `<option value=${item.id}>${item.name}</option>`).join('\n');
    var appElement = document.getElementById("appList");
    appElement.innerHTML = options;

}


document.addEventListener("DOMContentLoaded", function (event) {
    appLoad();
    var appSelected = document.getElementById("appList").value
    hideElementsBasedOnApp(appSelected)
    const element = document.getElementById("bundle");
    element.addEventListener("change", function(event) {
        if(document.getElementById('appList').value == "amazonio") {
            document.getElementById('nfba').value = Number(event.target.value);
            document.getElementById('transferOrder').value = Number(event.target.value);
            document.getElementById('customerReturns').value = Number(event.target.value);
        }
        else if(document.getElementById('appList').value == "amazonmcfio") {
            document.getElementById('nfba').value = Number(event.target.value);
            document.getElementById('transferOrder').value = Number(event.target.value);
        }
    });
});
