module.exports = function reverse (n) {
  return +(n.toString().split('').filter(item => isFinite(item)).reverse().join(''));
}
