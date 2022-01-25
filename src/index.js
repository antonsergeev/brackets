module.exports = function check(str, bracketsConfig) {
  const special_characters = '()[]{}||'.split('')
  const bracketsConfigForRegExp = bracketsConfig.map(brackets => brackets.map(bracket => special_characters.includes(bracket) ? '\\' + bracket : bracket).join(''));
  const regex = new RegExp(bracketsConfigForRegExp.join('|'), 'g');
  let testStr = str;
  console.log(`regex = ${regex}`)
  while (regex.test(testStr)) {
    testStr = testStr.replace(regex, '');
  }
  return testStr.length === 0;
}
