import { WordList } from "./typingProblems";

//ハンターハンター
export const spellWords: WordList[] = [
	{
		kanji: "<Ruby>盗視<rt>スティール</rt></Ruby>",
		romaji: "tousi",
		eng: "suthi-ru",
		validInputs: ["tousi", "toushi", "touci"],
		validInputs2: ["suthi-ru", "suteli-ru"]
	},
	{
		kanji: "<Ruby>透視<rt>フルラスコピー</rt></Ruby>",
		romaji: "tousi",
		eng: "fururasukopi-",
		validInputs: ["tousi", "toushi", "touci"],
		validInputs2: ["fururasukopi-", "hururasukopi-", "fururasucopi-", "hururasucopi-"]
	},
	{
		kanji: "<Ruby>防壁<rt>ディフェンシブウォール</rt></Ruby>",
		romaji: "bouheki",
		eng: "dhifensibuwho-ru",
		validInputs: ["bouheki"],
		validInputs2: [
			"dhifensibuwho-ru",
			"dhifenshibuwho-ru",
			"dhifencibuwho-ru",
			"dhifennsibuwho-ru",
			"dhifennshibuwho-ru",
			"dhifenncibuwho-ru"
		]
	},
	{
		kanji: "<Ruby>反射<rt>リフレクション</rt></Ruby>",
		romaji: "hansha",
		eng: "rifurekusyon",
		validInputs: ["hansha", "hansya", "hannsha", "hannsya"],
		validInputs2: [
			"rifurekusyon",
			"rihurekusyon",
			"rifurecusyon",
			"rihurecusyon",
			"rifurequsyon",
			"rihurequsyon",
			"rifurekushon",
			"rihurekushon",
			"rifurecushon",
			"rihurecushon",
			"rifurequshon",
			"rihurequshon"
		]
	},
	{
		kanji: "<Ruby>磁力<rt>マグネティックフォース</rt></Ruby>",
		romaji: "jiryoku",
		eng: "magunethikkufo-su",
		validInputs: ["jiryoku", "ziryoku", "jiryocu", "jiryocu", "jiryoqu", "ziryoqu"],
		validInputs2: ["magunethikkufo-su", "magunethiccufo-su", "magunethiqqufo-su"]
	},
	{
		kanji: "<Ruby>掏摸<rt>ピックポケット</rt></Ruby>",
		romaji: "suri",
		eng: "pikkupoketto",
		validInputs: ["suri"],
		validInputs2: ["pikkupoketto", "piccupoketto", "piqqupoketto"]
	},
	{
		kanji: "<Ruby>窃盗<rt>シーフ</rt></Ruby>",
		romaji: "settou",
		eng: "si-fu",
		validInputs: ["settou"],
		validInputs2: ["si-fu", "shi-fu", "ci-fu", "si-hu", "shi-hu", "ci-hu"]
	},
	{
		kanji: "<Ruby>交換<rt>トレード</rt></Ruby>",
		romaji: "koukan",
		eng: "tore-do",
		validInputs: ["koukan", "coukan", "koucan", "coucan"],
		validInputs2: ["tore-do"]
	},
	{
		kanji: "<Ruby>再来<rt>リターン</rt></Ruby>",
		romaji: "sairai",
		eng: "rita-n",
		validInputs: ["sairai"],
		validInputs2: ["rita-n"]
	},
	{
		kanji: "<Ruby>擬態<rt>トランスフォーム</rt></Ruby>",
		romaji: "gitai",
		eng: "toransufo-mu",
		validInputs: ["gitai"],
		validInputs2: ["toransufo-mu", "torannsufo-mu"]
	},
	{
		kanji: "<Ruby>複製<rt>クローン</rt></Ruby>",
		romaji: "fukusei",
		eng: "kuro-n",
		validInputs: ["fukusei", "fucusei", "hukusei", "hucusei", "fuqusei", "huqusei"],
		validInputs2: ["kuro-n", "curo-n", "quro-n"]
	},
	{
		kanji: "<Ruby>左遷<rt>レルゲイト</rt></Ruby>",
		romaji: "sasen",
		eng: "rerugeito",
		validInputs: ["sasen"],
		validInputs2: ["rerugeito"]
	},
	{
		kanji: "<Ruby>初心<rt>デパーチャー</rt></Ruby>",
		romaji: "syosin",
		eng: "depa-cha-",
		validInputs: ["syosin", "shosin", "syoshin", "shoshin", "syocin", "shocin"],
		validInputs2: ["depa-cha-", "depa-cya-", "depa-tya-"]
	},
	{
		kanji: "<Ruby>離脱<rt>リーブ</rt></Ruby>",
		romaji: "ridatu",
		eng: "ri-bu",
		validInputs: ["ridatu", "ridatsu"],
		validInputs2: ["ri-bu"]
	},
	{
		kanji: "<Ruby>念視<rt>サイトビジョン</rt></Ruby>",
		romaji: "nensi",
		eng: "saitobijon",
		validInputs: ["nensi", "nenshi", "nenci", "nennsi", "nennshi", "nennci"],
		validInputs2: ["saitobijon", "saitobijyon", "saitobizyon"]
	},
	{
		kanji: "<Ruby>漂流<rt>ドリフト</rt></Ruby>",
		romaji: "hyouryuu",
		eng: "dorifuto",
		validInputs: ["hyouryuu"],
		validInputs2: ["dorifuto", "dorihuto"]
	},
	{
		kanji: "<Ruby>衝突<rt>コリジョン</rt></Ruby>",
		romaji: "syoutotu",
		eng: "korijon",
		validInputs: ["syoutotu", "shoutotu", "syoutotsu", "shoutotsu"],
		validInputs2: ["korijon", "corijon", "korijyon", "corijyon", "korizyon", "corizyon"]
	},
	{
		kanji: "<Ruby>徴収<rt>レヴィ</rt></Ruby>",
		romaji: "tyousyuu",
		eng: "revi",
		validInputs: ["tyousyuu", "chousyuu", "cyousyuu", "tyoushuu", "choushuu", "cyoushuu"],
		validInputs2: ["revi"]
	},
	{
		kanji: "<Ruby>城門<rt>キャッスルゲート</rt></Ruby>",
		romaji: "joumon",
		eng: "kyassuruge-to",
		validInputs: ["joumon", "jyoumon", "zyoumon"],
		validInputs2: ["kyassuruge-to"]
	},
	{
		kanji: "<Ruby>贋作<rt>フェイク</rt></Ruby>",
		romaji: "gansaku",
		eng: "feiku",
		validInputs: ["gansaku", "gansacu", "gansaqu", "gannsaku", "gannsacu", "gannsaqu"],
		validInputs2: ["feiku", "feicu", "feiqu"]
	},
	{
		kanji: "<Ruby>強奪<rt>ロブ</rt></Ruby>",
		romaji: "goudatu",
		eng: "robu",
		validInputs: ["goudatu", "goudatsu"],
		validInputs2: ["robu"]
	},
	{
		kanji: "<Ruby>堕落<rt>コラプション</rt></Ruby>",
		romaji: "daraku",
		eng: "korapusyon",
		validInputs: ["daraku", "daracu", "daraqu"],
		validInputs2: ["korapusyon", "korapushon", "corapusyon", "corapushon"]
	},
	{
		kanji: "<Ruby>妥協<rt>コンプロマイズ</rt></Ruby>",
		romaji: "dakyou",
		eng: "konpuromaizu",
		validInputs: ["dakyou"],
		validInputs2: ["konpuromaizu", "conpuromaizu", "konnpuromaizu", "connpuromaizu"]
	},
	{
		kanji: "<Ruby>看破<rt>ペネトレイト</rt></Ruby>",
		romaji: "kanpa",
		eng: "penetoreito",
		validInputs: ["kanpa", "kannpa", "canpa", "cannpa"],
		validInputs2: ["penetoreito"]
	},
	{
		kanji: "<Ruby>暗幕<rt>ブラックカーテン</rt></Ruby>",
		romaji: "anmaku",
		eng: "burakkuautoka-ten",
		validInputs: ["anmaku", "anmacu", "anmaqu", "annmaku", "annmacu", "annmaqu"],
		validInputs2: [
			"burakkuautoka-ten",
			"burakkuautoca-ten",
			"buraccuautoka-ten",
			"buraccuautoca-ten",
			"buraqquautoka-ten",
			"buraqquautoca-ten"
		]
	},
	{
		kanji: "<Ruby>聖水<rt>ホーリーウォーター</rt></Ruby>",
		romaji: "seisui",
		eng: "ho-ri-who-ta-",
		validInputs: ["seisui"],
		validInputs2: ["ho-ri-who-ta-"]
	},
	{
		kanji: "<Ruby>追跡<rt>トレース</rt></Ruby>",
		romaji: "tuiseki",
		eng: "tore-su",
		validInputs: ["tuiseki", "tsuiseki"],
		validInputs2: ["tore-su"]
	},
	{
		kanji: "<Ruby>投石<rt>ストーンスロー</rt></Ruby>",
		romaji: "touseki",
		eng: "suto-nsuro-",
		validInputs: ["touseki"],
		validInputs2: ["suto-nsuro-"]
	},
	{
		kanji: "<Ruby>凶弾<rt>ショット</rt></Ruby>",
		romaji: "kyoudan",
		eng: "shotto",
		validInputs: ["kyoudan"],
		validInputs2: ["shotto", "syotto"]
	},
	{
		kanji: "<Ruby>道標<rt>ガイドポスト</rt></Ruby>",
		romaji: "mitisirube",
		eng: "gaidoposuto",
		validInputs: ["mitisirube", "mitishirube", "miticirube", "michisirube", "michishirube", "michicirube"],
		validInputs2: ["gaidoposuto"]
	},
	{
		kanji: "<Ruby>解析<rt>アナリシス</rt></Ruby>",
		romaji: "kaiseki",
		eng: "anarisisu",
		validInputs: ["kaiseki", "caiseki"],
		validInputs2: ["anarisisu", "anarishisu", "anaricisu"]
	},
	{
		kanji: "<Ruby>宝籤<rt>ロトリー</rt></Ruby>",
		romaji: "takarakuji",
		eng: "rotori-",
		validInputs: [
			"takarakuji",
			"takarakuzi",
			"takaracuji",
			"takaracuzi",
			"takaraquji",
			"takaraquzi",
			"tacarakuji",
			"tacarakuzi",
			"tacaracuji",
			"tacaracuzi",
			"tacaraquji",
			"tacaraquzi"
		],
		validInputs2: ["rotori-"]
	},
	{
		kanji: "<Ruby>密着<rt>アドヒージョン</rt></Ruby>",
		romaji: "mittyaku",
		eng: "adohi-jon",
		validInputs: [
			"mittyaku",
			"mittyacu",
			"mittyaqu",
			"micchaku",
			"micchacu",
			"micchaqu",
			"miccyaku",
			"miccyacu",
			"miccyaqu"
		],
		validInputs2: ["adohi-jon", "adohi-jyon", "adohi-zyon"]
	},
	{
		kanji: "<Ruby>浄化<rt>ピュリファイ</rt></Ruby>",
		romaji: "jouka",
		eng: "pyurifai",
		validInputs: ["jouka", "jouca", "jyouka", "jyouca", "zyouka", "zyouca"],
		validInputs2: ["pyurifai"]
	},
	{
		kanji: "<Ruby>堅牢<rt>プリズン</rt></Ruby>",
		romaji: "kenrou",
		eng: "purizun",
		validInputs: ["kenrou", "kennrou"],
		validInputs2: ["purizun"]
	},
	{
		kanji: "<Ruby>神眼<rt>ゴッドアイ</rt></Ruby>",
		romaji: "singan",
		eng: "goddoai",
		validInputs: ["singan", "sinngan", "shingan", "shinngan", "cingan", "cinngan"],
		validInputs2: ["goddoai"]
	},
	{
		kanji: "<Ruby>再生<rt>リサイクル</rt></Ruby>",
		romaji: "saisei",
		eng: "risaikuru",
		validInputs: ["saisei"],
		validInputs2: ["risaikuru", "risaicuru", "risaiquru"]
	},
	{
		kanji: "<Ruby>名簿<rt>リスト</rt></Ruby>",
		romaji: "meibo",
		eng: "risuto",
		validInputs: ["meibo"],
		validInputs2: ["risuto"]
	},
	{
		kanji: "<Ruby>同行<rt>アカンパニー</rt></Ruby>",
		romaji: "doukou",
		eng: "akanpani-",
		validInputs: ["doukou", "doucou"],
		validInputs2: ["akanpani-", "akannpani-", "acanpani-", "acannpani-"]
	},
	{
		kanji: "<Ruby>交信<rt>コンタクト</rt></Ruby>",
		romaji: "kousin",
		eng: "kontakuto",
		validInputs: ["kousin", "koushin", "koucin", "cousin", "coushin", "coucin"],
		validInputs2: [
			"kontakuto",
			"kontacuto",
			"kontaquto",
			"konntakuto",
			"konntacuto",
			"konntaquto",
			"contakuto",
			"contacuto",
			"contaquto",
			"conntakuto",
			"conntacuto",
			"conntaquto"
		]
	},
	{
		kanji: "<Ruby>排除<rt>エリミネート</rt></Ruby>",
		romaji: "haijo",
		eng: "erimine-to",
		validInputs: ["haijo", "haijyo", "haizyo"],
		validInputs2: ["erimine-to"]
	}
];
