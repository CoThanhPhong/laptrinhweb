// Bài 1
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Bài 2
function sumOddNumbers(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Bài 3
function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Bài 4
function countPositiveNumbers(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}

// Bài 5
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Bài 6
function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Bài 7
function isAscending(arr) {
    if (arr.length <= 1) return false;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Bài 8
function countGreaterThan(arr, value) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            count++;
        }
    }
    return count;
}

// Bài 9
function alternateSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += arr[i];
        } else {
            sum -= arr[i];
        }
    }
    return sum;
}

// Bài 10
function sumOfSquares(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

// Bài 11
function filterEvensAndSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Bài 12
function findLongestWord(arr) {
    var longest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

// Bài 13
function calculateGrade(arr) {
    if (arr.length === 0) return "F";
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    return "F";
}

// Bài 14
function findMissingNumber(arr, n) {
    var totalSum = (n * (n + 1)) / 2;
    var arrSum = 0;
    for (var i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return totalSum - arrSum;
}

// Bài 15
function removeDuplicates(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Bài 16
function findPairsWithSum(arr, sum) {
    var pairs = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

// KẾT QUẢ CHẠY BÀI TẬP (Mở F12 / Console để xem)
console.log("--- Bài 1 ---");
console.log(findMax([1, 3, 5, 7, 9]));
console.log(findMax([10, 20, 30, 40, 50]));
console.log(findMax([-5, -2, -1, -3]));

console.log("--- Bài 2 ---");
console.log(sumOddNumbers([1, 2, 3, 4, 5]));

console.log("--- Bài 3 ---");
console.log(findMin([5, 2, 8, 1, 4]));

console.log("--- Bài 4 ---");
console.log(countPositiveNumbers([-1, 2, 3, -4, 5]));

console.log("--- Bài 5 ---");
console.log(sumArray([1, 2, 3, 4, 5]));

console.log("--- Bài 6 ---");
console.log(calculateAverage([10, 20, 30, 40, 50]));

console.log("--- Bài 7 ---");
console.log(isAscending([1, 2, 3, 5]));

console.log("--- Bài 8 ---");
console.log(countGreaterThan([1, 5, 7, 2, 3], 3));
console.log(countGreaterThan([2, 3, 1, -6, 8], 5));
console.log(countGreaterThan([], 5));

console.log("--- Bài 9 ---");
console.log(alternateSum([10, 5, 6, 3]));
console.log(alternateSum([1, 2, 3, 4, 5]));

console.log("--- Bài 10 ---");
console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfSquares([4, 5, 6]));

console.log("--- Bài 11 ---");
console.log(filterEvensAndSum([1, 2, 3, 4, 5, 6]));
console.log(filterEvensAndSum([12, 14, 15, 19, 20, 100]));

console.log("--- Bài 12 ---");
console.log(findLongestWord(["apple", "banana", "cherry", "date"]));
console.log(findLongestWord(["hello", "world", "this", "is", "great"]));

console.log("--- Bài 13 ---");
console.log(calculateGrade([85, 90, 92]));

console.log("--- Bài 14 ---");
console.log(findMissingNumber([1, 2, 4, 5, 6], 6));
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8));
console.log(findMissingNumber([1, 2, 3, 4], 4));

console.log("--- Bài 15 ---");
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

console.log("--- Bài 16 ---");
console.log(findPairsWithSum([1, 2, 3, 4, 5], 5));