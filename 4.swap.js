// Case 1
function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return console.log(a + " " + b);
}
swap(5, 6);


// Case 2
function swapStr(a, b) {
  a = a.concat(b);
  b = a.slice(0, a.length - b.length);
  a = a.slice(b.length, a.length);
  console.log(a + " " + b);
}
swapStr("World!", "Hello,");
