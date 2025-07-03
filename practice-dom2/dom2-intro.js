b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);

function changeDom(){
    //5-2: 「ヨット」を追加
    let l = document.createElement('li');
    l.textContent = 'ヨット';
    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend', l);

    //5-3: ブルームーンと拓殖大学HPのリンクを追加
    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    let a =　document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

    //5-4: ul要素の削除
    l = document.querySelector('li#mochi');
    l.remove();
    u = document.querySelector('ul#kassen');
    u.remove();

    //5-5: ul要素を新規作成
    u = document.createElement('ul');
    l = document.createElement('li');

    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');

    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');

    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);

    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);
}
