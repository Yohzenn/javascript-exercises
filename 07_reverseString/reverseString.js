const reverseString = function(word) {
    let wordLength = word.length
    let messageReversed = ""

    for ( i = wordLength - 1; i >= 0; i--){
        messageReversed += word[i]
    }
    return messageReversed
};
// Do not edit below this line
module.exports = reverseString;
