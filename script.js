let roll = [0,1,2,3,4];
let number = [0,1,2,3,4];
let top1 = document.createElement('img');
let jg = document.createElement('img');
let mid = document.createElement('img');
let bot = document.createElement('img');
let sup = document.createElement('img');

top1.src = "img/top.png";
jg.src = "img/jg.png";
mid.src = "img/mid.png";
bot.src = "img/bot.png";
sup.src = "img/sup.png";

img = [top1,jg,mid,bot,sup];
flag = true;

let TOPROLL = [2,11,14,15,16,17,18,22,25,26,31,34,38,39,42,43,44,45,48,50,53,57,59,61,66,68,75,79,88,93,94,96,98,100,101,103,106,113,116,118,124,130,131,135,139,142,143,148,151,159,166];
let JGROLL  = [1,9,13,16,17,19,21,35,36,41,44,45,46,49,57,60,63,64,68,70,75,78,90,92,107,110,111,120,122,127,129,130,132,133,147,150,152,157,161,162,163,165];
let MIDROLL = [2,3,4,6,7,12,15,19,23,24,25,28,29,30,37,40,52,54,62,66,74,82,83,87,90,91,92,95,99,104,108,117,119,121,124,125,128,134,140,142,144,146,149,154,167];
let BOTROLL = [5,8,20,27,32,47,51,55,58,65,67,72,73,76,84,97,99,102,109,136,140,153,164];
let SUPROLL = [5,10,33,56,69,71,74,77,80,81,83,85,86,88,89,105,108,112,114,115,116,123,125,126,131,132,137,138,141,145,146,155,156,158,160,168];

let TOPCHAR = [];
let JGCHAR = [];
let MIDCHAR = [];
let BOTCHAR = [];
let SUPCHAR = [];

let Character = [];
let CNUMBER = [];

for(let i=1;i<=168;i++){
    let tmp = document.createElement("img");
    tmp.src = "img/CHAR/"+i+".png";
    Character[i] = tmp;
}

for(let i=0;i<TOPROLL.length;i++){
    TOPCHAR[i] = Character[TOPROLL[i]]
}

for(let i=0;i<JGROLL.length;i++){
    JGCHAR[i] = Character[JGROLL[i]]
}

for(let i=0;i<MIDROLL.length;i++){
    MIDCHAR[i] = Character[MIDROLL[i]]
}

for(let i=0;i<BOTROLL.length;i++){
    BOTCHAR[i] = Character[BOTROLL[i]]
}

for(let i=0;i<SUPROLL.length;i++){
    SUPCHAR[i] = Character[SUPROLL[i]]
}

const CNAME = [
    "","アイバーン", "アカリ", "アクシャン", "アジール", "アッシュ", "アニビア", 
    "アニー", "アフェリオス", "アムム", "アリスター", "アーゴット", "アーリ", 
    "イブリン", "イラオイ", "イレリア", "ウディア", "ウーコン", "エイトロックス", 
    "エコー", "エズリアル", "エリス", "オラフ", "オリアナ", "オレリオン・ソル", 
    "オーロラ", "オーン", "カイ＝サ", "カサディン", "カシオペア", "カタリナ", 
    "カミール", "カリスタ", "カルマ", "カ・サンテ", "カーサス", "カ＝ジックス", 
    "ガリオ", "ガレン", "ガングプランク", "キヤナ", "キンドレッド", "クイン", 
    "クレッド", "グウェン", "グラガス", "グレイブス", "ケイトリン", "ケイル", 
    "ケイン", "ケネン", "コグ＝マウ", "コーキ", "サイオン", "サイラス", "サミーラ", 
    "ザイラ", "ザック", "ザヤ", "シェン", "シャコ", "シンジド", "シンドラ", 
    "シン・ジャオ", "シヴァーナ", "シヴィア", "ジェイス", "ジグス", "ジャックス", 
    "ジャンナ", "ジャーヴァンⅣ", "ジリアン", "ジン", "ジンクス", "スウェイン", 
    "スカーナー", "スモルダー", "スレッシュ", "セジュアニ", "セト", "セナ", 
    "セラフィーン", "ゼド", "ゼラス", "ゼリ", "ソナ", "ソラカ", "ゾーイ", 
    "タム・ケンチ", "タリック", "タリヤ", "タロン", "ダイアナ", "ダリウス", 
    "チョ＝ガス", "ツイステッド・フェイト", "ティーモ", "トゥイッチ", "トランドル", 
    "トリスターナ", "トリンダメア", "ドクター・ムンド", "ドレイヴン", "ナサス", 
    "ナフィーリ", "ナミ", "ナー", "ニダリー", "ニーコ", "ニーラ", "ヌヌ＆ウィルンプ", 
    "ノクターン", "ノーチラス", "ハイマーディンガー", "バード", "パイク", 
    "パンテオン", "ビクター", "フィオラ", "フィズ", "フィドルスティックス", 
    "フェイ", "ブライアー", "ブラウム", "ブラッドミア", "ブランド", "ブリッツクランク", 
    "ヘカリム", "ベイガー", "ベル＝ヴェス", "ボリベア", "ポッピー", "マオカイ", 
    "マスター・イー", "マルザハール", "マルファイト", "ミス・フォーチュン", 
    "ミリオ", "モルガナ", "モルデカイザー", "ヤスオ", "ユーミ", "ヨネ", "ヨリック", 
    "ライズ", "ラカン", "ラックス", "ラムス", "ランブル", "リサンドラ", "リリア", 
    "リヴェン", "リー・シン", "ルシアン", "ルブラン", "ルル", "レオナ", 
    "レク＝サイ", "レナータ・グラスク", "レネクトン", "レル", "レンガー", "ワーウィック", 
    "ヴァイ", "ヴァルス", "ヴィエゴ", "ヴェイン", "ヴェックス", "ヴェル＝コズ"
  ];

