var _curry1 = require('./internal/_curry1');
var _toArray = require('./internal/_toArray.js');
var equals = require('./equals');
var uniqWith = require('./uniqWith');


/**
 * Returns a new list containing only one copy of each element in the original list.
 * `R.equals` is used to determine equality.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
module.exports = (function uniq(list) {
  // Rely on the native Set implementation if available for performance reasons (see
  if (typeof Set == 'function') {
    return _curry1(function uniq(list) {
      return _toArray(new Set(list));
    });
  }
  return uniqWith(equals);
}());
