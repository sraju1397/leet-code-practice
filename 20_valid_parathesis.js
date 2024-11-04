function validParathesis(s) {
  var open = '{([';
  var close = '})]';
  var match = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  var stack = [];

  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (open.includes(letter)) {
      stack.push(letter);
    } else if (close.includes(letter)) {
      if (stack.length === 0) return false;

      var removedLetter = stack.pop();
      if (match[letter] !== removedLetter) return false;
    }
  }

  return stack.length === 0;
}