function checkForSpam(message) {
    let testline = message.toLowerCase();
    return (testline.includes("sale") || testline.includes("spam")) ? true : false;
}