const OPGGlink = [
    "",
    "https://www.op.gg/champions/ivern/build?type=ranked",
    "https://www.op.gg/champions/akali/build?type=ranked",
    "https://www.op.gg/champions/akshan/build?type=ranked",
    "https://www.op.gg/champions/Azir/build?type=ranked",
    "https://www.op.gg/champions/Ashe/build?type=ranked",
    "https://www.op.gg/champions/Anivia/build?type=ranked",
    "https://www.op.gg/champions/Annie/build?type=ranked",
    "https://www.op.gg/champions/Aphelios/build?type=ranked",
    "https://www.op.gg/champions/Amumu/build?type=ranked",
    "https://www.op.gg/champions/Alistar/build?type=ranked",
    "https://www.op.gg/champions/Urgot/build?type=ranked",
    "https://www.op.gg/champions/Ahri/build?type=ranked",
    "https://www.op.gg/champions/Evelynn/build?type=ranked",
    "https://www.op.gg/champions/Illaoi/build?type=ranked",
    "https://www.op.gg/champions/Irelia/build?type=ranked",
    "https://www.op.gg/champions/Udyr/build?type=ranked",
    "https://www.op.gg/champions/monkeyking/build?type=ranked",
    "https://www.op.gg/champions/Aatrox/build?type=ranked",
    "https://www.op.gg/champions/Ekko/build?type=ranked",
    "https://www.op.gg/champions/Ezreal/build?type=ranked",
    "https://www.op.gg/champions/Elise/build?type=ranked",
    "https://www.op.gg/champions/Olaf/build?type=ranked",
    "https://www.op.gg/champions/Orianna/build?type=ranked",
    "https://www.op.gg/champions/aurelionsol/build?type=ranked",
    "https://www.op.gg/champions/Aurora/build?type=ranked",
    "https://www.op.gg/champions/Ornn/build?type=ranked",
    "https://www.op.gg/champions/kaisa/build?type=ranked",
    "https://www.op.gg/champions/Kassadin/build?type=ranked",
    "https://www.op.gg/champions/Cassiopeia/build?type=ranked",
    "https://www.op.gg/champions/Katarina/build?type=ranked",
    "https://www.op.gg/champions/Camille/build?type=ranked",
    "https://www.op.gg/champions/Kalista/build?type=ranked",
    "https://www.op.gg/champions/Karma/build?type=ranked",
    "https://www.op.gg/champions/ksante/build?type=ranked",
    "https://www.op.gg/champions/Karthus/build?type=ranked",
    "https://www.op.gg/champions/khazix/build?type=ranked",
    "https://www.op.gg/champions/galio/build?type=ranked",
    "https://www.op.gg/champions/garen/build?type=ranked",
    "https://www.op.gg/champions/gangplank/build?type=ranked",
    "https://www.op.gg/champions/qiyana/build?type=ranked",
    "https://www.op.gg/champions/kindred/build?type=ranked",
    "https://www.op.gg/champions/quinn/build?type=ranked",
    "https://www.op.gg/champions/kled/build?type=ranked",
    "https://www.op.gg/champions/gwen/build?type=ranked",
    "https://www.op.gg/champions/gragas/build?type=ranked",
    "https://www.op.gg/champions/graves/build?type=ranked",
    "https://www.op.gg/champions/caitlyn/build?type=ranked",
    "https://www.op.gg/champions/kayle/build?type=ranked",
    "https://www.op.gg/champions/kayn/build?type=ranked",
    "https://www.op.gg/champions/kennen/build?type=ranked",
    "https://www.op.gg/champions/kogmaw/build?type=ranked",
    "https://www.op.gg/champions/corki/build?type=ranked",
    "https://www.op.gg/champions/sion/build?type=ranked",
    "https://www.op.gg/champions/sylas/build?type=ranked",
    "https://www.op.gg/champions/samira/build?type=ranked",
    "https://www.op.gg/champions/zyra/build?type=ranked",
    "https://www.op.gg/champions/zac/build?type=ranked",
    "https://www.op.gg/champions/xayah/build?type=ranked",
    "https://www.op.gg/champions/shen/build?type=ranked",
    "https://www.op.gg/champions/shaco/build?type=ranked",
    "https://www.op.gg/champions/singed/build?type=ranked",
    "https://www.op.gg/champions/syndra/build?type=ranked",
    "https://www.op.gg/champions/xinzhao/build?type=ranked",
    "https://www.op.gg/champions/shyvana/build?type=ranked",
    "https://www.op.gg/champions/sivir/build?type=ranked",
    "https://www.op.gg/champions/jayce/build?type=ranked",
    "https://www.op.gg/champions/ziggs/build?type=ranked",
    "https://www.op.gg/champions/jax/build?type=ranked",
    "https://www.op.gg/champions/janna/build?type=ranked",
    "https://www.op.gg/champions/jarvaniv/build?type=ranked",
    "https://www.op.gg/champions/zilean/build?type=ranked",
    "https://www.op.gg/champions/jhin/build?type=ranked",
    "https://www.op.gg/champions/jinx/build?type=ranked",
    "https://www.op.gg/champions/swain/build?type=ranked",
    "https://www.op.gg/champions/skarner/build?type=ranked",
    "https://www.op.gg/champions/smolder/build?type=ranked",
    "https://www.op.gg/champions/thresh/build?type=ranked",
    "https://www.op.gg/champions/sejuani/build?type=ranked",
    "https://www.op.gg/champions/sett/build?type=ranked",
    "https://www.op.gg/champions/senna/build?type=ranked",
    "https://www.op.gg/champions/seraphine/build?type=ranked",
    "https://www.op.gg/champions/zed/build?type=ranked",
    "https://www.op.gg/champions/xerath/build?type=ranked",
    "https://www.op.gg/champions/zeri/build?type=ranked",
    "https://www.op.gg/champions/sona/build?type=ranked",
    "https://www.op.gg/champions/soraka/build?type=ranked",
    "https://www.op.gg/champions/zoe/build?type=ranked",
    "https://www.op.gg/champions/tahmkench/build?type=ranked",
    "https://www.op.gg/champions/taric/build?type=ranked",
    "https://www.op.gg/champions/taliyah/build?type=ranked",
    "https://www.op.gg/champions/talon/build?type=ranked",
    "https://www.op.gg/champions/diana/build?type=ranked",
    "https://www.op.gg/champions/darius/build?type=ranked",
    "https://www.op.gg/champions/chogath/build?type=ranked",
    "https://www.op.gg/champions/twistedfate/build?type=ranked",
    "https://www.op.gg/champions/teemo/build?type=ranked",
    "https://www.op.gg/champions/twitch/build?type=ranked",
    "https://www.op.gg/champions/trundle/build?type=ranked",
    "https://www.op.gg/champions/tristana/build?type=ranked",
    "https://www.op.gg/champions/tryndamere/build?type=ranked",
    "https://www.op.gg/champions/drmundo/build?type=ranked",
    "https://www.op.gg/champions/draven/build?type=ranked",
    "https://www.op.gg/champions/nasus/build?type=ranked",
    "https://www.op.gg/champions/naafiri/build?type=ranked",
    "https://www.op.gg/champions/nami/build?type=ranked",
    "https://www.op.gg/champions/gnar/build?type=ranked",
    "https://www.op.gg/champions/nidalee/build?type=ranked",
    "https://www.op.gg/champions/neeko/build?type=ranked",
    "https://www.op.gg/champions/nilah/build?type=ranked",
    "https://www.op.gg/champions/nunu/build?type=ranked",
    "https://www.op.gg/champions/nocturne/build?type=ranked",
    "https://www.op.gg/champions/nautilus/build?type=ranked",
    "https://www.op.gg/champions/heimerdinger/build?type=ranked",
    "https://www.op.gg/champions/bard/build?type=ranked",
    "https://www.op.gg/champions/pyke/build?type=ranked",
    "https://www.op.gg/champions/pantheon/build?type=ranked",
    "https://www.op.gg/champions/viktor/build?type=ranked",
    "https://www.op.gg/champions/fiora/build?type=ranked",
    "https://www.op.gg/champions/fizz/build?type=ranked",
    "https://www.op.gg/champions/fiddlesticks/build?type=ranked",
    "https://www.op.gg/champions/hwei/build?type=ranked",
    "https://www.op.gg/champions/briar/build?type=ranked",
    "https://www.op.gg/champions/braum/build?type=ranked",
    "https://www.op.gg/champions/vladimir/build?type=ranked",
    "https://www.op.gg/champions/brand/build?type=ranked",
    "https://www.op.gg/champions/blitzcrank/build?type=ranked",
    "https://www.op.gg/champions/hecarim/build?type=ranked",
    "https://www.op.gg/champions/veigar/build?type=ranked",
    "https://www.op.gg/champions/belveth/build?type=ranked",
    "https://www.op.gg/champions/volibear/build?type=ranked",
    "https://www.op.gg/champions/poppy/build?type=ranked",
    "https://www.op.gg/champions/maokai/build?type=ranked",
    "https://www.op.gg/champions/masteryi/build?type=ranked",
    "https://www.op.gg/champions/malzahar/build?type=ranked",
    "https://www.op.gg/champions/malphite/build?type=ranked",
    "https://www.op.gg/champions/missfortune/build?type=ranked",
    "https://www.op.gg/champions/milio/build?type=ranked",
    "https://www.op.gg/champions/morgana/build?type=ranked",
    "https://www.op.gg/champions/mordekaiser/build?type=ranked",
    "https://www.op.gg/champions/yasuo/build?type=ranked",
    "https://www.op.gg/champions/yuumi/build?type=ranked",
    "https://www.op.gg/champions/yone/build?type=ranked",
    "https://www.op.gg/champions/yorick/build?type=ranked",
    "https://www.op.gg/champions/ryze/build?type=ranked",
    "https://www.op.gg/champions/rakan/build?type=ranked",
    "https://www.op.gg/champions/lux/build?type=ranked",
    "https://www.op.gg/champions/rammus/build?type=ranked",
    "https://www.op.gg/champions/rumble/build?type=ranked",
    "https://www.op.gg/champions/lissandra/build?type=ranked",
    "https://www.op.gg/champions/lillia/build?type=ranked",
    "https://www.op.gg/champions/riven/build?type=ranked",
    "https://www.op.gg/champions/leesin/build?type=ranked",
    "https://www.op.gg/champions/lucian/build?type=ranked",
    "https://www.op.gg/champions/leblanc/build?type=ranked",
    "https://www.op.gg/champions/lulu/build?type=ranked",
    "https://www.op.gg/champions/leona/build?type=ranked",
    "https://www.op.gg/champions/reksai/build?type=ranked",
    "https://www.op.gg/champions/renata/build?type=ranked",
    "https://www.op.gg/champions/renekton/build?type=ranked",
    "https://www.op.gg/champions/rell/build?type=ranked",
    "https://www.op.gg/champions/rengar/build?type=ranked",
    "https://www.op.gg/champions/warwick/build?type=ranked",
    "https://www.op.gg/champions/vi/build?type=ranked",
    "https://www.op.gg/champions/varus/build?type=ranked",
    "https://www.op.gg/champions/viego/build?type=ranked",
    "https://www.op.gg/champions/vayne/build?type=ranked",
    "https://www.op.gg/champions/vex/build?type=ranked",
    "https://www.op.gg/champions/velkoz/build?type=ranked"
];
const UGGlink = [
    "",
    "https://u.gg/lol/champions/ivern/build",
    "https://u.gg/lol/champions/akali/build",
    "https://u.gg/lol/champions/akshan/build",
    "https://u.gg/lol/champions/azir/build",
    "https://u.gg/lol/champions/ashe/build",
    "https://u.gg/lol/champions/anivia/build",
    "https://u.gg/lol/champions/annie/build",
    "https://u.gg/lol/champions/aphelios/build",
    "https://u.gg/lol/champions/amumu/build",
    "https://u.gg/lol/champions/alistar/build",
    "https://u.gg/lol/champions/urgot/build",
    "https://u.gg/lol/champions/ahri/build",
    "https://u.gg/lol/champions/evelynn/build",
    "https://u.gg/lol/champions/illaoi/build",
    "https://u.gg/lol/champions/irelia/build",
    "https://u.gg/lol/champions/udyr/build",
    "https://u.gg/lol/champions/wukong/build",
    "https://u.gg/lol/champions/aatrox/build",
    "https://u.gg/lol/champions/ekko/build",
    "https://u.gg/lol/champions/ezreal/build",
    "https://u.gg/lol/champions/elise/build",
    "https://u.gg/lol/champions/olaf/build",
    "https://u.gg/lol/champions/orianna/build",
    "https://u.gg/lol/champions/aurelionsol/build",
    "https://u.gg/lol/champions/aurora/build",
    "https://u.gg/lol/champions/ornn/build",
    "https://u.gg/lol/champions/kaisa/build",
    "https://u.gg/lol/champions/kassadin/build",
    "https://u.gg/lol/champions/cassiopeia/build",
    "https://u.gg/lol/champions/katarina/build",
    "https://u.gg/lol/champions/camille/build",
    "https://u.gg/lol/champions/kalista/build",
    "https://u.gg/lol/champions/karma/build",
    "https://u.gg/lol/champions/ksante/build",
    "https://u.gg/lol/champions/karthus/build",
    "https://u.gg/lol/champions/khazix/build",
    "https://u.gg/lol/champions/galio/build",
    "https://u.gg/lol/champions/garen/build",
    "https://u.gg/lol/champions/gangplank/build",
    "https://u.gg/lol/champions/qiyana/build",
    "https://u.gg/lol/champions/kindred/build",
    "https://u.gg/lol/champions/quinn/build",
    "https://u.gg/lol/champions/kled/build",
    "https://u.gg/lol/champions/gwen/build",
    "https://u.gg/lol/champions/gragas/build",
    "https://u.gg/lol/champions/graves/build",
    "https://u.gg/lol/champions/caitlyn/build",
    "https://u.gg/lol/champions/kayle/build",
    "https://u.gg/lol/champions/red/kayn/build",
    "https://u.gg/lol/champions/kennen/build",
    "https://u.gg/lol/champions/kogmaw/build",
    "https://u.gg/lol/champions/corki/build",
    "https://u.gg/lol/champions/sion/build",
    "https://u.gg/lol/champions/sylas/build",
    "https://u.gg/lol/champions/samira/build",
    "https://u.gg/lol/champions/zyra/build",
    "https://u.gg/lol/champions/zac/build",
    "https://u.gg/lol/champions/xayah/build",
    "https://u.gg/lol/champions/shen/build",
    "https://u.gg/lol/champions/shaco/build",
    "https://u.gg/lol/champions/singed/build",
    "https://u.gg/lol/champions/syndra/build",
    "https://u.gg/lol/champions/xinzhao/build",
    "https://u.gg/lol/champions/shyvana/build",
    "https://u.gg/lol/champions/sivir/build",
    "https://u.gg/lol/champions/jayce/build",
    "https://u.gg/lol/champions/ziggs/build",
    "https://u.gg/lol/champions/jax/build",
    "https://u.gg/lol/champions/janna/build",
    "https://u.gg/lol/champions/jarvaniv/build",
    "https://u.gg/lol/champions/zilean/build",
    "https://u.gg/lol/champions/jhin/build",
    "https://u.gg/lol/champions/jinx/build",
    "https://u.gg/lol/champions/swain/build",
    "https://u.gg/lol/champions/skarner/build",
    "https://u.gg/lol/champions/smolder/build",
    "https://u.gg/lol/champions/thresh/build",
    "https://u.gg/lol/champions/sejuani/build",
    "https://u.gg/lol/champions/sett/build",
    "https://u.gg/lol/champions/senna/build",
    "https://u.gg/lol/champions/seraphine/build",
    "https://u.gg/lol/champions/zed/build",
    "https://u.gg/lol/champions/xerath/build",
    "https://u.gg/lol/champions/zeri/build",
    "https://u.gg/lol/champions/sona/build",
    "https://u.gg/lol/champions/soraka/build",
    "https://u.gg/lol/champions/zoe/build",
    "https://u.gg/lol/champions/tahmkench/build",
    "https://u.gg/lol/champions/taric/build",
    "https://u.gg/lol/champions/taliyah/build",
    "https://u.gg/lol/champions/talon/build",
    "https://u.gg/lol/champions/diana/build",
    "https://u.gg/lol/champions/darius/build",
    "https://u.gg/lol/champions/chogath/build",
    "https://u.gg/lol/champions/twistedfate/build",
    "https://u.gg/lol/champions/teemo/build",
    "https://u.gg/lol/champions/twitch/build",
    "https://u.gg/lol/champions/trundle/build",
    "https://u.gg/lol/champions/tristana/build",
    "https://u.gg/lol/champions/tryndamere/build",
    "https://u.gg/lol/champions/drmundo/build",
    "https://u.gg/lol/champions/draven/build",
    "https://u.gg/lol/champions/nasus/build",
    "https://u.gg/lol/champions/naafiri/build",
    "https://u.gg/lol/champions/nami/build",
    "https://u.gg/lol/champions/gnar/build",
    "https://u.gg/lol/champions/nidalee/build",
    "https://u.gg/lol/champions/neeko/build",
    "https://u.gg/lol/champions/nilah/build",
    "https://u.gg/lol/champions/nunu/build",
    "https://u.gg/lol/champions/nocturne/build",
    "https://u.gg/lol/champions/nautilus/build",
    "https://u.gg/lol/champions/heimerdinger/build",
    "https://u.gg/lol/champions/bard/build",
    "https://u.gg/lol/champions/pyke/build",
    "https://u.gg/lol/champions/pantheon/build",
    "https://u.gg/lol/champions/viktor/build",
    "https://u.gg/lol/champions/fiora/build",
    "https://u.gg/lol/champions/fizz/build",
    "https://u.gg/lol/champions/fiddlesticks/build",
    "https://u.gg/lol/champions/hwei/build",
    "https://u.gg/lol/champions/briar/build",
    "https://u.gg/lol/champions/braum/build",
    "https://u.gg/lol/champions/vladimir/build",
    "https://u.gg/lol/champions/brand/build",
    "https://u.gg/lol/champions/blitzcrank/build",
    "https://u.gg/lol/champions/hecarim/build",
    "https://u.gg/lol/champions/veigar/build",
    "https://u.gg/lol/champions/belveth/build",
    "https://u.gg/lol/champions/volibear/build",
    "https://u.gg/lol/champions/poppy/build",
    "https://u.gg/lol/champions/maokai/build",
    "https://u.gg/lol/champions/masteryi/build",
    "https://u.gg/lol/champions/malzahar/build",
    "https://u.gg/lol/champions/malphite/build",
    "https://u.gg/lol/champions/missfortune/build",
    "https://u.gg/lol/champions/milio/build",
    "https://u.gg/lol/champions/morgana/build",
    "https://u.gg/lol/champions/mordekaiser/build",
    "https://u.gg/lol/champions/yasuo/build",
    "https://u.gg/lol/champions/yuumi/build",
    "https://u.gg/lol/champions/yone/build",
    "https://u.gg/lol/champions/yorick/build",
    "https://u.gg/lol/champions/ryze/build",
    "https://u.gg/lol/champions/rakan/build",
    "https://u.gg/lol/champions/lux/build",
    "https://u.gg/lol/champions/rammus/build",
    "https://u.gg/lol/champions/rumble/build",
    "https://u.gg/lol/champions/lissandra/build",
    "https://u.gg/lol/champions/lillia/build",
    "https://u.gg/lol/champions/riven/build",
    "https://u.gg/lol/champions/leesin/build",
    "https://u.gg/lol/champions/lucian/build",
    "https://u.gg/lol/champions/leblanc/build",
    "https://u.gg/lol/champions/lulu/build",
    "https://u.gg/lol/champions/leona/build",
    "https://u.gg/lol/champions/reksai/build",
    "https://u.gg/lol/champions/renata/build",
    "https://u.gg/lol/champions/renekton/build",
    "https://u.gg/lol/champions/rell/build",
    "https://u.gg/lol/champions/rengar/build",
    "https://u.gg/lol/champions/warwick/build",
    "https://u.gg/lol/champions/vi/build",
    "https://u.gg/lol/champions/varus/build",
    "https://u.gg/lol/champions/viego/build",
    "https://u.gg/lol/champions/vayne/build",
    "https://u.gg/lol/champions/vex/build",
    "https://u.gg/lol/champions/velkoz/build"
];

