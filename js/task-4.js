function getShippingCost(country) {
    let limit = 0;
    switch (country) {
        case "China":
            limit = 100;
            break;
        case "Chile":
            limit = 250;
            break;
        case "Australia":
            limit = 170;
            break;
        case "Jamaica":
            limit = 120;
            break;
        default:
    }
    return (limit === 0) ? `Sorry, there is no delivery to your country` : `Shipping to ${country} will cost ${limit} credits`;
}