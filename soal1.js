// 1. Buatlah fungsi dengan input array of number untuk 
// mengurutkan angka dari terbesar ke terkecil dengan manual 
// tanpa fungsi bawaan javascript

// Input : [1, 2, 4, 3, 5, 3, 2, 1]
// Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

function bobaSortDescending(inputArray) {
  const arrayTempc = inputArray.slice(); // create temporary copy of array to avoid modifying the original array
  const n = arrayTempc.length;
  let bobaSwap;

  do {
    bobaSwap = false;
    for (let i = 0; i < n - 1; i++) {
      if (arrayTempc[i] < arrayTempc[i + 1]) {
        // swap elements if they are in the wrong descending order ex: 5, 3 => 3, 5
        const temp = arrayTempc[i];
        arrayTempc[i] = arrayTempc[i + 1];
        arrayTempc[i + 1] = temp;
        bobaSwap = true;
      }
    }
  } while (bobaSwap);

  return arrayTempc;
}

const input = [1, 2, 4, 3, 5, 3, 2, 1];
const sortedArray = bobaSortDescending(input);
console.log(sortedArray);