let functionlist = [
    toprandom,
    jgrandom,
    midrandom,
    botrandom,
    suprandom
];

setmy();
function setmy(){
    const mybox = document.getElementById("mybox");

for (let i = 1; i < CNAME.length; i++) {
    let label = document.createElement("label");
    label.className = "check";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = i;
    checkbox.className = "checkfor";

    let span = document.createElement("span");
    span.textContent = CNAME[i];

    label.appendChild(checkbox);
    label.appendChild(span);

    mybox.appendChild(label);
}
}


async function random(){
    if(flag){
    flag=false;
    shuffle();
    topanime();
    jganime();
    midanime();
    botanime();
    supanime();
    }
}

function shuffle(){
    for(let i=0;i<200;i++){
        const index1 = Math.floor(Math.random() * 5);
        const index2 = Math.floor(Math.random() * 5);
        if (index1 !== index2) {
            [roll[index1], roll[index2]] = [roll[index2], roll[index1]];
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function topanime() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 5; j++) {
            await sleep(200);
            const container = document.getElementById("T1");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[j].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[j].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T1").querySelector('img').src = img[roll[0]].src;
}

async function jganime() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            await sleep(200);
            const container = document.getElementById("T2");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 1) % 5].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 1) % 5].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T2").querySelector('img').src = img[roll[1]].src;
}

