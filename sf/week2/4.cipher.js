function cipherText(str, key) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode + key - 65) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode + key - 97) % 26 + 97);
    } else {
      result += str[i];
    }
  }
  return result;
}
