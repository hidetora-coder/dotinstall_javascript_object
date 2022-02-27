"use strict";

//! #1 配列を作ってみよう
{
  // const score1 = 80;
  // const score2 = 90;
  // const score3 = 40;

  const scores = [80, 90, 40]; // 配列は[]に入れる
  console.log(scores);
}

//! #2 配列の要素にアクセスしてみよう
{
  const scores = [80, 90, 40];
  console.log(scores[1]); // => 定数・変数[インデックス]

  scores[2] = 44; // 配列の更新
  console.log(scores);
  console.log(scores.length);
}

//! #3 配列とループを組み合わせよう
{
  const scores = [80, 90, 40];
  // console.log(scores[0]);
  // console.log(scores[1]);
  // console.log(scores[2]);

  // for (let i = 0; i < 3; i++) {
  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}

//! #4 配列の要素を変更してみよう
{
  const a = [10, 40, 12, 22];
  a.push(21, 44, 90); // pushで配列に要素を追加　,で複数可能
  a.shift(); // shiftで先頭から要素を削除

  console.log(a);
}

//! #5 splice()で配列を変更してみよう
{
  const a = [10, 40, 12, 22];
  a.splice(1, 2, 30, 80); // インデックス１から２つの要素を削除し、30,80を配列に追加
  console.log(a);
}

//! #6 スプレッド構文ンを使ってみよう
{
  const otherScores = [10, 20];
  const scores = [80, 90, 40, 70, ...otherScores]; // ...変数名で配列内に配列の要素を組み込める

  console.log(scores);

  function sum(a, b) {
    console.log(a + b);
  }

  sum(...otherScores);
  // sum(10, 20) と同義
}

//! #7 分割代入を使ってみよう
{
  console.log("----------------");
  const scores = [80, 90, 40, 70];

  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // const [a, b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);

  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);
}

//! #8 forEach()をつかってみよう
{
  console.log("----------------");
  const scores = [80, 90, 40, 70];

  //? 第２引数でインデックス番号を受け取れる
  scores.forEach((score, index) => {
    console.log(`Score ${index}: ${score}`);
  });
}

//! #9 map()をつかってみよう
{
  console.log("----------------");

  // それぞれの要素にプラス２０円
  const prices = [180, 190, 200];
  console.log(prices);

  //* mapメソッドは配列の各要素に何らかの処理をして、別の配列を作る際に便利
  // const updatedPrices = prices.map((price) => {
  //   return price + 20;
  // });
  const updatedPrices = prices.map((price) => price + 20);
  console.log(updatedPrices);
}

//! #10 filter()を使ってみよう
//配列の要素のうち条件に合うものだけを抽出して別の配列として取得する
{
  const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter((number) => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
  });

  console.log(evenNumbers);
}

//! #11 オブジェクトを作ってみよう
{
  // const point = [100, 180];

  const point = { x: 100, y: 180 };
  console.log(point);
}

//! #12 プロパティを操作してみよう
{
  const point = {
    x: 100,
    y: 180,
  };

  // プロパティーの取得
  console.log(point.x);
  console.log(point[`x`]);

  // プロパティの変更
  point.x = 120;
  point[`y`] = 100;

  // プロパティの追加
  point.z = 100;
  console.log(point);

  // プロパティの削除
  delete point.z;
  console.log(point);
}

//! #13 オブジェクトを操作してみよう

{
  // スプレッド構文
  const otherProps = {
    r: 4,
    color: "red",
  };

  const point = {
    x: 100,
    y: 180,
    ...otherProps,
  };
  console.log(point);

  // 分割代入
  const { x, r, ...others } = point;
  console.log(x);
  console.log(r);
  console.log(others);
}

//! #14 Object.keys()を使ってみよう
{
  const point = {
    x: 100,
    y: 180,
  };

  // オブジェクトにforEachは使えないから、Object.key()で配列にする
  const keys = Object.keys(point);
  keys.forEach((key) => {
    console.log(`Key: ${key} Value: ${point[key]}`);
  });

  const points = [
    { x: 30, y: 20 },
    { x: 20, y: 90 },
    { x: 50, y: 10 },
    { x: 80, y: 70 },
  ];

  console.log(points[1].y);
}

//! #15 変数を代入する
{
  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x);
  // console.log(y);

  let x = [1, 2];
  let y = x;
  x[0] = 5;
  console.log(x);
  console.log(y); // => [5, 2]が返される //* データ情報のみが保存されているため、値そのものは保存されていない
}

//! #16 変数の挙動を確認しよう
{
  // let x = [1, 5];
  // let y = x; //* yにはxのデーター情報のみを保存していて、要素は代入されていない。 PCを重くしないため
  // x[0] = 1;

  let x = [1, 2];
  // スプレッド構文だと、データ情報のみではなく値そのものが保存される
  let y = [...x];
  x[0] = 5;
  console.log(x);
  console.log(y); // => [1, 2]が返される
}

//! #17 文字列を操作してみよう
{
  // 配列とオブジェクト以外も見ていこう

  const str = "Hello";
  console.log(str.length); // str内の文字列の文字数を返す

  //* str.substring(開始位置、 終了位置);
  console.log(str.substring(2, 4));

  console.log(str[1]); // 文字列の１番目の文字を取得する
  // str[1] = "a"; などはできないし、forEachなども使えない
}

