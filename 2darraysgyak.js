const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

let arr = generate2d(20, 20);

const fill2dArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 3 + 1);
    }
  }
  return arr;
};

const findSor = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1 && arr[i][j + 1] === 2 && arr[i][j + 2] === 3) {
        sum += arr[i][j];
      }
    }
    return sum;
  }
};

const findOszlop = (arr) => {
  let sum = 0;
  // for

  // for2
  // if
  sum += arr[i][j];
  return sum;
};

console.log(fill2dArray(arr));
console.log(findSor(arr));
console.log(findOszlop(arr));
