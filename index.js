/**
 * Given an array of length >= 0, and a positive integer N, this function
 * should return the contents of the array divided into N equally
 * sized arrays.
 *
 * Where the size of the original array cannot be divided equally
 * by N, the final part should have a length equal to the remainder.
 *
 * @param  {array} inputArray the array to split
 * @param  {number} groupSize chunk size of groups to return.
 *
 * @returns {array} the group of arrays
 */
export const groupArrayElements = (inputArray, groupSize) => {

  validateInputs(inputArray, groupSize);

  if (groupSize >= inputArray.length) {
    return inputArray;
  }

  let result = []

  while (inputArray.length) {
    result.push(inputArray.splice(0, groupSize));
  }

  return result;
}


/**
 * Runs some validation on inputs and throw if invalid
 *
 * @param  {} inputArray array to split
 * @param  {} size  size of array chunks
 */
const validateInputs = (inputArray, size) => {
  if (!Array.isArray(inputArray)) {
    throw new TypeError('first paramater of this function must be an array');
  }

  if ((typeof (size) !== 'number') || !Number.isInteger(size)){
    throw new TypeError('second parameter should be an integer');
  }

  if (size <= 0) {
    throw new RangeError('second parameter should be a positive integer')
  }
}
