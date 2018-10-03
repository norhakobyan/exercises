function max(a, b, c) {
  res = a;
  (res < b) && (res = b);
  (res < c) && (res = c);
  return res;
}

function min(a, b, c) {
  res = a;
  (res > b) && (res = b);
  (res > c) && (res = c);
  return res;
}

console.log(max(8, 9, 10));
console.log(min(10, 9, 8));
