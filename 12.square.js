// Case 1
function square(n) {
  let res = 1;
  let sq = 0;
  while(n--) {
    sq = sq + res;
    res = res + 2;
  }
  return sq;
}
console.log(square(4));


// Case 2;
function squareCase2(n) {
  let res = 0;
  for(let i = 0; i < n; ++i) {
    res = res + n;
  }
  return res;
}

console.log(squareCase2(5));
