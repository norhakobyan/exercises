function equal(a, b) {
  return !(a ^ b);
}

if(equal(2, 2)) {
  console.log("equal");
} else {
  console.log("not equal");
}
