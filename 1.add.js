// Case 1
function addCase1(a, b) {
  while(b != 0) {
    let cur = a & b;
    a = a ^ b;
    b = cur << 1;
  }
  return a;
}
console.log(addCase1(11, 12));

// Case 2
function addCase2(a, b) {
  return(a - (-b))
}
console.log(addCase2(5, 6));

// Case 3
function addCase3(a, b){
  while(a > 0) {
    --a;
    ++b;
  }
  while(a < 0) {
    ++a;
    --b;
  }
  return b;
}
console.log(addCase3(50, 38));
