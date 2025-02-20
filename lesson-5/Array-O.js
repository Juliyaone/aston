// 2) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 13;

// 1 вариант
// for (O(n²))
// Простой способ – два вложенных цикла.

function findPair(arr, total) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null; // Если пары нет
}

console.log(findPair(arr, total)); // [4, 9]
// Плюсы: Просто, читаемо.
// Минусы: Медленно – O(n²) (двойной цикл).

// 2 вариант
// Set (O(n))
// Более быстрый способ – используем Set для хранения чисел.

function findPair(arr, total) {
  let seen = new Set();

  for (let num of arr) {
    let complement = total - num; // Число, которое дополняет sum

    if (seen.has(complement)) {
      return [complement, num];
    }

    seen.add(num);
  }
  return null;
}

console.log(findPair(arr, total)); // [4, 9]
// Плюсы: Гораздо быстрее – O(n).
// Минусы: Использует дополнительную память (Set).

// 3 вариант
// Два указателя (O(n))
// Работает только на отсортированном массиве.

function findPair(arr, total) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === total) {
      return [arr[left], arr[right]];
    } else if (sum < total) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

console.log(findPair(arr, total)); // [4, 9]
// Плюсы: O(n), не требует памяти.
// Минусы: Только для отсортированного массива!
