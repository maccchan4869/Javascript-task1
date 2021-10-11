const maxNum = 100;

//2 は素数なので true を返す
if(num === 2) {
  console.log(num)
} else {
  for(i = 2; i < num; i++) {
    //2以上の数で割ったとき余りが0になれば false を返す。つまり素数ではない。
    if(num % i === 0) {
      break
    }
    if(i + 1 === num) {
      console.log(num)
    }
  }
}

for (var i = 1; i <= maxNum; i++) {
  console.log(i);
}