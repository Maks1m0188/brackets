module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBracket = [];
  let bracketPair = {};

  for (let key of bracketsConfig) {
    openBracket.push(key[0]);
    Object.assign(bracketPair, {[key[1]]: key[0]});
  }

  for (let i=0; i<str.length; i++) {
    let current = str[i];
    let top = stack[stack.length - 1];

    if (top && bracketPair[current] === top) {
      stack.pop();
    }
    else {
      if (openBracket.includes(current)) {
        stack.push(current);
      }
      else return false;      
      if (stack.length === 0) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
