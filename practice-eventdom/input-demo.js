b = document.querySelector('button#print');//ボタンを検索
b.addEventListener('click', greeting);//ボタンに関数を登録

p = document.querySelector('p#message');//pを検索

function greeting(){
  //console.log('こんにちは');
  let i = document.querySelector('input[name="shimei"]');
  let shimei = i.value;
  let aisatsu = ('こんにちは, ' + shimei + 'さん');
  p.textContent = aisatsu;
} 
