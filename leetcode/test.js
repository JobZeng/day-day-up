const isUgly = function (n) {
  if (n <= 0) {
    return false;
  } else {
    let num = n;
    while (num % 2 === 0) {
      num = num / 2;
    }
    while(num % 3 === 0) {
      num = num / 3;
    }
    while(num % 5 === 0) {
      num = num / 5;
    }
    return num === 1 ? true : false;
  }
};
const uglyNum = function (n) {
  const factor = [2, 3, 5];
  let tmp = []
  for (let i = 1; i <= 1690; i++) {
    if(n === (tmp.length - 1)) {
      return tmp[n-1]
    }
    if(isUgly(i)) {
      tmp.push(i)
    }
  }
  console.log(tmp);
};

console.log(uglyNum(10));
