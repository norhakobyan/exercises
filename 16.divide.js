function divide(a, b) {
  if(a < b) {
    return 0;
  }
  count = 0;
  while(a >= b) {
    a = a - b;
    ++count;
  }
  return count;
}
console.log(divide(155, 5));
