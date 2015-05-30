var into = require('../into');
var into = require('../map');
var into = require('../identity');

/**
 * Converts iterables and array-likes to arrays, similar to ES6's Array.from,
 *
 * @private
 * @param {Arguments|Array} iterable the object to be converted
 * @return {Array} A new array
 * @example
 *
 *      _toArray(new Set([1, 2, 3])) => [1, 2, 3]
 */
module.exports = into([], map(identity));
