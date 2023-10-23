//小説の言葉
export type WordList = {
	kanji: string;
	romaji: string;
	eng: string;
	validInputs: string[];
	validInputs2: string[];
};

export const magicItems: WordList[] = [
	{
		kanji: "アイギスの盾",
		romaji: "aigisunotate",
		eng: "aegis hield",
		validInputs: ["aigisunotate"],
		validInputs2: []
	}, //1
	{
		kanji: "愛の秘薬",
		romaji: "ainohiyaku",
		eng: "Love Potion",
		validInputs: ["ainohiyaku", "ainohiyacu", "ainohiyaqu"],
		validInputs2: []
	}, //3
	{
		kanji: "アカシックレコード",
		romaji: "akasikkureko-do",
		eng: "Akashic Records",
		validInputs: [
			"akasikkureko-do",
			"akasiccureco-do",
			"akashikkureko-do",
			"akashikkureco-do",
			"akashiccureko-do",
			"akashiccureco-do",
			"akasiccureko-do",
			"akasikkureco-do",
			"akaciccureko-do",
			"akacikkureco-do",
			"akacikkureko-do",
			"acashikkureko-do",
			"acashikkureco-do",
			"acashiccureko-do",
			"acashiccureco-do",
			"acasiccureko-do",
			"acasiccureco-do",
			"acasikkureko-do",
			"acasikkureco-do",
			"acaciccureko-do",
			"acaciccureco-do",
			"acacikkureko-do",
			"acacikkureco-do",
			"akashiqqureko-do",
			"akashiqqureco-do",
			"akasiqqureko-do",
			"akasiqqureco-do",
			"akaciqqureko-do",
			"akaciqqureco-do",
			"acashiqqureko-do",
			"acashiqqureco-do",
			"acasiqqureko-do",
			"acasiqqureco-do",
			"acaciqqureko-do",
			"acaciqqureco-do"
		],
		validInputs2: []
	}, //36
	{
		kanji: "アキレウスの鎧",
		romaji: "akireusunoyoroi",
		eng: "achilles armor",
		validInputs: ["akireusunoyoroi"], //1
		validInputs2: []
	},
	{
		kanji: "アスクレピオスの杖",
		romaji: "asukurepiosunotue",
		eng: "asclepius staff",
		validInputs: [
			"asukurepiosunotue",
			"asukurepiosunotsue",
			"asucurepiosunotsue",
			"asucurepiosunotue",
			"asuqurepiosunotsue",
			"asuqurepiosunotue"
		], //6
		validInputs2: []
	},
	{ kanji: "梓弓", romaji: "azusayumi", eng: "Azusa Bow", validInputs: ["azusayumi"], validInputs2: [] }, //1
	{
		kanji: "アポロンの竪琴",
		romaji: "aporonnnotategoto",
		eng: "apollos lyre",
		validInputs: ["aporonnnotategoto"], //1
		validInputs2: []
	},
	{ kanji: "アミュレット", romaji: "amyuretto", eng: "Amulet", validInputs: ["amyuretto"], validInputs2: [] }, //1
	{
		kanji: "アリアドネの糸",
		romaji: "ariadonenoito",
		eng: "ariadnes thread",
		validInputs: ["ariadonenoito"],
		validInputs2: []
	}, //1
	{
		kanji: "アレクサンドリア図書館",
		romaji: "arekusandoriatosyokan",
		eng: "library of alexandria",
		validInputs: [
			"arekusandoriatosyokan",
			"arekusandoriatoshokan",
			"arekusandoriatosyocan",
			"arekusandoriatoshocan",
			"arecusandoriatosyokan",
			"arecusandoriatoshokan",
			"arecusandoriatosyocan",
			"arecusandoriatoshocan",
			"arequsandoriatosyokan",
			"arequsandoriatoshokan",
			"arequsandoriatosyocan",
			"arequsandoriatoshocan",
			"arekusanndoriatosyokan",
			"arekusanndoriatoshokan",
			"arekusanndoriatosyocan",
			"arekusanndoriatoshocan",
			"arecusanndoriatosyokan",
			"arecusanndoriatoshokan",
			"arecusanndoriatosyocan",
			"arecusanndoriatoshocan",
			"arequsanndoriatosyokan",
			"arequsanndoriatoshokan",
			"arequsanndoriatosyocan",
			"arequsanndoriatoshocan"
		],
		validInputs2: []
	}, //24
	{
		kanji: "アンブロシア",
		romaji: "anburosia",
		eng: "ambrosia",
		validInputs: ["anburosia", "anburoshia", "anbrocia", "annburosia", "annburoshia", "annbrocia"],
		validInputs2: []
	}, //6
	{
		kanji: "イカロスの翼",
		romaji: "ikarosunotubasa",
		eng: "icarus wings",
		validInputs: ["ikarosunotubasa", "ikarosunotsubasa", "icarosunotubasa", "icarosunotsubasa"],
		validInputs2: []
	}, //4
	{
		kanji: "イモリの黒焼き",
		romaji: "imorinokuroyaki",
		eng: "charred newt",
		validInputs: ["imorinokuroyaki", "imorinocuroyaki", "imorinoquroyaki"],
		validInputs2: []
	} //3
	// {
	// 	kanji: "ヴァジュラ",
	// 	romaji: "vajura",
	// 	eng: "vajra",
	// 	validInputs: ["vajura", "vajyura", "vazyura"],
	// 	validInputs2: []
	// }, //3
	// {
	// 	kanji: "ヴォータンの槍",
	// 	romaji: "vo-tannnoyari",
	// 	eng: "wotans spear",
	// 	validInputs: ["vo-tannnoyari"],
	// 	validInputs2: []
	// }, //1
	// {
	// 	kanji: "打ち出の小槌",
	// 	romaji: "utidenokozuti",
	// 	eng: "uchide mallet",
	// 	validInputs: [
	// 		"utidenokozuti",
	// 		"utidenocozuti",
	// 		"utidenokozuchi",
	// 		"utidenocozuchi",
	// 		"uchidenokozuti",
	// 		"uchidenocozuti",
	// 		"uchidenokozuchi",
	// 		"uchidenocozuchi"
	// 	],
	// 	validInputs2: []
	// }, //8
	// {
	// 	kanji: "イチイバル",
	// 	romaji: "itiibaru",
	// 	eng: "ichii-ball",
	// 	validInputs: ["itiibaru", "ichiibaru"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "エウリュトスの弓",
	// 	romaji: "euryutosunoyumi",
	// 	eng: "eurytus bow",
	// 	validInputs: ["euryutosunoyumi"],
	// 	validInputs2: []
	// }, //1
	// {
	// 	kanji: "エクスカリバー",
	// 	romaji: "ekusukariba-",
	// 	eng: "excalibur",
	// 	validInputs: ["ekusukariba-", "ekusucariba-", "ecusukariba-", "ecusucariba-", "equsukariba-", "equsucariba-"],
	// 	validInputs2: []
	// }, //6
	// {
	// 	kanji: "円卓",
	// 	romaji: "entaku",
	// 	eng: "round table",
	// 	validInputs: ["entaku", "entacu", "entaqu", "enntaku", "enntacu", "enntaqu"],
	// 	validInputs2: []
	// }, //6
	// {
	// 	kanji: "黄金の花嫁",
	// 	romaji: "ougonnnohanayome",
	// 	eng: "golden bride",
	// 	validInputs: ["ougonnnohanayome"],
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "オティヌスの弩",
	// 	romaji: "othinusunoisiyumi",
	// 	eng: "othinus crossbow",
	// 	validInputs: [
	// 		"othinusunoisiyumi",
	// 		"othinusunoishiyumi",
	// 		"othinusunoiciyumi",
	// 		"otelinusunoisiyumi",
	// 		"otelinusunoishiyumi",
	// 		"otelinusunoiciyumi",
	// 		"otexinusunoisiyumi",
	// 		"otexinusunoishiyumi",
	// 		"otexinusunoiciyumi"
	// 	],
	// 	validInputs2: []
	// }, //9
	// {
	// 	kanji: "オリハルコン",
	// 	romaji: "oriharukon",
	// 	eng: "orichalcum",
	// 	validInputs: ["oriharukon", "oriharucon"],
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "オルフェウスの竪琴",
	// 	romaji: "orufeusunotategoto",
	// 	eng: "orpheus yre",
	// 	validInputs: ["orufeusunotategoto"],
	// 	validInputs2: []
	// }, //1
	// {
	// 	kanji: "ガルダの羽根",
	// 	romaji: "garudanohane",
	// 	eng: "garudas feather",
	// 	validInputs: ["garudanohane"],
	// 	validInputs2: []
	// }, //1
	// {
	// 	kanji: "カンタレラ",
	// 	romaji: "kantarera",
	// 	eng: "cantarella",
	// 	validInputs: ["kantarera", "cantarera", "kanntarera", "canntarera"], //4
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "菊一文字",
	// 	romaji: "kikuitimonji",
	// 	eng: "kikuichimonji",
	// 	validInputs: [
	// 		"kikuitimonji",
	// 		"kikuichimonji",
	// 		"kikuitimonzi",
	// 		"kikuichimonzi",
	// 		"kicuitimonji",
	// 		"kicuichimonji",
	// 		"kicuitimonzi",
	// 		"kicuichimonzi",
	// 		"kiquitimonji",
	// 		"kiquichimonji",
	// 		"kiquitimonzi",
	// 		"kiquichimonzi",
	// 		"kikuitimonnji",
	// 		"kikuichimonnji",
	// 		"kikuitimonnzi",
	// 		"kikuichimonnzi",
	// 		"kicuitimonnji",
	// 		"kicuichimonnji",
	// 		"kicuitimonnzi",
	// 		"kicuichimonnzi",
	// 		"kiquitimonnji",
	// 		"kiquichimonnji",
	// 		"kiquitimonnzi",
	// 		"kiquichimonnzi"
	// 	],
	// 	validInputs2: []
	// }, //16
	// {
	// 	kanji: "ギャラルホルン",
	// 	romaji: "gyararuhorun",
	// 	eng: "gjallarhorn",
	// 	validInputs: ["gyararuhorun"],
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "草薙剣",
	// 	romaji: "kusanaginoturugi",
	// 	eng: "kusanagi Sword",
	// 	validInputs: [
	// 		"kusanaginoturugi",
	// 		"kusanaginotsurugi",
	// 		"cusanaginoturugi",
	// 		"cusanaginotsurugi",
	// 		"qusanaginoturugi",
	// 		"qusanaginotsurugi"
	// 	],
	// 	validInputs2: []
	// }, //6
	// { kanji: "グラム", romaji: "guramu", eng: "gram", validInputs: ["guramu"], validInputs2: [] }, //1
	// { kanji: "グレイプニル", romaji: "gureipuniru", eng: "gleipnir", validInputs: ["gureipuniru"], validInputs2: [] }, //1
	// {
	// 	kanji: "グングニル",
	// 	romaji: "gunguniru",
	// 	eng: "gungnir",
	// 	validInputs: ["gunguniru", "gunnguniru"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "小鴉丸",
	// 	romaji: "kogarasumaru",
	// 	eng: "kogarasumaru",
	// 	validInputs: ["kogarasumaru", "cogarasumaru"],
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "虎徹",
	// 	romaji: "kotetu",
	// 	eng: "kotetsu",
	// 	validInputs: ["kotetu", "kotetsu", "cotetu", "cotetsu"],
	// 	validInputs2: []
	// }, //4
	// {
	// 	kanji: "死海文書",
	// 	romaji: "sikaimonjo",
	// 	eng: "Dead Sea Scrolls",
	// 	validInputs: [
	// 		"sikaimonjo",
	// 		"sikaimonjyo",
	// 		"sikaimonzyo",
	// 		"shikaimonjo",
	// 		"shikaimonjyo",
	// 		"shikaimonzyo",
	// 		"cikaimonjo",
	// 		"cikaimonjyo",
	// 		"cikaimonzyo",
	// 		"sicaimonjo",
	// 		"sicaimonjyo",
	// 		"sicaimonzyo",
	// 		"shicaimonjo",
	// 		"shicaimonjyo",
	// 		"shicaimonzyo",
	// 		"cicaimonjo",
	// 		"cicaimonjyo",
	// 		"cicaimonzyo",
	// 		"sikaimonnjo",
	// 		"sikaimonnjyo",
	// 		"sikaimonnzyo",
	// 		"shikaimonnjo",
	// 		"shikaimonnjyo",
	// 		"shikaimonnzyo",
	// 		"cikaimonnjo",
	// 		"cikaimonnjyo",
	// 		"cikaimonnzyo",
	// 		"sicaimonnjo",
	// 		"sicaimonnjyo",
	// 		"sicaimonnzyo",
	// 		"shicaimonnjo",
	// 		"shicaimonnjyo",
	// 		"shicaimonnzyo",
	// 		"cicaimonnjo",
	// 		"cicaimonnjyo",
	// 		"cicaimonnzyo"
	// 	],
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "七枝刀",
	// 	romaji: "sitisitou",
	// 	eng: "sichisito",
	// 	validInputs: [
	// 		"sitisitou",
	// 		"sitishitou",
	// 		"siticitou",
	// 		"shitishitou",
	// 		"citicitou",
	// 		"sichisitou",
	// 		"sichishitou",
	// 		"sichicitou",
	// 		"shichishitou",
	// 		"cichicitou"
	// 	],
	// 	validInputs2: []
	// }, //10
	// {
	// 	kanji: "シビュレの書",
	// 	romaji: "sibyurenosyo",
	// 	eng: "sibylline books",
	// 	validInputs: ["sibyurenosyo", "shibyurenosyo", "cibyurenosyo", "sibyurenosho", "shibyurenosho", "cibyurenosho"],
	// 	validInputs2: []
	// }, //6
	// { kanji: "スカラベ", romaji: "sukarabe", eng: "scarab", validInputs: ["sukarabe", "sucarabe"], validInputs2: [] }, //2
	// {
	// 	kanji: "ストーンヘンジ",
	// 	romaji: "suto-nhenji",
	// 	eng: "stonehenge",
	// 	validInputs: [
	// 		"suto-nhenji",
	// 		"suto-nhenzi",
	// 		"suto-nnhennji",
	// 		"suto-nnhennzi",
	// 		"suto-nnhenji",
	// 		"suto-nnhenzi",
	// 		"suto-nhennji",
	// 		"suto-nhennzi"
	// 	],
	// 	validInputs2: []
	// }, //8
	// {
	// 	kanji: "ゼウスの雷霆",
	// 	romaji: "zeusunoraitei",
	// 	eng: "zeus thunderbolt",
	// 	validInputs: ["zeusunoraitei"], //1
	// 	validInputs2: []
	// },
	// { kanji: "聖槍", romaji: "seisou", eng: "holy spear", validInputs: ["seisou"], validInputs2: [] }, //1
	// { kanji: "聖杯", romaji: "seihai", eng: "holy grail", validInputs: ["seihai"], validInputs2: [] }, //1
	// {
	// 	kanji: "ゾンビパウダー",
	// 	romaji: "zonbipauda-",
	// 	eng: "zombie powder",
	// 	validInputs: ["zonbipauda-", "zonnbipauda-"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "ダインスレイフ",
	// 	romaji: "dainsureifu",
	// 	eng: "dainsleif",
	// 	validInputs: ["dainsureifu", "dainsureihu", "dainnsureifu", "dainnsureihu"],
	// 	validInputs2: []
	// }, //4
	// {
	// 	kanji: "ダマスカス鋼",
	// 	romaji: "damasukasukou",
	// 	eng: "damascus steel",
	// 	validInputs: ["damasukasukou", "damasukasucou", "damasucasukou", "damasucasucou"],
	// 	validInputs2: []
	// }, //4
	// {
	// 	kanji: "玉手箱",
	// 	romaji: "tamatebako",
	// 	eng: "tamatebako",
	// 	validInputs: ["tamatebako", "tamatebaco"],
	// 	validInputs2: []
	// }, //2
	// { kanji: "タリスマン", romaji: "tarisuman", eng: "talisman", validInputs: ["tarisuman"], validInputs2: [] }, //1
	// { kanji: "達磨", romaji: "daruma", eng: "daruma", validInputs: ["daruma"], validInputs2: [] }, //1
	// {
	// 	kanji: "ディンギルの塔",
	// 	romaji: "dhingirunotou",
	// 	eng: "tower of dingir",
	// 	validInputs: [
	// 		"dhingirunotou",
	// 		"delingirunotou",
	// 		"dexingirunotou",
	// 		"dhinngirunotou",
	// 		"delinngirunotou",
	// 		"dexinngirunotou"
	// 	],
	// 	validInputs2: []
	// }, //6
	// {
	// 	kanji: "デュランダル",
	// 	romaji: "dhurandaru",
	// 	eng: "durandal",
	// 	validInputs: ["dhurandaru", "dhuranndaru"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "テュルフィング",
	// 	romaji: "thurufingu",
	// 	eng: "tyrfing",
	// 	validInputs: ["thurufingu", "thurufinngu"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "十種の神宝",
	// 	romaji: "tokusanokandakara",
	// 	eng: "ten sacred treasures",
	// 	validInputs: [
	// 		"tokusanokandakara",
	// 		"tokusanokandacara",
	// 		"tokusanocandakara",
	// 		"tokusanocandacara",
	// 		"tocusanokandakara",
	// 		"tocusanokandacara",
	// 		"tocusanocandakara",
	// 		"tocusanocandacara",
	// 		"toqusanokandakara",
	// 		"toqusanokandacara",
	// 		"toqusanocandakara",
	// 		"toqusanocandacara"
	// 	],
	// 	validInputs2: []
	// }, //12
	// {
	// 	kanji: "トロイアの木馬",
	// 	romaji: "toroianomokuba",
	// 	eng: "trojan horse",
	// 	validInputs: ["toroianomokuba", "toroianomocuba", "toroianomoquba"],
	// 	validInputs2: []
	// }, //3
	// {
	// 	kanji: "蜻蛉切",
	// 	romaji: "tonbokiri",
	// 	eng: "tonbokiri",
	// 	validInputs: ["tonbokiri", "tonnbokiri"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "ネクロノミコン",
	// 	romaji: "nekuronomikon",
	// 	eng: "necronomicon",
	// 	validInputs: ["nekuronomikon", "nekuronomicon", "necuronomikon", "necuronomicon", "nequronomikon", "nequronomicon"],
	// 	validInputs2: []
	// }, //6
	// {
	// 	kanji: "ノアの方舟",
	// 	romaji: "noanohakobune",
	// 	eng: "noahs ark",
	// 	validInputs: ["noanohakobune", "noanohacobune"],
	// 	validInputs2: []
	// }, //2
	// { kanji: "バベルの塔", romaji: "baberunotou", eng: "tower of babel", validInputs: ["baberunotou"], validInputs2: [] }, //1
	// { kanji: "パルテノン", romaji: "parutenon", eng: "parthenon", validInputs: ["parutenon"], validInputs2: [] }, //1
	// {
	// 	kanji: "バルムンク",
	// 	romaji: "barumunku",
	// 	eng: "balmung",
	// 	validInputs: ["barumunku", "barumuncu", "barumunqu", "barumunnku", "barumunncu", "barumunnqu"],
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "反魂香",
	// 	romaji: "hangonkou",
	// 	eng: "resurrection incense",
	// 	validInputs: [
	// 		"hangonkou",
	// 		"hangoncou",
	// 		"hangonnkou",
	// 		"hangonncou",
	// 		"hanngonkou",
	// 		"hanngoncou",
	// 		"hanngonnkou",
	// 		"hanngonncou"
	// 	],
	// 	validInputs2: []
	// }, //8
	// {
	// 	kanji: "パンドラの箱",
	// 	romaji: "pandoranohako",
	// 	eng: "pandoras box",
	// 	validInputs: ["pandoranohako", "pandoranohaco", "panndoranohako", "panndoranohaco"],
	// 	validInputs2: []
	// }, //4
	// { kanji: "膝丸", romaji: "hizamaru", eng: "hizamaru", validInputs: ["hizamaru"], validInputs2: [] }, //1
	// {
	// 	kanji: "雛人形",
	// 	romaji: "hinaningyou",
	// 	eng: "hina doll",
	// 	validInputs: ["hinaningyou", "hinaninngyou"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "ヒヒイロカネ",
	// 	romaji: "hihiirokane",
	// 	eng: "hihiirokane",
	// 	validInputs: ["hihiirokane", "hihiirocane"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "ピュリスの手",
	// 	romaji: "pyurisunote",
	// 	eng: "hand of pyris",
	// 	validInputs: ["pyurisunote"],
	// 	validInputs2: []
	// }, //1
	// {
	// 	kanji: "ファーティマの手",
	// 	romaji: "fa-thimanote",
	// 	eng: "Hand of Fatima",
	// 	validInputs: ["fa-thimanote", "fa-telimanote", "fa-teximanote"], //3
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "プランシェット",
	// 	romaji: "puransyetto",
	// 	eng: "planchette",
	// 	validInputs: ["puransyetto", "puranshetto", "purannsyetto", "purannshetto"],
	// 	validInputs2: []
	// }, //4
	// {
	// 	kanji: "ブリューナク",
	// 	romaji: "buryu-naku",
	// 	eng: "brunak",
	// 	validInputs: ["buryu-naku", "buryu-nacu", "buryu-naqu"],
	// 	validInputs2: []
	// }, //3
	// {
	// 	kanji: "フレイの馬",
	// 	romaji: "fureinouma",
	// 	eng: "freis horse",
	// 	validInputs: ["fureinouma", "hureinouma"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "フレイムランス",
	// 	romaji: "fureimuransu",
	// 	eng: "Flame Lance",
	// 	validInputs: ["fureimuransu", "hureimuransu", "fureimurannsu", "hureimurannsu"],
	// 	validInputs2: []
	// }, //4
	// {
	// 	kanji: "ヘズワルの剣",
	// 	romaji: "hezuwarunoken",
	// 	eng: "sword of hezwar",
	// 	validInputs: ["hezuwarunoken"],
	// 	validInputs2: []
	// }, //1
	// {
	// 	kanji: "ヘラクレスの弓",
	// 	romaji: "herakuresunoyumi",
	// 	eng: "bow of hercules",
	// 	validInputs: ["herakuresunoyumi", "heracuresunoyumi", "heraquresunoyumi"],
	// 	validInputs2: []
	// }, //3
	// { kanji: "ベラドンナ", romaji: "beradonnna", eng: "belladonna", validInputs: ["beradonnna"], validInputs2: [] }, //1
	// {
	// 	kanji: "ペルセウスの靴",
	// 	romaji: "peruseusunokutu",
	// 	eng: "Shoes of Perseus",
	// 	validInputs: [
	// 		"peruseusunokutu",
	// 		"peruseusunokutsu",
	// 		"peruseusunocutu",
	// 		"peruseusunocutsu",
	// 		"peruseusunoqutu",
	// 		"peruseusunoqutsu"
	// 	],
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "ヘルメスの杖",
	// 	romaji: "herumesunotue",
	// 	eng: "staff of hermes",
	// 	validInputs: ["herumesunotsue", "herumesunotue"],
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "ポセイドンの戟",
	// 	romaji: "poseidonnnohoko",
	// 	eng: "trident of poseidon",
	// 	validInputs: ["poseidonnnohoko", "poseidonnnohoco"], //2
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "ホテルスの帯",
	// 	romaji: "hoterusunoobi",
	// 	eng: "belt of hotei",
	// 	validInputs: ["hoterusunoobi"],
	// 	validInputs2: []
	// }, //1
	// { kanji: "ホルスの目", romaji: "horusunome", eng: "eye of horus", validInputs: ["horusunome"], validInputs2: [] }, //1
	// {
	// 	kanji: "魔女の軟膏",
	// 	romaji: "majononankou",
	// 	eng: "witch's ointment",
	// 	validInputs: [
	// 		"majononankou",
	// 		"majyononankou",
	// 		"mazyononankou",
	// 		"majononancou",
	// 		"majyononancou",
	// 		"mazyononancou",
	// 		"majononannkou",
	// 		"majyononannkou",
	// 		"mazyononannkou",
	// 		"majononanncou",
	// 		"majyononanncou",
	// 		"mazyononanncou"
	// 	],
	// 	validInputs2: []
	// }, //12
	// { kanji: "魔弾", romaji: "madan", eng: "magic bullet", validInputs: ["madan"], validInputs2: [] }, //1
	// {
	// 	kanji: "マラキの予言",
	// 	romaji: "marakinoyogen",
	// 	eng: "prophecy of malachi",
	// 	validInputs: ["marakinoyogen"],
	// 	validInputs2: []
	// }, //1
	// { kanji: "曼陀羅", romaji: "mandara", eng: "mandala", validInputs: ["mandara", "manndara"], validInputs2: [] }, //2
	// { kanji: "ミスリル", romaji: "misuriru", eng: "mithril", validInputs: ["misuriru"], validInputs2: [] }, //1
	// { kanji: "ミョルニル", romaji: "myoruniru", eng: "mjolnir", validInputs: ["myoruniru"], validInputs2: [] }, //1
	// { kanji: "村雨", romaji: "murasame", eng: "murasame", validInputs: ["murasame"], validInputs2: [] }, //1
	// { kanji: "村正", romaji: "muramasa", eng: "muramasa", validInputs: ["muramasa"], validInputs2: [] }, //1
	// {
	// 	kanji: "モーセの杖",
	// 	romaji: "mo-senotue",
	// 	eng: "mose's staff",
	// 	validInputs: ["mo-senotue", "mo-senotsue"],
	// 	validInputs2: []
	// }, //2
	// { kanji: "馬頭琴", romaji: "batoukin", eng: "horsehead fiddle", validInputs: ["batoukin"], validInputs2: [] }, //1
	// {
	// 	kanji: "八握剣",
	// 	romaji: "yatukanoturugi",
	// 	eng: "eight-grip sword",
	// 	validInputs: [
	// 		"yatukanoturugi",
	// 		"yatucanoturugi",
	// 		"yatsukanotsurugi",
	// 		"yatsucanotsurugi",
	// 		"yatukanotsurugi",
	// 		"yatucanotsurugi",
	// 		"yatsukanoturugi",
	// 		"yatsucanoturugi"
	// 	],
	// 	validInputs2: []
	// }, //8
	// { kanji: "雷切", romaji: "raikiri", eng: "lightning cutter", validInputs: ["raikiri"], validInputs2: [] }, //1
	// {
	// 	kanji: "ラビュリントス",
	// 	romaji: "rabyurintosu",
	// 	eng: "labyrinthos",
	// 	validInputs: ["rabyurintosu", "rabyurinntosu"],
	// 	validInputs2: []
	// }, //1
	// {
	// 	kanji: "竜宮城",
	// 	romaji: "ryuuguujou",
	// 	eng: "dragon palace",
	// 	validInputs: ["ryuuguujou", "ryuuguuzyou", "ryuuguujyou"],
	// 	validInputs2: []
	// }, //3
	// { kanji: "レーヴァテイン", romaji: "re-vatein", eng: "Leavateinn", validInputs: ["re-vatein"], validInputs2: [] }, //1
	// { kanji: "レメゲトン", romaji: "remegeton", eng: "Lemegton", validInputs: ["remegeton"], validInputs2: [] }, //1
	// {
	// 	kanji: "わすれな草",
	// 	romaji: "wasurenagusa",
	// 	eng: "forget me not",
	// 	validInputs: ["wasurenagusa"],
	// 	validInputs2: []
	// }, //1
	// {
	// 	kanji: "ソードブレイカー",
	// 	romaji: "so-dobureika-",
	// 	eng: "swordbreaker",
	// 	validInputs: ["so-dobureika-", "so-dobureica-"],
	// 	validInputs2: []
	// },
	// {
	// 	kanji: "フランベルジュ",
	// 	romaji: "furanberuju",
	// 	eng: "flamberge",
	// 	validInputs: [
	// 		"furanberuju",
	// 		"furanberujyu",
	// 		"furanberuzyu",
	// 		"huranberuju",
	// 		"huranberujyu",
	// 		"huranberuzyu",
	// 		"furannberuju",
	// 		"furannberujyu",
	// 		"furannberuzyu",
	// 		"hurannberuju",
	// 		"hurannberujyu",
	// 		"hurannberuzyu"
	// 	],
	// 	validInputs2: []
	// }, //12
	// {
	// 	kanji: "チャクラム",
	// 	romaji: "chakuramu",
	// 	eng: "chakram",
	// 	validInputs: [
	// 		"chakuramu",
	// 		"tyakuramu",
	// 		"cyakuramu",
	// 		"chacuramu",
	// 		"tyacuramu",
	// 		"cyacuramu",
	// 		"chaquramu",
	// 		"tyaquramu",
	// 		"cyaquramu"
	// 	],
	// 	validInputs2: []
	// }, //9
	// { kanji: "エアの剣", romaji: "eanoken", eng: "sword of ea", validInputs: ["eanoken"], validInputs2: [] }, //1
	// {
	// 	kanji: "トールハンマー",
	// 	romaji: "to-ruhanma-",
	// 	eng: "thor's hammer",
	// 	validInputs: ["to-ruhanma-", "to-ruhannma-"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "天鹿児弓",
	// 	romaji: "amenokagoyumi",
	// 	eng: "amenokago bow",
	// 	validInputs: ["amenokagoyumi", "amenocagoyumi"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "アダマンタイト",
	// 	romaji: "adamantaito",
	// 	eng: "adamantite",
	// 	validInputs: ["adamantaito", "adamanntaito"],
	// 	validInputs2: []
	// }, //2
	// {
	// 	kanji: "天羽々切",
	// 	romaji: "amenohabakiri",
	// 	eng: "amenohabakiri",
	// 	validInputs: ["amenohabakiri"],
	// 	validInputs2: []
	// }, //1
	// { kanji: "イガリマ", romaji: "igarima", eng: "igarima", validInputs: ["igarima"], validInputs2: [] }, //1
	// {
	// 	kanji: "シュルシャガナ",
	// 	romaji: "syurusyagana",
	// 	eng: "shurushagana",
	// 	validInputs: ["syurusyagana", "shurushagana", "syurushagana", "shurusyagana"],
	// 	validInputs2: []
	// }, //4
	// { kanji: "アガートラーム", romaji: "aga-tora-mu", eng: "Agart Tram", validInputs: ["aga-tora-mu"], validInputs2: [] }
];

