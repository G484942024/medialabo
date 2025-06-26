b = document.querySelector('button#calc');//ボタンを検索
b.addEventListener('click', addition);//ボタンに関数を登録

p = document.querySelector('span#answer');//spanを検索

function addition(){
  let i1 = document.querySelector('input[name="left"]');
  let i2 = document.querySelector('input[name="right"]');
  let ii1 = parseInt(i1.value);
  let ii2 = parseInt(i2.value);
  let kotae = (ii1 + ii2);
  p.textContent = kotae;
} 
