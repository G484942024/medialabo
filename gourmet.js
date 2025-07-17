// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
    console.log('1件目の検索結果');
    //店名
    console.log('店名: ' + data.results.shop[0].name);
    //アクセス
    console.log('アクセス: ' + data.results.shop[0].access);
    //住所
    console.log('住所: ' + data.results.shop[0].address);
    //最寄駅
    console.log('最寄駅: ' + data.results.shop[0].station_name);
    //予算
    console.log('予算: ' + data.results.shop[0].budget.name);
    //営業時間
    console.log('営業時間: ' + data.results.shop[0].open);


    console.log('2件目の検索結果');
    //店名
    console.log('店名: ' + data.results.shop[1].name);
    //アクセス
    console.log('アクセス: ' + data.results.shop[1].access);
    //住所
    console.log('住所: ' + data.results.shop[1].address);
    //最寄駅
    console.log('最寄駅: ' + data.results.shop[1].station_name);
    //予算
    console.log('予算: ' + data.results.shop[1].budget.name);
    //営業時間
    console.log('営業時間: ' + data.results.shop[1].open);
}

//ユーザが入力した検索キーを表示
let input1 = document.querySelector('button#input1');
input1.addEventListener('click', sendRequest);

function showi1(){
    let box1 = document.querySelector('input#input1');
    let b1 = box1.value;
    console.log(b1);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data){
    let result = document.querySelector('#result');
    let shops = data.results.shop;

    remove = document.getElementById('words');
    console.log(remove);
    //remove.remove();

    let shop, div;
    for(let i=0; i<shops.length; i++){
        shop = shops[i];
        div = document.createElement('div');
        div.setAttribute('id', 'words');

        let h3 = document.createElement('h3');
        h3.textContent = shop.name;
        div.insertAdjacentElement('beforeend', h3);

        let ul = document.createElement('ul');
        let li;
        let items = [
          { label: 'キャッチコピー', value: shop.catch },
          { label: 'ジャンル', value: shop.genre.name },
          //{ label: 'サブジャンル', value: shop.subgenre.name },
          { label: 'アクセス', value: shop.access },
          { label: '住所', value: shop.address },
          { label: '最寄駅', value: shop.station_name },
          { label: '予算', value: shop.budget.name },
          { label: '営業日時', value: shop.open }
        ];

        for(let item of items){
            li = document.createElement('li');

            let strong = document.createElement('strong');
            strong.textcontent = item.label + ':';

            li.insertAdjacentElement('beforeend', strong);
            li.insertAdjacentText('beforeend', ' ' + item.value);

            ul.insertAdjacentElement('beforeend', li);
        }
        div.insertAdjacentElement('beforeend', ul);
        result.insertAdjacentElement('beforeend', div);
    }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
        let n = document.querySelector('select#input1').value;
        let id;
        switch (n) {
            case '居酒屋':
                id = 'G001';
                break;
            case 'ダイニングバー・バル'://データ消失によりヒット数0
                id = 'G002';
                break;
            case '創作料理':
                id = 'G003';
                break;
            case '和食':
                id = 'G004';
                break;
            case '洋食':
                id = 'G005';
                break;
            case 'イタリアン・フレンチ':
                id = 'G006';
                break;
            case '中華':
                id = 'G007';
                break;
            case '焼肉・ホルモン':
                id = 'G008';
                break;
            case 'アジア・エスニック料理':
                id = 'G009';
                break;
            case '各国料理':
                id = 'G010';
                break;
            case 'カラオケ・パーティ':
                id = 'G011';
                break;
            case 'バー・カクテル':
                id = 'G012';
                break;
            case 'ラーメン':
                id = 'G013';
                break;
            case 'カフェ・スイーツ':
                id = 'G014';
                break;
            case 'その他グルメ':
                id = 'G015';
                break;
            case 'お好み焼き・もんじゃ':
                id = 'G016';
                break;
            case '韓国料理':
                id = 'G017';
                break;

        }
    let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + id + '.json';
    console.log(id);

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "results": {
    "api_version": "1.26",
    "results_available": 52,
    "results_returned": "10",
    "results_start": 1,
    "shop": [
      {
        "access": "京王八王子駅を背にし右手に見えるローソンの隣のビル、ホテルザ・ビーの2階です。",
        "address": "東京都八王子市明神町４-6-12　ホテル・ザ・ビー八王子（旧八王子プラザホテル）2F",
        "band": "可",
        "barrier_free": "なし",
        "budget": {
          "average": "ディナー3000円",
          "code": "B003",
          "name": "3001～4000円"
        },
        "budget_memo": "",
        "capacity": 100,
        "card": "利用可",
        "catch": "【サプライズ演出有】 結婚パーティー受付中",
        "charter": "貸切可 ：VIPルーム1部屋2～15名様前後（完全個室）/パーティーフロア！50型モニター・スポットライト等充実",
        "child": "お子様連れOK",
        "close": "不定休有り。店休時は店長携帯電話09035324825まで問い合わせください♪",
        "coupon_urls": {
          "pc": "https://www.hotpepper.jp/strJ000989843/map/?vos=nhppalsa000016",
          "sp": "https://www.hotpepper.jp/strJ000989843/scoupon/?vos=nhppalsa000016"
        },
        "course": "あり",
        "english": "なし",
        "free_drink": "あり",
        "free_food": "なし",
        "genre": {
          "catch": "大人の社交場非日常を味わうダイニング",
          "code": "G001",
          "name": "居酒屋"
        },
        "horigotatsu": "なし",
        "id": "J000989843",
        "karaoke": "あり",
        "ktai_coupon": 0,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.6585460152,
        "lng": 139.34327231,
        "logo_image": "https://imgfp.hotp.jp/IMGH/21/04/P038512104/P038512104_69.jpg",
        "lunch": "なし",
        "middle_area": {
          "code": "Y110",
          "name": "八王子・立川"
        },
        "midnight": "営業していない",
        "mobile_access": "京王八王子駅1分/JR八王子駅北口5分",
        "name": "バグダッドカフェ Bagdadcafe/モータウン MOTOWN",
        "name_kana": "ばぐだっどかふぇもーたうんはちおうじ",
        "non_smoking": "禁煙席なし",
        "open": "月～日、祝日、祝前日: 17:00～21:00 （料理L.O. 20:00 ドリンクL.O. 20:00）",
        "other_memo": "ステージ・マイク・カラオケ等",
        "parking": "なし",
        "party_capacity": 250,
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_58_s.jpg"
          }
        },
        "private_room": "あり ：VIPルーム1部屋2～15名様前後（完全個室）/パーティーフロア",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "ご質問、ご要望はお気軽にお問い合わせください♪",
        "show": "あり",
        "small_area": {
          "code": "X220",
          "name": "八王子"
        },
        "station_name": "京王八王子",
        "sub_genre": {
          "code": "G002",
          "name": "ダイニングバー・バル"
        },
        "tatami": "なし",
        "tv": "あり",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ000989843/?vos=nhppalsa000016"
        },
        "wedding": "大歓迎！ステージ・マイク・音響・映像等、設備充実！！最大200名様まで是非どうぞ★",
        "wifi": "あり"
      },
      {
        "access": "ＪＲ八王子駅北口徒歩1分/京王八王子駅徒歩3分",
        "address": "東京都八王子市東町12-14",
        "band": "不可",
        "barrier_free": "あり ：スタッフがお手伝いさせて頂きます。ご不明な点等お気軽にお声掛け下さい。事前のお問い合わせも◎",
        "budget": {
          "average": "2,000円(通常平均) 3,000円(宴会平均) ",
          "code": "B002",
          "name": "2001～3000円"
        },
        "budget_memo": "",
        "capacity": 100,
        "card": "利用可",
        "catch": "2.5時間飲み放題付2000円~ 【★少人数様ソファー★】",
        "charter": "貸切可 ：八王子で人気の個室バル最大50名様まで対応できます。20名様～フロア貸切応相談　最大100名様までOK",
        "child": "お子様連れ歓迎 ：チャイルドシートもご用意しています。お子様連れのママ会・ご家族でのご利用にもお気軽にどうぞ♪",
        "close": "【年中無休】貸切宴会のご予約も絶賛受付中！最大100名様までご利用可能ですので、会社宴会 同窓会 宴会にオススメ♪",
        "coupon_urls": {
          "pc": "https://www.hotpepper.jp/strJ001275177/map/?vos=nhppalsa000016",
          "sp": "https://www.hotpepper.jp/strJ001275177/scoupon/?vos=nhppalsa000016"
        },
        "course": "あり",
        "english": "なし",
        "free_drink": "あり ：★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "free_food": "あり ：★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "genre": {
          "catch": "八王子 個室居酒屋 飲み放題 肉バル 女子会",
          "code": "G001",
          "name": "居酒屋"
        },
        "horigotatsu": "なし ：温かな照明と開放的な店内で楽しくご宴会♪八王子での宴会 飲み会 女子会 二次会 合コンに◎",
        "id": "J001275177",
        "karaoke": "なし",
        "ktai_coupon": 0,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.6582259169,
        "lng": 139.3381858122,
        "logo_image": "https://imgfp.hotp.jp/IMGH/61/98/P038366198/P038366198_69.jpg",
        "lunch": "なし",
        "middle_area": {
          "code": "Y110",
          "name": "八王子・立川"
        },
        "midnight": "営業している",
        "mobile_access": "JR八王子駅北口徒歩1分/京王八王子駅徒歩3分",
        "name": "隠れ家バル Funny&Bouquet",
        "name_kana": "かくれやばる　ふぁにーあんどぶーけ",
        "non_smoking": "禁煙席なし",
        "open": "月～日、祝日、祝前日: 17:00～翌5:00 （料理L.O. 翌3:00 ドリンクL.O. 翌4:00）",
        "other_memo": "個室や貸切の詳細等お気軽にお電話にてお問い合わせください。八王子での飲み会に◎",
        "parking": "なし ：お近くのコインパーキングをご利用下さい。",
        "party_capacity": 50,
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_58_s.jpg"
          }
        },
        "private_room": "なし ：個室　2名×4室　4名×8室　8名～10名×4室　20名～40名×2室",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "show": "なし",
        "small_area": {
          "code": "X220",
          "name": "八王子"
        },
        "station_name": "八王子",
        "sub_genre": {
          "code": "G002",
          "name": "ダイニングバー・バル"
        },
        "tatami": "なし ：八王子で人気のお座敷個室！最大50名様まで対応できます。",
        "tv": "あり",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ001275177/?vos=nhppalsa000016"
        },
        "wedding": "八王子での結婚式の二次会や同窓会、打ち上げパーティー等多様なシーンにご利用下さい",
        "wifi": "あり"
      }
    ]
  }
};

