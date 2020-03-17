module.exports = function check(str, bracketsConfig) {
  let array = str.split('');

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      //if we find a pair from the bracketsConfig in the array
      if (array[i] === bracketsConfig[j][0] && array[i + 1] === bracketsConfig[j][1]) {
        //remove this pair from the array
        array.splice(i, 2);
        //start iterating through the array from the beginning
        i = -1;
      }
    }
  }

  //if all the brackets in the array are in pairs, it should be empty in the end
  if (array.length === 0) return true;
  return false;
}