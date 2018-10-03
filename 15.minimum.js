function minimum(a, b) {
  let count = 1;
  while(--a && --b){
    ++count;
  }
  return count;
}

console.log(minimum(10, 15));
