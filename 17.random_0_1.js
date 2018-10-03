function random() {
  let rand = Math.random() * 100;
  return(rand % 2);
}

let arr = [];
for(let i = 0; i < 30; ++i) {
  var c = random();
  var d = random();
  var e = (c & d);
  arr.push(e);
}

console.log(arr);
