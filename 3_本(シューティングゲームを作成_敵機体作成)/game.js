enchant();

window.onload = function () {

  core =new Core(320, 320);
  core.fps = 24;

  // ゲームで使用する画像ファイルを読み込む
  core.preload('spritesheet.png', 'bg.png', 'exp.png');

  core.onload = function() {
    // 背景を作成する
    background = new Background();
    // 自機を作成する
    player = new Player(144, 138);
    core.keybind('A'.charCodeAt(0),'a'); //キーAを使用

  }
  core.start();
}

// 自機のスプライトを作成するクラス
let Player = enchant.Class.create(enchant.Sprite, {
  initialize: function(x, y) {
    enchant.Sprite.call(this, 32, 32);
    // サーフィスを作成する
    var image = new Surface(128, 32);
    // 「spritesheet.png」の(0, 0)から128x32の領域の画像をサーフィスに描画する
    image.draw(core.assets['spritesheet.png'], 0, 0, 128, 32, 0, 0, 128, 32);
    this.image = image;
    this.frame = 0;
    this.x = x;
    this.y = y;
    // 「enterframe」イベントリスナ
    this.addEventListener('enterframe', function() {
      // 移動速度の設定
      let right,left,up,down;
      righnt = 8;
      left = 8;
      up = 8;
      down = 8;
      let a;
      // 自機の移動処理
      // 左ボタンが押され、かつ自機のx座標が「0」以上なら
      if (core.input.left && this.x >= 0) {
        this.x -= left;    // 「8」ピクセル左に移動する
        this.frame = 0; // フレーム番号「0」の画像を表示する
      }
      // 右ボタンが押され、かつ自機のx座標が「ゲーム幅-32」以下なら
      if (core.input.right && this.x <= core.width - 32) {
        this.x += righnt;    // 「8」ピクセル右に移動する
        this.frame = 0; // フレーム番号「0」の画像を表示する
      }
      // 上ボタンが押され、かつ自機のy座標が「0」以上なら
      if (core.input.up  && this.y >= 0 ) {
        this.y -= up;    // 「8」ピクセル上に移動する
        this.frame = 1; // フレーム番号「1」の画像を表示する
      }
      // 下ボタンが押され、かつ自機のy座標が「ゲーム高さ-32」以下なら
      if (core.input.down && this.y <= core.height- 32) {
        this.y += down;    // 「8」ピクセル下に移動する
        this.frame = 2; // フレーム番号「2」の画像を表示する
      }
      if(core.input.a) console.log("+1");
    });
    core.rootScene.addChild(this);
  }
});

// 背景のスプライトを作成するクラス
let Background = enchant.Class.create(enchant.Sprite, {
  initialize: function() {
    enchant.Sprite.call(this, 320, 640);
    this.x = 0;
    this.y = -320;
    this.frame = 10;
    this.image = core.assets['bg.png'];
    // 「enterframe」イベントリスナ
    this.addEventListener('enterframe', function() {
      // 背景をy方向にスクロールする
      this.y ++;
      // y座標が「0」以上になったら、y座標を最初の位置「-320」に戻す
      if (this.y >= 0) this.y = -320;
    });
    core.rootScene.addChild(this);
  }
});

let Enemy = enchant.Class.create(enchant.Sprite,{
  initialize: function(x,y,type){
    enchant.Sprite.call(this,32,32);
    this.image = core.assets['spritesheet.png'];
    this.x = x;
    this.y = y;
    this.vx = 4;   //x方向の移動量
    this.type = type; //敵の種類を設定

    this.addEventListener('enterframe',function(){
      //敵のタイプによって表示する移動パターンを設定

    });
  }
});
