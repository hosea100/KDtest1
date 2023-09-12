const chai = require('chai');
const bobaSortDescending = require('./soal1');
const findMaxumSuba = require('./soal2');
const getSumOfEvenNumbers = require('./soal3.js');

const expect = chai.expect;

describe('1) Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript', () => {
  it('should sort an array in descending order = [5, 4, 3, 3, 2, 2, 1, 1]', () => {
    const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
    const sortedArray = bobaSortDescending(inputArray);
    expect(sortedArray).to.deep.equal([5, 4, 3, 3, 2, 2, 1, 1]);
  });
});

describe('2) Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi', () => {
  it('should find the maximum subarray sum for input1 = 700', () => {
    const input1 = [100, 200, 300, 400];
    const res = findMaxumSuba(input1, 2);
    expect(res).to.equal(700);
  });

  it('should find the maximum subarray sum for input2 = 39', () => {
    const input2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const res = findMaxumSuba(input2, 4);
    expect(res).to.equal(39);
  });

  it('should find the maximum subarray sum for input3 = 5', () => {
    const input3 = [-3, 4, 0, -2, 6, -1];
    const res = findMaxumSuba(input3, 2);
    expect(res).to.equal(5);
  });
});

describe('3) Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek', () => {
  it('should calculate the sum of even numbers in input1 = 6', () => {
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
    };
    const result = getSumOfEvenNumbers(input1);
    expect(result).to.equal(6);
  });

  it('should calculate the sum of even numbers in input1 = 12', () => {
    const input2 = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: 'car' }
    };
    const result = getSumOfEvenNumbers(input2);
    expect(result).to.equal(12);
  });
});