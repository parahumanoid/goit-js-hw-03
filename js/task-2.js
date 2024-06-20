function formatMessage(message, maxLength) {
    return (maxLength >= message.length) ? message : message.slice(0, maxLength)+"...";
}