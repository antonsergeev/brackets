module.exports = function check(str, bracketsConfig) {
  const regex = new RegExp(bracketsConfig.map(brackets => '\\' + brackets.join('\\')).join('|'), 'g');
  let testStr = str;
  while (regex.test(testStr)) {
    testStr = testStr.replace(regex, '');
  }
  return testStr.length === 0;
}