export const adjectives: WordList[] = [
	{
		kanji: "煌びやかな",
		romaji: "kirabiyakana",
		eng: "dazzling",
		validInputs: ["kirabiyakana", "kirabiyacana"],
		validInputs2: []
	},
	{
		kanji: "深淵の",
		romaji: "sinnennno",
		eng: "abyssal",
		validInputs: ["sinnennno", "shinnennno", "cinnennno"],
		validInputs2: []
	},
	{ kanji: "穏やかな", romaji: "odayakana", eng: "gentle", validInputs: ["odayakana", "odayacana"], validInputs2: [] },
	{ kanji: "華麗な", romaji: "kareina", eng: "splendid", validInputs: ["kareina", "careina"], validInputs2: [] },
	{
		kanji: "漆黒の",
		romaji: "sikkokuno",
		eng: "jet black",
		validInputs: [
			"sikkokuno",
			"sikkocuno",
			"sikkoquno",
			"siccokuno",
			"siccocuno",
			"siccoquno",
			"shikkokuno",
			"shikkocuno",
			"shikkoquno",
			"shiccokuno",
			"shiccocuno",
			"shiccoquno",
			"cikkokuno",
			"cikkocuno",
			"cikkoquno",
			"ciccokuno",
			"ciccocuno",
			"ciccoquno"
		],
		validInputs2: []
	},
	{
		kanji: "純白の",
		romaji: "junpakuno",
		eng: "pure white",
		validInputs: [
			"junpakuno",
			"junpacuno",
			"junpaquno",
			"jyunpakuno",
			"jyunpacuno",
			"jyunpaquno",
			"zyunpakuno",
			"zyunpacuno",
			"zyunpaquno",
			"junnpakuno",
			"junnpacuno",
			"junnpaquno",
			"jyunnpakuno",
			"jyunnpacuno",
			"jyunnpaquno",
			"zyunnpakuno",
			"zyunnpacuno",
			"zyunnpaquno"
		],
		validInputs2: []
	},
	{ kanji: "荘厳な", romaji: "sougonnna", eng: "majestic", validInputs: ["sougonnna"], validInputs2: [] },
	{ kanji: "憂鬱な", romaji: "yuuutuna", eng: "melancholic", validInputs: ["yuuutuna", "yuuutsuna"], validInputs2: [] },
	{
		kanji: "静寂の",
		romaji: "seijakuno",
		eng: "silent",
		validInputs: [
			"seijakuno",
			"seijacuno",
			"seijaquno",
			"seijyakuno",
			"seijyacuno",
			"seijyaquno",
			"seizyakuno",
			"seizyacuno",
			"seizyaquno"
		],
		validInputs2: []
	},
	{
		kanji: "躍動的な",
		romaji: "yakudoutekina",
		eng: "dynamic",
		validInputs: ["yakudoutekina", "yacudoutekina", "yaqudoutekina"],
		validInputs2: []
	},
	{
		kanji: "茜色の",
		romaji: "akaneirono",
		eng: "rosy",
		validInputs: ["akaneirono", "acaneirono"],
		validInputs2: []
	},
	{ kanji: "悠久の", romaji: "yuukyuuno", eng: "eternal", validInputs: ["yuukyuuno"], validInputs2: [] },
	{
		kanji: "眩しい",
		romaji: "mabusii",
		eng: "dazzling",
		validInputs: ["mabusii", "mabushii", "mabucii"],
		validInputs2: []
	},
	{
		kanji: "残酷な",
		romaji: "zankokuna",
		eng: "cruel",
		validInputs: [
			"zankokuna",
			"zankocuna",
			"zankoquna",
			"zancokuna",
			"zancocuna",
			"zancoquna",
			"zannkokuna",
			"zannkocuna",
			"zannkoquna",
			"zanncokuna",
			"zanncocuna",
			"zanncoquna"
		],
		validInputs2: []
	},
	{
		kanji: "絢爛たる",
		romaji: "kenrantaru",
		eng: "brilliant",
		validInputs: ["kenrantaru", "kenranntaru", "kennrantaru", "kennranntaru"],
		validInputs2: []
	},
	{ kanji: "幽玄な", romaji: "yuugennna", eng: "mystical", validInputs: ["yuugennna"], validInputs2: [] },
	{
		kanji: "荒涼とした",
		romaji: "kouryoutosita",
		eng: "desolate",
		validInputs: [
			"kouryoutosita",
			"kouryoutoshita",
			"kouryoutocita",
			"couryoutosita",
			"couryoutoshita",
			"couryoutocita"
		],
		validInputs2: []
	},
	{
		kanji: "凛とした",
		romaji: "rintosita",
		eng: "dignified",
		validInputs: ["rintosita", "rintoshita", "rintocita", "rinntosita", "rinntoshita", "rinntocita"],
		validInputs2: []
	},
	{
		kanji: "空虚な",
		romaji: "kuukyona",
		eng: "empty",
		validInputs: ["kuukyona", "cuukyona", "quukyona"],
		validInputs2: []
	},
	{ kanji: "静謐な", romaji: "seihituna", eng: "serene", validInputs: ["seihituna", "seihitsuna"], validInputs2: [] },
	{ kanji: "美麗な", romaji: "bireina", eng: "beautiful", validInputs: ["bireina"], validInputs2: [] },
	{
		kanji: "煌めく",
		romaji: "kirameku",
		eng: "sparkle",
		validInputs: ["kirameku", "kiramecu", "kiramequ"],
		validInputs2: []
	},
	{ kanji: "壮大な", romaji: "soudaina", eng: "grand", validInputs: ["soudaina"], validInputs2: [] },
	{
		kanji: "慎ましやかな",
		romaji: "tutumasiyakana",
		eng: "modest",
		validInputs: [
			"tutumasiyakana",
			"tutumasiyacana",
			"tutumashiyakana",
			"tutumashiyacana",
			"tutumaciyakana",
			"tutumaciyacana",
			"tutsumasiyakana",
			"tutsumasiyacana",
			"tutsumashiyakana",
			"tutsumashiyacana",
			"tutsumaciyakana",
			"tutsumaciyacana",
			"tsutumasiyakana",
			"tsutumasiyacana",
			"tsutumashiyakana",
			"tsutumashiyacana",
			"tsutumaciyakana",
			"tsutumaciyacana",
			"tsutsumasiyakana",
			"tsutsumasiyacana",
			"tsutsumashiyakana",
			"tsutsumashiyacana",
			"tsutsumaciyakana",
			"tsutsumaciyacana"
		],
		validInputs2: []
	},
	{
		kanji: "乾燥した",
		romaji: "kansousita",
		eng: "dry",
		validInputs: ["kansousita", "kansoushita", "kansoucita", "cansousita", "cansoushita", "cansoucita"],
		validInputs2: []
	},
	{ kanji: "潤んだ", romaji: "urunda", eng: "moist", validInputs: ["urunda", "urunnda"], validInputs2: [] },
	{
		kanji: "心地よい",
		romaji: "kokotiyoi",
		eng: "comfortable",
		validInputs: [
			"kokotiyoi",
			"kokochiyoi",
			"kocotiyoi",
			"kocochiyoi",
			"cokotiyoi",
			"cokochiyoi",
			"cocotiyoi",
			"cocochiyoi"
		],
		validInputs2: []
	},
	{ kanji: "悲劇的な", romaji: "higekitekina", eng: "tragic", validInputs: ["higekitekina"], validInputs2: [] },
	{
		kanji: "幻想的な",
		romaji: "gensoutekina",
		eng: "fantastic",
		validInputs: ["gensoutekina", "gennsoutekina"],
		validInputs2: []
	},
	{
		kanji: "深遠な",
		romaji: "sinennna",
		eng: "profound",
		validInputs: ["sinnennna", "shinnennna", "cinnennna"],
		validInputs2: []
	},
	{
		kanji: "狂おしい",
		romaji: "kuruosii",
		eng: "mad",
		validInputs: [
			"kuruosii",
			"kuruoshii",
			"kuruocii",
			"curuosii",
			"curuoshii",
			"curuocii",
			"quruosii",
			"quruoshii",
			"quruocii"
		],
		validInputs2: []
	},
	{ kanji: "暖かな", romaji: "atatakana", eng: "warm", validInputs: ["atatakana", "atatacana"], validInputs2: [] },
	{ kanji: "優雅な", romaji: "yuugana", eng: "elegant", validInputs: ["yuugana"], validInputs2: [] },
	{
		kanji: "無邪気な",
		romaji: "mujakina",
		eng: "innocent",
		validInputs: ["mujakina", "mujyakina", "muzyakina"],
		validInputs2: []
	},
	{
		kanji: "甘美な",
		romaji: "kanbina",
		eng: "sweet",
		validInputs: ["kanbina", "canbina", "kannbina", "cannbina"],
		validInputs2: []
	},
	{ kanji: "陰鬱な", romaji: "innutuna", eng: "gloomy", validInputs: ["innutuna", "innutsuna"], validInputs2: [] },
	{
		kanji: "疾風怒涛の",
		romaji: "sippuudotouno",
		eng: "stormy",
		validInputs: ["sippuudotouno", "shippuudotouno", "cippuudotouno"],
		validInputs2: []
	},
	{
		kanji: "息を呑むような",
		romaji: "ikiwonomuyouna",
		eng: "breathtaking",
		validInputs: ["ikiwonomuyouna"],
		validInputs2: []
	},
	{
		kanji: "鮮烈な",
		romaji: "senretuna",
		eng: "vivid",
		validInputs: ["senretuna", "senretsuna", "sennretuna", "sennretsuna"],
		validInputs2: []
	},
	{ kanji: "雅な", romaji: "miyabina", eng: "refined", validInputs: ["miyabina"], validInputs2: [] },
	{ kanji: "蒼ざめた", romaji: "aozameta", eng: "pale", validInputs: ["aozameta"], validInputs2: [] },
	{ kanji: "豊かな", romaji: "yutakana", eng: "rich", validInputs: ["yutakana", "yutacana"], validInputs2: [] },
	{
		kanji: "無情な",
		romaji: "mujouna",
		eng: "merciless",
		validInputs: ["mujouna", "mujyouna", "muzyouna"],
		validInputs2: []
	},
	{ kanji: "壮麗な", romaji: "soureina", eng: "magnificent", validInputs: ["soureina"], validInputs2: [] },
	{
		kanji: "純真な",
		romaji: "junsinnna",
		eng: "pure",
		validInputs: [
			"junsinnna",
			"junshinnna",
			"juncinnna",
			"jyunsinnna",
			"jyunshinnna",
			"jyuncinnna",
			"zyunsinnna",
			"zyunshinnna",
			"zyuncinnna",
			"junnsinnna",
			"junnshinnna",
			"junncinnna",
			"jyunnsinnna",
			"jyunnshinnna",
			"jyunncinnna",
			"zyunnsinnna",
			"zyunnshinnna",
			"zyunncinnna"
		],
		validInputs2: []
	},
	{
		kanji: "愛おしい",
		romaji: "itoosii",
		eng: "lovely",
		validInputs: ["itoosii", "itooshii", "itoocii"],
		validInputs2: []
	},
	{ kanji: "無垢な", romaji: "mukuna", eng: "innocent", validInputs: ["mukuna", "mucuna"], validInputs2: [] },
	{ kanji: "無限の", romaji: "mugennno", eng: "infinite", validInputs: ["mugennno"], validInputs2: [] },
	{ kanji: "儚い", romaji: "hakanai", eng: "fleeting", validInputs: ["hakanai", "hacanai"], validInputs2: [] },
	{ kanji: "陽気な", romaji: "youkina", eng: "cheerful", validInputs: ["youkina"], validInputs2: [] },
	{ kanji: "愉快な", romaji: "yukaina", eng: "pleasant", validInputs: ["yukaina", "yucaina"], validInputs2: [] },
	{
		kanji: "激しい",
		romaji: "hagesii",
		eng: "intense",
		validInputs: ["hagesii", "hageshii", "hagecii"],
		validInputs2: []
	},
	{ kanji: "切ない", romaji: "setunai", eng: "painful", validInputs: ["setunai", "setsunai"], validInputs2: [] },
	{ kanji: "美味しい", romaji: "oisii", eng: "delicious", validInputs: ["oisii", "oishii", "oicii"], validInputs2: [] },
	{
		kanji: "艶やかな",
		romaji: "tuyayakana",
		eng: "glossy",
		validInputs: ["tuyayakana", "tuyayacana", "tsuyayakana", "tsuyayacana"],
		validInputs2: []
	},
	{
		kanji: "神聖な",
		romaji: "sinseina",
		eng: "sacred",
		validInputs: ["sinseina", "shinseina", "cinseina", "sinnseina", "shinnseina", "cinnseina"],
		validInputs2: []
	},
	{
		kanji: "輝かしい",
		romaji: "kagayakasii",
		eng: "shining",
		validInputs: [
			"kagayakasii",
			"kagayakashii",
			"kagayakacii",
			"kagayacasii",
			"kagayacashii",
			"kagayacacii",
			"cagayakasii",
			"cagayakashii",
			"cagayakacii",
			"cagayacasii",
			"cagayacashii",
			"cagayacacii"
		],
		validInputs2: []
	},
	{ kanji: "遥かな", romaji: "harukana", eng: "distant", validInputs: ["harukana", "harucana"], validInputs2: [] },
	{ kanji: "哀れな", romaji: "awarena", eng: "pathetic", validInputs: ["awarena"], validInputs2: [] },
	{ kanji: "高貴な", romaji: "koukina", eng: "noble", validInputs: ["koukina", "coukina"], validInputs2: [] },
	{
		kanji: "瑞々しい",
		romaji: "mizumizusii",
		eng: "fresh",
		validInputs: ["mizumizusii", "mizumizushii", "mizumizucii"],
		validInputs2: []
	},
	{
		kanji: "魅惑的な",
		romaji: "miwakutekina",
		eng: "charming",
		validInputs: ["miwakutekina", "miwacutekina", "miwaqutekina"],
		validInputs2: []
	},
	{
		kanji: "極彩色の",
		romaji: "gokusaisyokuno",
		eng: "colorful",
		validInputs: [
			"gokusaisyokuno",
			"gokusaisyocuno",
			"gokusaisyoquno",
			"gokusaishokuno",
			"gokusaishocuno",
			"gokusaishoquno",
			"gocusaisyokuno",
			"gocusaisyocuno",
			"gocusaisyoquno",
			"gocusaishokuno",
			"gocusaishocuno",
			"gocusaishoquno",
			"goqusaisyokuno",
			"goqusaisyocuno",
			"goqusaisyoquno",
			"goqusaishokuno",
			"goqusaishocuno",
			"goqusaishoquno"
		],
		validInputs2: []
	},
	{
		kanji: "細やかな",
		romaji: "komayakana",
		eng: "meticulous",
		validInputs: ["komayakana", "komayacana", "comayakana", "comayacana"],
		validInputs2: []
	},
	{
		kanji: "剥き出しの",
		romaji: "mukidasino",
		eng: "exposed",
		validInputs: ["mukidasino", "mukidashino", "mukidacino"],
		validInputs2: []
	},
	{
		kanji: "不可解な",
		romaji: "fukakaina",
		eng: "inexplicable",
		validInputs: [
			"fukakaina",
			"fukacaina",
			"fucakaina",
			"fucacaina",
			"hukakaina",
			"hukacaina",
			"hucakaina",
			"hucacaina"
		],
		validInputs2: []
	},
	{
		kanji: "無口な",
		romaji: "mukutina",
		eng: "taciturn",
		validInputs: ["mukutina", "mukuchina", "mucutina", "mucuchina", "muqutina", "muquchina"],
		validInputs2: []
	},
	{
		kanji: "懐かしい",
		romaji: "natukasii",
		eng: "nostalgic",
		validInputs: [
			"natukasii",
			"natukashii",
			"natukacii",
			"natucasii",
			"natucashii",
			"natucacii",
			"natsukasii",
			"natsukashii",
			"natsukacii",
			"natsucasii",
			"natsucashii",
			"natsucacii"
		],
		validInputs2: []
	},
	{
		kanji: "情熱的な",
		romaji: "jounetutekina",
		eng: "passionate",
		validInputs: [
			"jounetutekina",
			"jounetsutekina",
			"jyounetutekina",
			"jyounetsutekina",
			"zyounetutekina",
			"zyounetsutekina"
		],
		validInputs2: []
	},
	{
		kanji: "悠然とした",
		romaji: "yuuzentosita",
		eng: "composed",
		validInputs: ["yuuzentosita", "yuuzentoshita", "yuuzentocita", "yuuzenntosita", "yuuzenntoshita", "yuuzenntocita"],
		validInputs2: []
	},
	{ kanji: "華麗な", romaji: "kareina", eng: "magnificent", validInputs: ["kareina", "careina"], validInputs2: [] },
	{
		kanji: "美しい",
		romaji: "utukusii",
		eng: "beautiful",
		validInputs: [
			"utukusii",
			"utukushii",
			"utukucii",
			"utucusii",
			"utucushii",
			"utucucii",
			"utuqusii",
			"utuqushii",
			"utuqucii",
			"utsukusii",
			"utsukushii",
			"utsukucii",
			"utsucusii",
			"utsucushii",
			"utsucucii",
			"utsuqusii",
			"utsuqushii",
			"utsuqucii"
		],
		validInputs2: []
	},
	{ kanji: "優れた", romaji: "sugureta", eng: "excellent", validInputs: ["sugureta"], validInputs2: [] },
	{
		kanji: "雅やかな",
		romaji: "miyabiyakana",
		eng: "elegant",
		validInputs: ["miyabiyakana", "miyabiyacana"],
		validInputs2: []
	},
	{ kanji: "甘い", romaji: "amai", eng: "sweet", validInputs: ["amai"], validInputs2: [] },
	{ kanji: "耳障りな", romaji: "mimizawarina", eng: "dissonant", validInputs: ["mimizawarina"], validInputs2: [] },
	{ kanji: "脆い", romaji: "moroi", eng: "fragile", validInputs: ["moroi"], validInputs2: [] },
	{
		kanji: "優しい",
		romaji: "yasasii",
		eng: "kind",
		validInputs: ["yasasii", "yasashii", "yasacii"],
		validInputs2: []
	},
	{
		kanji: "寒々しい",
		romaji: "samuzamusii",
		eng: "chilly",
		validInputs: ["samuzamusii", "samuzamushii", "samuzamucii"],
		validInputs2: []
	},
	{ kanji: "無慈悲な", romaji: "mujihina", eng: "ruthless", validInputs: ["mujihina", "muzihina"], validInputs2: [] },
	{ kanji: "温かい", romaji: "atatakai", eng: "warm", validInputs: ["atatakai", "atatacai"], validInputs2: [] },
	{ kanji: "気高い", romaji: "kedakai", eng: "noble", validInputs: ["kedakai", "kedacai"], validInputs2: [] }
];

