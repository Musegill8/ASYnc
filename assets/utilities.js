function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

const footer = 'Prefix: !';

module.exports = {
    capitalizeWords,
    footer
}