// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek

// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6

// Input:
// {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 4}, ee: 'car'}
// };
// Output: 12

function getSumOfEvenNumbers(obj) {
  let sum = 0;

  function traverse(obj) {
    for (let key in obj) {
      const value = obj[key];
      if (typeof value === 'number' && value % 2 === 0) {
        sum += value;
      } else if (typeof value === 'object') {
        traverse(value);
      }
    }
  }

  traverse(obj);
  return sum;
}

const input1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const input2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: 'car' }
};

const input3 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
      thisIsANumberLmao: "2",
      thisIsTheRealNumberSorry: 22,
      subasuba: {
        quack: 10,
      }
    }
  }
}

console.log(getSumOfEvenNumbers(input1)); // 6
console.log(getSumOfEvenNumbers(input2)); // 12
console.log(getSumOfEvenNumbers(input3)); // 38