async function midanime() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            await sleep(200);
            const container = document.getElementById("T3");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 2) % 5].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 2) % 5].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T3").querySelector('img').src = img[roll[2]].src;
}

async function botanime() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 5; j++) {
            await sleep(200);
            const container = document.getElementById("T4");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 3) % 5].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 3) % 5].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T4").querySelector('img').src = img[roll[3]].src;
}

async function supanime() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 5; j++) {
            await sleep(200);
            const container = document.getElementById("T5");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 4) % 5].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 4) % 5].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T5").querySelector('img').src = img[roll[4]].src;
    await sleep(500);
    flag=true;
}

let flag2=true;
//ランダムチャンピオン
async function randomchampion(){
    if(flag2){
        flag2=false;
        let select = document.getElementById("champion");
        let value = select.value;
        if(value=="0"){
            all("championcell");
        }else if(value=="1"){
            toprandom("championcell");
        }else if(value=="2"){
            jgrandom("championcell");
        }else if(value=="3"){
            midrandom("championcell");
        }else if(value=="4"){
            botrandom("championcell");
        }else if(value=="5"){
            suprandom("championcell");
        }else{
            flag2=true;
        }
    }
}

async function all(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * 168) + 1;
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = Character[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = Character[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * 168) + 1;
    document.getElementById(cell).querySelector('img').src = Character[randomN].src;
    selectnumber = randomN;
    if(!flag2){
        setlink();
    }
    flag2=true;
}

