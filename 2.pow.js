// Case 1
function powCase1(a, b) {
  if(b == 0) {
    return 1;
  }
  let res = a;
  let result = a;
  for(let i = 1; i < b; ++i) {
    for(let j = 1; j < a; ++j) {
      res = res + result;
    }
    result = res;
  }
  return res;
}
console.log(powCase1(7, 3));

// Case 2
function powCase2(a, b) {
  if(b == 0) {
    return 1;
  }
  let res = powCase2(a, b - 1);
  let cur = 0;
  for(let i = 0; i < a; ++i) {
    cur = cur + res;
  }
  return cur;
}
console.log(powCase2(5, 3));
