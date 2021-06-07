/**
 * Divides an input array in to smaller sub arrays with a length less
 * than or equal to the specified groupSize
 * @param  {} inputArray
 * @param  {} groupSize
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
