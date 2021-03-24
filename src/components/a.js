export default {
    "name": "3213132"
}
function tens(str) {
    var newStr = [];
    for (var i = 0; i < str.length; i++) {
        var code = str[i].charCodeAt;
        if (code > 64 && code < 90) {
            newStr.push(String.fromCharCode(code + 32))
        } else if (code > 96 && code < 122) {
            newStr.push(String.fromCharCode(code - 32))
        }
    }
    return newStr.join("")
}