async function toprandom(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * TOPCHAR.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = TOPCHAR[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = TOPCHAR[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * TOPCHAR.length);
    document.getElementById(cell).querySelector('img').src = TOPCHAR[randomN].src;
    selectnumber = randomN;
    if(!flag2){
        setlink();
    }
    flag2=true;
    flag=true;
}

async function jgrandom(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * JGCHAR.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = JGCHAR[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = JGCHAR[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * JGCHAR.length);
    document.getElementById(cell).querySelector('img').src = JGCHAR[randomN].src;
    selectnumber = randomN;
    if(!flag2){
        setlink();
    }
    flag2=true;
    flag=true;
}

async function midrandom(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * MIDCHAR.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = MIDCHAR[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = MIDCHAR[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * MIDCHAR.length);
    document.getElementById(cell).querySelector('img').src = MIDCHAR[randomN].src;
    selectnumber = randomN;
    if(!flag2){
        setlink();
    }
    flag2=true;
    flag=true;
}

async function botrandom(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * BOTCHAR.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = BOTCHAR[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = BOTCHAR[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * BOTCHAR.length);
    document.getElementById(cell).querySelector('img').src = BOTCHAR[randomN].src;
    selectnumber = randomN;
    if(!flag2){
        setlink();
    }
    flag2=true;
    flag=true;
}

async function suprandom(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * SUPCHAR.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = SUPCHAR[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = SUPCHAR[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * SUPCHAR.length);
    document.getElementById(cell).querySelector('img').src = SUPCHAR[randomN].src;
    selectnumber = randomN;
    if(!flag2){
        setlink();
    }
    flag2=true;
    flag=true;
}

//ランダムパーティ処理
function randomparty(){
    if(flag){
        flag=false;
        functionlist[roll[0]]("P1");
        functionlist[roll[1]]("P2");
        functionlist[roll[2]]("P3");
        functionlist[roll[3]]("P4");
        functionlist[roll[4]]("P5");
    }
}

//リンクのセット
let selectnumber = -1;
let linknumber = null;
function setlink(){
    let select = document.getElementById("champion");
    let value = select.value;
    if(value=="0"){
        linknumber = selectnumber;
    }else if(value=="1"){
        linknumber = TOPROLL[selectnumber];
    }else if(value=="2"){
        linknumber = JGROLL[selectnumber];
    }else if(value=="3"){
        linknumber = MIDROLL[selectnumber];
    }else if(value=="4"){
        linknumber = MIDROLL[selectnumber];
    }else if(value=="5"){
        linknumber = MIDROLL[selectnumber];
    }
    let linkcell = document.getElementById("OPGG");
    linkcell.href = OPGGlink[linknumber];
    let linkcell2 = document.getElementById("UGG");
    linkcell2.href = UGGlink[linknumber];
}

let flag3=true;
async function mypick(){
    let check = [];
    
    let checkbox = document.querySelectorAll(".check input[type='checkbox']");
    checkbox.forEach(function(checkbox) {
        if (checkbox.checked) {
            check.push(checkbox.value);
        }
    });
    if(flag3){
        if(1<check.length){
            flag3=false;
            let randomM = -1;
            let randomN = -1;
            for (let i = 0; i < 25; i++) {
                await sleep(200);
                do {
                    randomN = Math.floor(Math.random() * check.length);
                } while (randomN === randomM);
                randomM = randomN;
                randomN = check[randomN];
                const container = document.getElementById("mypick");
                const Element = container.querySelector('img');
                if (Element) {
                    Element.src = Character[randomN].src;
                } else {
                    const newElement = document.createElement('img');
                    newElement.src = Character[randomN].src;
                    container.appendChild(newElement);
                }
            }
            randomN = Math.floor(Math.random() * check.length);
            randomN = check[randomN];
            document.getElementById("mypick").querySelector('img').src = Character[randomN].src;
            let linkcell = document.getElementById("myOPGG");
            linkcell.href = OPGGlink[randomN];
            let linkcell2 = document.getElementById("myUGG");
            linkcell2.href = UGGlink[randomN];
            flag3=true;
        }
    }
}

let checkfor = false;
function allcheck(event){
    event.preventDefault();
    if(!checkfor){
        let checkboxes = document.querySelectorAll('.checkfor');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        checkfor=true;
    }else{
        let checkboxes = document.querySelectorAll('.checkfor');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        checkfor=false;
    }
}