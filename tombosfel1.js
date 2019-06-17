const generateArray = (size) => {
  let tomb = [];
  for (let i = 0; i < size; i++) {
    tomb[i] = Math.floor(Math.random() * 10 + 1);
  }
  return tomb;
};

function tomb () {
  let tomb1 = generateArray(5);
  let tomb2 = generateArray(6);

  console.log(tomb1);
  console.log(tomb2);

  const maxArray = (tomb2) => {
    let max = tomb2[0];
    for (let i = 0; i < tomb2.length; i++) {
      if (tomb2[i] > max) {
        max = tomb2[i];
      }
    }
    return max;
  };

  console.log(maxArray(tomb2));

  const minArray = (tomb1) => {
    let min = tomb1[0];
    for (let i = 0; i < tomb1.length; i++) {
      if (tomb1[i] < min) {
        min = tomb1[i];
      }
    }
    return min;
  };

  console.log(minArray(tomb1));

  console.log(maxArray(tomb2) - minArray(tomb1));
}

tomb();