//! #18 join(), split()を使ってみよう
{
  // 配列の文字を文字列として結合するためのメソッド
  const d = [2022, 2, 27];
  console.log(d.join("/")); // "/"で区切っている。　からでもOK

  // 文字列を区切り文字のところで分割して、それを配列にするメソッド
  const t = "17:08:24"; // 時分秒に分割
  console.log(t.split(":"));

  // splitで分割した要素をそれぞれ定数に代入する
  const [hour, minute, second] = t.split(":");
  console.log(hour);
  console.log(minute);
  console.log(second);

  const customers = [
    { first_name: "樋口", last_name: "スイ" },
    { first_name: "小黒", last_name: "誠五" },
    { first_name: "長田", last_name: "紘一" },
  ];

  for (let i = 0; i < customers.length; i++) {
    const customer = [customers[i].first_name, customers[i].last_name];
    console.log(customer.join(" "));
  }
}

//! #19 数値を操作してみよう
{
  //? 平均値を出すプログラム
  const scores = [10, 3, 9];
  let sum = 0;

  scores.forEach((score) => {
    sum += score;
  });

  const avg = sum / scores.length;
  console.log(`平均: ${avg}`);

  console.log(Math.floor(avg)); // 小数点以下を切り捨て =>7
  console.log(Math.ceil(avg)); // 小数点切り上げ => 8
  console.log(Math.round(avg)); // 四捨五入 => 7
  console.log(avg.toFixed(3)); // 小数点３桁まで表示 7.333

  // ランダムな数値を生成
  console.log(Math.random());
}

//! #20 ランダムな整数値を作ってみよう
{
  // 他の命令と組み合わせてrandomメソッドで返される数値を操作する
  // サイコロプログラム 1~6の整数を生成させる
  console.log(Math.floor(Math.random() * 6) + 1);
}

//! #21 現在日時を扱ってみよう
{
  const d = new Date();
  console.log(d);

  console.log(`${d.getMonth() + 1}月${d.getDate()}日`);
}

//! #22 特定の日時を扱ってみよう
{
  const d = new Date(2019, 10);
  d.setHours(10, 20, 30);
  d.setDate(31);
  console.log(d);
}

//! #23 alert, confirmを使ってみよう
{
  //alert("Hello");
  // const answer = confirm("削除しますか?");
  // if (answer) {
  //   console.log("削除しました");
  // } else {
  //   console.log("キャンセルしました。");
  // }
}

//! #24 setInterval()を使ってみよう
{
  // let i = 0;
  // const intervalId = setInterval(showTime, 1000);
  // function showTime() {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2) {
  //     clearInterval(intervalId);
  //   }
  // }
}

//! #25 setTimeout()を使ってみよう
{
  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   const timeoutId = setTimeout(showTime, 1000);
  //   i++;
  //   if (i > 2) {
  //     clearTimeout(timeoutId);
  //   }
  // }
  // showTime();
}

//! #26　タイマー処理のち外を理解しよう
{
  // setiInterbal()はsetTimeout()と違って、メソッドの処理が終わってからまた繰り返されるから、システムに負荷をかけない
}

//! #27 例外処理を使ってみよう
{
  const name = "sample";

  try {
    console.log(name.toUpperCase());
  } catch (e) {
    console.log(e);
  }
  console.log("finish");
}

//! #28 オブジェクトが複数ある場合考えよう
{
  const posts = [
    {
      text: "JavaScript",
      likeCount: 0,
    },
    {
      text: "Ruby",
      likeCount: 0,
    },
    {
      text: "Django",
      likeCount: 0,
    },
    {
      text: "Python",
      likeCount: 0,
    },
  ];

  function show(post) {
    console.log(`${post.text} - ${post.likeCount}いいね`);
  }

  show(posts[0]);
}

//! #29 メソッドを使ってみよう
{
  const posts = [
    {
      text: "JavaScriptの勉強",
      likeCount: 0,
      // show: function () {
      //   console.log(`${this.text} - ${this.likeCount}イイね`);
      // },
      show() {
        console.log(`${this.text} - ${this.likeCount}イイね`);
      },
    },
    {
      text: "Ruby",
      likeCount: 0,
    },
    {
      text: "Django",
      likeCount: 0,
    },
    {
      text: "Python",
      likeCount: 0,
    },
  ];

  posts[0].show();
}

//! #30,31, 32, 33クラスの概念を理解しよう
{
  class Post {
    //　初期化処理
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}イイね`);
    }

    like() {
      console.log("イイねしました");
      this.likeCount++;
      this.show();
    }

    disLike() {
      console.log("イイねを外しました");
      this.likeCount--;

      this.show();
    }

    // 静的メソッド
    static showInfo() {
      console.log("Post class version 1.0");
    }
  }

  class sponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }
  }

  const posts = [
    new Post("JavaScript勉強中"),
    new Post("これからRailsの勉強予定"),
    new sponsoredPost("ドットインストールで勉強しよう", "Dotinstall"),
  ];

  posts[2].show();
}
