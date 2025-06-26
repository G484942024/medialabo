let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kk = 0; 

// ボタンが押されたら
let b = document.querySelector('button#go'); // ボタンを検索
b.addEventListener('click', hantei); // ボタンに関数を登録

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let y = document.querySelector('input#input');
    let yy = parseInt(y.value);

    // 課題3-1: 正解判定する
    kk++; // 予想回数を増やす
    console.log(kk);

    let yoso = document.querySelector('span#answer');
    yoso.textContent = yy;

    let result = document.querySelector('p#result'); // resultをここで定義
    if (kk >= 4) {
        result.textContent = ('答えは ' + kotae + ' でした. すでにゲームは終わっています');
    } else {
        if (yy === kotae) { // Correct
            result.textContent = ('正解です. おめでとう!');
        } else { // Incorrect
            if (kk === 3) {
                result.textContent = ('まちがい. 残念でした答えは ' + kotae + ' です.');
            } else if (yy < kotae) {
                result.textContent = ('まちがい. 答えはもっと大きいですよ');
            } else if (yy > kotae) {
                result.textContent = ('まちがい. 答えはもっと小さいですよ');
            }
        }
    }
}


