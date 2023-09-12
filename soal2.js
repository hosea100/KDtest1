// 2. Buatlah fungsi dengan input array of number dan number 
// untuk menemukan jumlah maksimum subarray dengan panjang angka 
// yang dimasukan ke fungsi

// Input : ([100, 200, 300, 400], 2)
// Expected Output : 700 		// didapatkan dari 300 + 400

// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)
// Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23

// Input : ([-3, 4, 0, -2, 6, -1], 2)
// Expected Output : 5 		// didapatkan dari 6 + -1

function findMaxumSuba(array, length) {
  let maxum = 0;

  // iterate over the input given 
  for (let i = 0; i <= array.length - length; i++) {
    const subarray = array.slice(i, i + length);    // slice the array to its respective subarray within the input range
    const sum = subarray.reduce((acc, curr) => acc + curr, 0);    // find the maximum sum of subarray inside of array
    if (sum > maxum) {
      maxum = sum;
    }
  }

  return maxum;
}

const input1 = [100, 200, 300, 400];
const input2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const input3 = [-3, 4, 0, -2, 6, -1];

console.log(findMaxumSuba(input1, 2));
console.log(findMaxumSuba(input2, 4));
console.log(findMaxumSuba(input3, 2)); 

module.exports = findMaxumSuba;