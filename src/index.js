module.exports = function check(str, bracketsConfig) {
  const specialCharacters = '()[]{}||'.split('')
  const bracketsConfigForRegExp = bracketsConfig.map(brackets => brackets.map(bracket => specialCharacters.includes(bracket) ? '\\' + bracket : bracket).join(''));
  const regex = new RegExp(bracketsConfigForRegExp.join('|'), 'g');
  let testStr = str;
  while (regex.test(testStr)) {
    testStr = testStr.replace(regex, '');
  }
  return testStr.length === 0;
}
