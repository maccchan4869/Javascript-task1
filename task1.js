const maxNum = 300;

//2 は素数なので true を返す

for (var num = 1; num <= maxNum; num++) {
  
if(num === 2) {
  //""で囲むと文字列として認識してくれる。厳密比較演算子。文字なのか数字なのかまで判定してくれる。
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
}