//アニメ、漫画
// export const comicAndAnimeWords = [
// 	{ kanji: "アオアシ", romaji: "aoasi", eng: "Aoashi", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "あの日見た花の名前を僕達はまだ知らない",
// 		romaji: "anohimitahananonamaewobokutatihamadasiranai",
// 		eng: "Anohana: The Flower We Saw That Day",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "阿波連さんははかれない",
// 		romaji: "aharennsannhahakarenai",
// 		eng: "Aharen-san Is Indecipherable",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "甘城ブリリアントパーク", romaji: "amagiburirianntopa-ku", eng: "Amagi Brilliant Park", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "アルドノア・ゼロ", romaji: "arudonoazero", eng: "Aldnoah.Zero", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "暗殺教室", romaji: "annsatukyousitu", eng: "Assassination Classroom", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "異世界おじさん", romaji: "isekaiojisann", eng: "Uncle from Another World", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "痛いのは嫌なので防御力に極振りしたいと思います",
// 		romaji: "itainohaiyananodebougyoryokunikyokuhurisitaitoomoimasu",
// 		eng: "BOFURI: I Don’t Want to Get Hurt, So I’ll Max Out My Defense",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "イナズマイレブン", romaji: "inazumairebunn", eng: "Inazuma Eleven", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "ヴァイオレット エヴァーガーデン",
// 		romaji: "vaioretto eva-ga-denn",
// 		eng: "Violet Evergarden",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "ヴィンラント サガ", romaji: "vinnrannto saga", eng: "Vinland Saga", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "映像研には手を出すな！",
// 		romaji: "eizoukennnihatewodasuna!",
// 		eng: "Keep Your Hands Off Eizouken!",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "86-エイティシックス-", romaji: "86-eitelisikkusu-", eng: "EIGHTY SIX", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "エルフェンリート", romaji: "erufennri-to", eng: "Elfen Lied", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "エロマンガ先生", romaji: "eromanngasennsei", eng: "Eromanga Sensei", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "炎炎ノ消防隊", romaji: "ennennnosyouboutai", eng: "Fire Force", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "王様ランキング", romaji: "ousamarannkinngu", eng: "Ranking of Kings", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "桜蘭高校ホスト部", romaji: "ourannkoukouhosutobu", eng: "Ouran High School Host Club", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "狼と香辛料", romaji: "ookamitokousinnryou", eng: "Spice and Wolf", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "オーバーロード", romaji: "o-ba-ro-do", eng: "Overlord", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "推しの子", romaji: "osinoko", eng: "Oshi No Ko", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "おそ松さん", romaji: "osomatusann", eng: "Osomatsu-san", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "オッドタクシー", romaji: "oddotakusi-", eng: "ODDTAXI", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "俺の妹がこんなに可愛いわけがない",
// 		romaji: "orenoimoutogakonnnanikawaiiwakeganai",
// 		eng: "OREIMO",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "終わりのセラフ", romaji: "owarinoserahu", eng: "Seraph of the end", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ガールズ＆パンツァー", romaji: "ga-ruzu&panntsa-", eng: "GIRLS und PANZER", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "怪獣8号", romaji: "kaijyuu8gou", eng: "Kaiju No. 8", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "カウボーイビパップ", romaji: "kaubo-ibibappu", eng: "Cowboy Bebop", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "かくしごと", romaji: "kakusigoto", eng: "Kakushigoto", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
// 		romaji: "kaguyasamahakokurasetai~tennsaitatinorennaizunousenn~",
// 		eng: "Kaguya-sama: Love Is War",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "風の谷のナウシカ",
// 		romaji: "kazenotaninonausika",
// 		eng: "Nausicaa of the valley of the wind",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "がっこうぐらし！", romaji: "gakkougurasi!", eng: "SCHOOL-LIVE!", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "彼方のアストラ", romaji: "kanatanoasutora", eng: "Astra Lost in Space", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "彼女、お借りします", romaji: "kanojyo,okarisimasu", eng: "Rent a girlfriend", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "神様になった日", romaji: "kamisamaninattahi", eng: "The Day I Became a God", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "からかい上手の高木さん",
// 		romaji: "karakaijyouzunotakagisann",
// 		eng: "Teasing Master Takagi-San",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "可愛いだけじゃない式守さん",
// 		romaji: "kawaiidakejyanaisikimorisann",
// 		eng: "Shikimori's Not Just a Cutie",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "寄生獣", romaji: "kiseijyuu", eng: "Parasyte", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "機動戦士ガンダム", romaji: "kidousennsiganndamu", eng: "Mobile Suit Gundam", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "機動戦士ガンダム 水星の魔女",
// 		romaji: "kidousennsiganndamu suiseinomajyo",
// 		eng: "Mobile Suit Gundam: The Witch from Mercury",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "機動戦士ガンダム 鉄血のオルフェンズ",
// 		romaji: "kidousennsiganndamu tekketunoorufennzu",
// 		eng: "Mobile Suit Gundam: Iron-Blooded Orphans",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "鬼滅の刃", romaji: "kimetunoyaiba", eng: "Demon Slayer", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ギルティクラウン", romaji: "giruthikuraunn", eng: "The Everlasting Guilty Crown", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "キルラキル", romaji: "kirurakiru", eng: "KILL la KILL", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "キングダム", romaji: "kinngudamu", eng: "Kingdom", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "銀魂", romaji: "ginntama", eng: "Gin Tama", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "銀の匙", romaji: "ginnnosaji", eng: "Silver Spoon", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "クラナド", romaji: "kuranado", eng: "CLANNAD", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ぐらんぶる", romaji: "gurannburu", eng: "Grand Blue", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "黒子のバスケ", romaji: "kurokonobasuke", eng: "Kuroko's Basketball", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "群青のファンファーレ", romaji: "gunnjyounofannfa-re", eng: "Fanfare of Adolescence", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "けいおん！", romaji: "keionn!", eng: "K-ON!", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "ゲート 自衛隊彼の地にて斯く戦えり",
// 		romaji: "ge-to jieitaikanotinitekakutatakaeri",
// 		eng: "GATE： Where the JSDF Fought",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "血界戦線", romaji: "kekkaisennsenn", eng: "Blood Blockade Battlefront", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "月刊少女 野崎くん", romaji: "gekkannsyoujyo nozakikunn", eng: "MONTHLY GIRLS NOZAKI-KUN", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "攻殻機動隊", romaji: "koukakukidoutai", eng: "GHOST IN THE SHELL", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "甲鉄城のカバネリ", romaji: "koutetujyounokabaneri", eng: "Kabaneri of the Iron Fortress", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "聲の形", romaji: "koenokatati", eng: "A Silent Voice", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "コードギアス 反逆のルルーシュ",
// 		romaji: "ko-dogiasu hanngyakunoruru-syu",
// 		eng: "CODE GEASS Lelouch of the Rebellion",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "ゴールデンカムイ", romaji: "go-rudennkamui", eng: "Golden Kamuy", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "ご注文はうさぎですか？",
// 		romaji: "gotyuumonnhausagidesuka?",
// 		eng: "Is the Order a Rabbit?",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "五等分の花嫁", romaji: "gotoubunnnohanayome", eng: "The Quintessential Quintuplets", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "この素晴らしい世界に祝福を！",
// 		romaji: "konosubarasiisekainisyukuhukuwo!",
// 		eng: "Konosuba: God's Blessing on This Wonderful World!",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "この素晴らしい世界に爆焔を！",
// 		romaji: "konosubarasiisekainibakuennwo!",
// 		eng: "KonoSuba: An Explosion on This Wonderful World!",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "小林さんちのメイドラゴン",
// 		romaji: "kobayasisanntinomeidoragonn",
// 		eng: "Miss Kobayashi's Dragon Maid",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "古見さんは、コミュ症です。",
// 		romaji: "komisannha,komyusyoudesu",
// 		eng: "Komi Can't Communicate",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "金色のガッシュベル!!", romaji: "konnjikinogassyuberu!", eng: "Zatch Bell!", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "サイコパス", romaji: "saikopasu", eng: "PSYCHO-PASS", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "冴えない彼女の育てかた",
// 		romaji: "saenaikanojyonosodatekata",
// 		eng: "How to Raise a Boring Girlfriend",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "さくら荘のペットな彼女",
// 		romaji: "sakurasounopettonakanojyo",
// 		eng: "The Pet Girl of Sakurasou",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "サマーウォーズ", romaji: "sama-who-zu", eng: "SUMMER WARS", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "三月のライオン", romaji: "sanngatunoraionn", eng: "MARCH COMES IN LIKE A LION", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "四月は君の嘘", romaji: "sigatuhakiminouso", eng: "Your Lie in April", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "地獄楽", romaji: "jigokuraku", eng: "Hell's Paradise", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "呪術廻戦", romaji: "jyujyutukaisenn", eng: "Jujutsu Kaisen", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "シュタインズゲート", romaji: "syutainnzuge-to", eng: "STEINS;GATE", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "女子高生の無駄づかい",
// 		romaji: "jyosikouseinomudadukai",
// 		eng: "Wasteful Days of High School Girl",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "終末なにしてますか？忙しいですか？救ってもらっていいですか？",
// 		romaji: "syuumatunanisitemasuka?isogasiidesuka?sukuttemoratteiidesuka?",
// 		eng: "WorldEnd: What Do You Do at the End of the World? Are You Busy? Will You Save Us?",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "ジョジョの奇妙な冒険",
// 		romaji: "jyojyonokimyounaboukenn",
// 		eng: "JoJo's Bizarre Adventure",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "SHIROBAKO", romaji: "shirobako", eng: "Shirobako", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "進撃の巨人", romaji: "sinngekinokyojinn", eng: "Attack on Titan", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "新世界より", romaji: "sinnsekaiyori", eng: "From the New World", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "新世紀エヴァンゲリオン", romaji: "sinnseikievanngerionn", eng: "Neon Genesis EVANGELION", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "スプリガン", romaji: "supurigann", eng: "SPRIGGAN", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "スラムダンク", romaji: "suramudannku", eng: "SLAM DUNK", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "涼宮ハルヒの憂鬱",
// 		romaji: "suzumiyaharuhinoyuuutu",
// 		eng: "The Melancholy of Haruhi Suzumiya",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "青春ブタ野郎はバニーガール先輩の夢を見ない",
// 		romaji: "seisyunnbutayarouhabani-ga-rusennpainoyumewominai",
// 		eng: "Rascal Does Not Dream of Bunny Girl Senpai",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "青春ブタ野郎はゆめみる少女の夢を見ない",
// 		romaji: "seisyunnbutayarouhayumemirusyoujyonoyumewominai",
// 		eng: "Rascal Does Not Dream of a Dreaming Girl",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "千と千尋の神隠し", romaji: "senntotihironokamikakusi", eng: "Spirited Away", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ソードアート オンライン", romaji: "so-doa-to onnrainn", eng: "Sword Art Online", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "その着せ替え人形は恋をする",
// 		romaji: "sonokisekaeninngyouhakoiwosuru",
// 		eng: "My Dress-Up Darling",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "宇宙よりも遠い場所",
// 		romaji: "utyuuyorimotooibasyo",
// 		eng: "A Place Further than the Universe",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "ゾンビ ランド サガ", romaji: "zonnbiranndosaga", eng: "Zombie Land Saga", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "ダーリン イン ザ フランキス",
// 		romaji: "da-rinn inn za hurannkisu",
// 		eng: "DARLING in the FRANXX",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "盾の勇者の成り上がり",
// 		romaji: "tatenoyuusyanonariagari",
// 		eng: "The Rising of the Shield Hero",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "男子高校生の日常",
// 		romaji: "dannsikoukouseinonitijyou",
// 		eng: "Daily Lives of high school boys",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "ダンジョンに出会いを求めるのは間違っているだろうか",
// 		romaji: "dannjyonnnideaiwomotomerunohamatigatteirudarouka",
// 		eng: "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "チェンソーマン", romaji: "tyennso-mann", eng: "Chainsaw Man", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ちはやふる", romaji: "tihayahuru", eng: "Chihayafuru", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "中二病でも恋がしたい！",
// 		romaji: "tyuunibyoudemokoigasitai",
// 		eng: "Love, Chunibyo & Other Delusions",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "月がきれい", romaji: "tukigakirei", eng: "as the moon, so beautiful", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "デート ア ライブ", romaji: "de-to a raibu", eng: "DATE A LIVE", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "デスノート", romaji: "desuno-to", eng: "DEATH NOTE", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "デュラララ!!", romaji: "dhurarara!!", eng: "Durarara!!", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "天空の城ラピュタ", romaji: "tennkuunosirorapyuta", eng: "Castle in the Sky", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "天元突破グレンラガン", romaji: "tenngenntoppagurennragann", eng: "Gurren Lagann", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "転生したらスライムだった件",
// 		romaji: "tennseisitarasuraimudattakenn",
// 		eng: "That Time I Got Reincarnated as a Slime",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "とある科学の超電磁砲",
// 		romaji: "toarukagakunore-rugann",
// 		eng: "A Certain Scientific Railgun",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "東京喰種トーキョーグール", romaji: "toukyougu-ru", eng: "Tokyo Ghoul", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "東京24区", romaji: "toukyou24ku", eng: "TOKYO TWENTY FOURTH WARD", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "東京マグニチュード8.0",
// 		romaji: "toukyoumagunityu-do8.0",
// 		eng: "Tokyo Magnitude 8.0: Complete Collection",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "東京リベンジャーズ", romaji: "toukyouribennjya-zu", eng: "Tokyo Revengers", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "時をかける少女", romaji: "tokiwokakerusyoujyo", eng: "Girl Who Leapt Through Time", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ドクターストーン", romaji: "dokuta-suto-nn", eng: "Dr.STONE", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "となりのトトロ", romaji: "tonarinototoro", eng: "My Neighbor Totoro", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ドラえもん", romaji: "doraemonn", eng: "Doraemon", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ドラゴンボール超", romaji: "doragonnbo-rusu-pa-", eng: "Dragon Ball Super", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "とらドラ！", romaji: "toradora!", eng: "Toradora!", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "とんでもスキルで異世界放浪メシ",
// 		romaji: "tonndemosukirudeisekaihouroumesi",
// 		eng: "Campfire Cooking in Another World with My Absurd Skill",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "凪のあすから", romaji: "naginoasukara", eng: "A Lull in the Sea", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "夏目友人帳", romaji: "nasumeyuujinntyou", eng: "Natsume's Book of Friends", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "七つの大罪", romaji: "nanatunotaizai", eng: "The Seven Deadly Sins", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ナルト", romaji: "naruto", eng: "NARUTO", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ニセコイ", romaji: "nisekoi", eng: "Nisekoi", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "日常", romaji: "nitijyou", eng: "NICHIJOU: MY ORDINARY LIFE", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ノーゲーム ノーライフ", romaji: "no-ge-mu no-raihu", eng: "NO GAME NO LIFE", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "のんのんびより", romaji: "nonnnonnbiyori", eng: "Non Non Biyori", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ハイキュー!!", romaji: "haikyu-!!", eng: "Haikyu!!", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ハイスコアガール", romaji: "haisukoaga-ru", eng: "Hi Score Girl", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "灰と幻想のグリムガル",
// 		romaji: "haitogennsounogurimugaru",
// 		eng: "Grimgar of Fantasy and Ash",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "鋼の錬金術師", romaji: "haganenorennkinnjyutusi", eng: "FULLMETAL ALCHEMIST", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "はたらく魔王さま！", romaji: "hatarakumaousama!", eng: "The Devil Is a Part-Timer", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "花咲くいろは", romaji: "hanasakuiroha", eng: "Hanasaku Iroha", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ばらかもん", romaji: "barakamonn", eng: "Barakamon", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "パリピ孔明", romaji: "paripikoumei", eng: "Ya Boy Kongming!", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ハンターハンター", romaji: "hannta-hannta-", eng: "HUNTER×HUNTER", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "東のエデン", romaji: "higasinoedenn", eng: "Eden of The East", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ヒカルの碁", romaji: "hikarunogo", eng: "Hikaru no Go", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ひぐらしのなく頃に", romaji: "higurasinonakukoroni", eng: "WHEN THEY CRY", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "美少女戦士セーラームーン", romaji: "bisyoujyosennsise-ra-mu-nn", eng: "Sailor Moon", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ヒナまつり", romaji: "hinamaturi", eng: "Hinamatsuri", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "響け！ユーフォニアム", romaji: "hibike!yu-foniamu", eng: "Sound! Euphonium", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "氷菓", romaji: "hyouka", eng: "HYOUKA", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ピンポン", romaji: "pinnponn", eng: "PingPong", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "プラスティックメモリーズ", romaji: "purasuthikkumemori-zu", eng: "Plastic Memories", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ブラック ラグーン", romaji: "burakku ragu-nn", eng: "BLACK LAGOON", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "プラネテス", romaji: "puranetesu", eng: "PLANETES", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ブリーチ", romaji: "buri-ti", eng: "BLEACH", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "フルーツバスケット", romaji: "huru-tubasuketto", eng: "Fruits Basket", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ブルーロック", romaji: "buru-rokku", eng: "BLUELOCK", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "文豪ストレイドッグス", romaji: "bunngousutoreidoggusu", eng: "Bungo Stray Dogs", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "僕だけがいない街", romaji: "bokudakegainaimati", eng: "Erased", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "僕の心のヤバイやつ", romaji: "bokunokokoronoyabaiyatu", eng: "The Dangers in My Heart", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "僕のヒーローアカデミア", romaji: "bokunohi-ro-akademia", eng: "My Hero Academia", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ぼっち ざ ろっく！", romaji: "botti za rokku!", eng: "Bocchi the Rock!", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "マイホームヒーロー", romaji: "maiho-muhi-ro-", eng: "My Home Hero", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "マクロスF", romaji: "makurosuF", eng: "MACROSS Frontier", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "魔法科高校の劣等生",
// 		romaji: "mahoukakoukounorettousei",
// 		eng: "The Irregular at Magic High School",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "魔法少女まどかマギカ",
// 		romaji: "mahousyoujyomadokamagika",
// 		eng: "Puella Magi Madoka Magica",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "魔法使いの嫁", romaji: "mahoutukainoyome", eng: "The Ancient Magus' Bride", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "輪るピングドラム", romaji: "mawarupinngudoramu", eng: "Mawaru Penguindrum", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "未来日記", romaji: "mirainikki", eng: "Future Diary", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "蟲師", romaji: "musisi", eng: "Mushishi", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "無職転生 ～異世界行ったら本気だす～",
// 		romaji: "musyokutennsei~isekaiittarahonnkidasu~",
// 		eng: "Mushoku Tensei: Jobless Reincarnation",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "名探偵コナン", romaji: "meitannteikonann", eng: "Detective Conan / Case Closed", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "メイドインアビス", romaji: "meidoinnabisu", eng: "MADE IN ABYSS", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "もののけ姫", romaji: "mononokehime", eng: "Princess Mononoke", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "モブサイコ100", romaji: "mobusaiko100", eng: "Mob Psycho 100", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "Re:ゼロから始める異世界生活",
// 		romaji: "Re:zerokarahajimeruisekaiseikatu",
// 		eng: "Re:Zero -Starting Life in Another World-",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "化物語", romaji: "bakemonogatari", eng: "BAKEMONOGATARI", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "約束のネバーランド", romaji: "yakusokunoneba-ranndo", eng: "The Promised Neverland", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "やはり俺の青春ラブコメはまちがっている。",
// 		romaji: "yahariorenoseisyunnrabukomehamatigatteiru",
// 		eng: "My Youth Romantic Comedy Is Wrong As I Expected.",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{
// 		kanji: "山田くんと Lv999 の恋をする",
// 		romaji: "yamadakunntoLv999nokoiwosuru",
// 		eng: "My Love Story with Yamada-kun at Lv999",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "結城友奈は勇者である", romaji: "yuukiyuunahayuusyadearu", eng: "YUKI YUNA IS A HERO", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "勇者、辞めます", romaji: "yuusya,yamemasu", eng: "I'm Quitting Heroing", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "幽遊白書", romaji: "yuuyuuhakusyo", eng: "YuYu Hakusho", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ユーリ!!! オン アイス", romaji: "yu-ri!!! onn aisu", eng: "YURI!!! on ICE", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ゆるキャン", romaji: "yurukyann", eng: "Laid back camp", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "ようこそ実力至上主義の教室へ",
// 		romaji: "youkosojituryokusijyousyuginokyousituhe",
// 		eng: "Classroom of the Elite",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "幼女戦記", romaji: "youjyosennki", eng: "The Saga of Tanya the Evil", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "四畳半神話大系", romaji: "yojyouhannsinnwataikei", eng: "The Tatami Galaxy", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ヨルムンガンド", romaji: "yorumunnganndo", eng: "Jormungand", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "弱虫ペダル", romaji: "yowamusipedaru", eng: "Yowamushi Pedal", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "らきすた", romaji: "rakisuta", eng: "Lucky Star", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ラブライブ！", romaji: "raburaibu!", eng: "Love Live!", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "リーマンズクラブ", romaji: "ri-mannzukurabu", eng: "Salaryman's Club", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "リライフ", romaji: "riraihu", eng: "ReLIFE", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ルパン三世", romaji: "rupannsannsei", eng: "Lupin the Third", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "レクリエイターズ", romaji: "rekurieita-zu", eng: "Re:CREATORS", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ログ ホライズン", romaji: "rogu horaizunn", eng: "LOG HORIZON", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ワールドトリガー", romaji: "wa-rudotoriga-", eng: "WORLD TRIGGER", validInputs: [] ,validInputs2:[]},
// 	{
// 		kanji: "私に天使が舞い降りた！",
// 		romaji: "watasinitennsigamaiorita!",
// 		eng: "The angel came to me from the sky",
// 		validInputs: []
// 	,validInputs2:[]},
// 	{ kanji: "ワンパンマン", romaji: "wannpannmann", eng: "One Punch-Man", validInputs: [] ,validInputs2:[]},
// 	{ kanji: "ワンピース", romaji: "wannpi-su", eng: "ONE PIECE", validInputs: [] }
// ];

//ロマンス小説の言葉
export const romanceWords = [];

//時代小説の言葉
export const historyWords = [];

//ホラー小説の言葉
export const horrorWords = [];

//冒険小説の言葉
export const adventureWords = [];

//サスペンス小説の言葉
export const suspenseWords = [];
