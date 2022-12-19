const metadata = {
    'allApps': [
        { 'id': 'amazonio', 'name': 'Amazon - NetSuite' },
        { 'id': 'amazonmcfio', 'name': 'Amazon MCF - NetSuite' },
        { 'id': 'magento2', 'name': 'Magento 2 - NetSuite' },
        { 'id': 'shopify', 'name': 'Shopify - NetSuite' },
        { 'id': 'walmartio', 'name': 'Walmart - NetSuite' },
        //{ 'id': 'jetio', 'name': 'Jet - NetSuite' },
        { 'id': 'ebaio', 'name': 'eBay - NetSuite' },
        { 'id': 'sfnsio', 'name': 'Salesforce - NetSuite' },
        { 'id': 'zendeskio', 'name': 'Zendesk Support - NetSuite' },
        { 'id': 'bgcio', 'name': 'BigCommerce - NetSuite' },
        { 'id': 'squareio', 'name': 'Square - NetSuite' }
    ],
    'addOns': {
        'amazonio': ['bundle_div', 'nstore_div', 'nfba_div', 'transferOrder_div', 'customerReturns_div', 'localSelling_div'],
        'amazonmcfio': ['bundle_div', 'nstore_div', 'nfba_div', 'transferOrder_div'],
        'magento2': ['nstore_div'],
        'shopify': ['nstore_div', 'payouts_div'],
        'walmartio': ['nstore_div'],
        'jetio': ['nstore_div'],
        'ebaio': ['nstore_div'],
        'sfnsio': ['quotes_div', 'renewals_div'],
        'zendeskio': [],
        'squareio': ['nstore_div'],
        'bgcio': ['nstore_div']
    },
    'editions': {
        'amazonio': [
            { 'value': 'starter', 'text': 'Starter' },
            { 'value': 'standard', 'text': 'Standard' },
            { 'value': 'premium', 'text': 'Premium' }],
        'magento2': [
            { 'value': 'starter', 'text': 'Starter' },
            { 'value': 'standard', 'text': 'Standard' },
            { 'value': 'premium', 'text': 'Premium' }],
        'shopify': [
            { 'value': 'starter', 'text': 'Starter' },
            { 'value': 'standard', 'text': 'Standard' },
            { 'value': 'premium', 'text': 'Premium' },
            { 'value': 'shopifyMarkets', 'text': 'Shopify Markets'}],
        'bgcio': [
            { 'value': 'starter', 'text': 'Starter' },
            { 'value': 'standard', 'text': 'Standard' },
            { 'value': 'premium', 'text': 'Premium' }],
        'walmartio': [
            { 'value': 'starter', 'text': 'Starter' },
            { 'value': 'standard', 'text': 'Standard' }],
        'jetio': [
            { 'value': 'standard', 'text': 'Standard' },
            { 'value': 'premium', 'text': 'Premium' },
            { 'value': 'enterprise', 'text': 'Enterprise' }],
        'ebaio': [
            { 'value': 'starter', 'text': 'Starter' },
            { 'value': 'standard', 'text': 'Standard' }],
        'zendeskio': [
            { 'value': 'starter', 'text': 'Starter' },
            { 'value': 'standard', 'text': 'Standard' }],
        'amazonmcfio': [{ 'value': 'starter', 'text': 'Starter' }],
        'squareio': [{ 'value': 'starter', 'text': 'Starter' }],
        'sfnsio': [
            { 'value': 'standard', 'text': 'Standard' },
            { 'value': 'premium', 'text': 'Premium' }],
    }
}