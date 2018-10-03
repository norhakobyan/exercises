function recursia(n) {
  if(n <= 0) {
    return 1;
  }
  recursia(n - 1);
  console.log(n);
}

recursia(20);
