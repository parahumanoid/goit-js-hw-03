function makeTransaction(quantity, pricePerDroid, customerCredits){
    let cost = quantity * pricePerDroid;
    if (cost > customerCredits) return "Insufficient funds!";
    else return `You ordered ${quantity} droids worth ${cost} credits!`;
}