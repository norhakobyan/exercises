// Case 1
function odd_even(n) {
  let arr = ["odd", "even"];
  return arr[n & 1];
}

console.log(odd_even(77));


// Case 2
function odd_evenCase1(n) {
  ((n % 2) == 0 && console.log("odd")) || console.log("even");
}
odd_evenCase1(5);
