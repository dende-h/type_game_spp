//小説の言葉
type WordList = {
	kanji: string;
	romaji: string;
	eng: string;
	validInputs: string[];
	validInputs2?: string[];
};

export const magicItems: WordList[] = [
	// {
	// 	kanji: "魔法使い",
	// 	romaji: "mahoutukai",
	// 	eng: "wizard",
	// 	validInputs: ["mahoutukai", "mahoutsukai", "mahoutucai", "mahoutsucai"]
	// },
	// { kanji: "魔法陣", romaji: "mahoujin", eng: "magic circle", validInputs: ["mahoujin", "mahouzin"] },
	// { kanji: "呪文", romaji: "jumon", eng: "spell", validInputs: ["jumon", "jyumon", "zyumon"] },
	// { kanji: "杖", romaji: "tue", eng: "wand", validInputs: ["tue", "tsue"] },
	// { kanji: "竜", romaji: "ryuu", eng: "dragon", validInputs: ["ryuu"] },
	// { kanji: "魔王", romaji: "maou", eng: "demon king", validInputs: ["maou"] },
	// { kanji: "騎士", romaji: "kisi", eng: "knight", validInputs: ["kisi", "kici", "kishi"] },
	// {
	// 	kanji: "冒険者",
	// 	romaji: "boukensya",
	// 	eng: "adventurer",
	// 	validInputs: ["boukensya", "boukennsya", "boukensha", "boukennsha"]
	// },
	// { kanji: "勇者", romaji: "yuusya", eng: "hero", validInputs: ["yuusya", "yuusha"] },
	// { kanji: "魔獣", romaji: "majuu", eng: "magical beast", validInputs: ["majuu", "majyuu", "mazyuu"] },
	// { kanji: "召喚", romaji: "syoukan", eng: "summon", validInputs: ["syoukan", "shoukan", "syoucan", "shoucan"] },
	// { kanji: "魔力", romaji: "maryoku", eng: "magical power", validInputs: ["maryoku", "maryocu"] },
	// { kanji: "ドラゴン", romaji: "doragon", eng: "dragon", validInputs: ["doragon"] },
	// { kanji: "予言書", romaji: "yogensyo", eng: "prophecy book", validInputs: ["yogensyo", "yogensho"] },
	// {
	// 	kanji: "魔術",
	// 	romaji: "majutu",
	// 	eng: "magic art",
	// 	validInputs: ["majutu", "majutsu", "majyutu", "majyutsu", "mazyutu", "mazyutsu"]
	// },
	// { kanji: "妖精", romaji: "yousei", eng: "fairy", validInputs: ["yousei"] },
	// { kanji: "幻獣", romaji: "genjuu", eng: "phantom beast", validInputs: ["genjuu", "genjyuu", "genzyu"] },
	// { kanji: "神話", romaji: "sinwa", eng: "myth", validInputs: ["sinwa", "cinwa", "shinwa"] },
	// {
	// 	kanji: "戦士",
	// 	romaji: "sensi",
	// 	eng: "warrior",
	// 	validInputs: ["sensi", "senci", "senshi", "sennsi", "sennci", "sennshi"]
	// },
	// { kanji: "聖剣", romaji: "seiken", eng: "holy sword", validInputs: ["seiken"] },
	// { kanji: "魔界", romaji: "makai", eng: "demon world", validInputs: ["makai", "macai"] },
	// { kanji: "魔女", romaji: "majo", eng: "witch", validInputs: ["majo", "majyo", "mazyo"] },
	// { kanji: "魔法学校", romaji: "mahougakkou", eng: "magic school", validInputs: ["mahougakkou", "mahougaccou"] },

	{ kanji: "アイギスの盾", romaji: "aigisunotate", eng: "aegis hield", validInputs: ["aigisunotate"] }, //1
	{
		kanji: "愛の秘薬",
		romaji: "ainohiyaku",
		eng: "Love Potion",
		validInputs: ["ainohiyaku", "ainohiyacu", "ainohiyaqu"]
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
		]
	}, //36
	{
		kanji: "アキレウスの鎧",
		romaji: "akireusunoyoroi",
		eng: "achilles armor",
		validInputs: ["akireusunoyoroi"] //1
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
		] //6
	},
	{ kanji: "梓弓", romaji: "azusayumi", eng: "Azusa Bow", validInputs: ["azusayumi"] }, //1
	{
		kanji: "アポロンの竪琴",
		romaji: "aporonnnotategoto",
		eng: "apollos lyre",
		validInputs: ["aporonnnotategoto"] //1
	},
	{ kanji: "アミュレット", romaji: "amyuretto", eng: "Amulet", validInputs: ["amyuretto"] }, //1
	{
		kanji: "アリアドネの糸",
		romaji: "ariadonenoito",
		eng: "ariadnes thread",
		validInputs: ["ariadonenoito"]
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
		]
	}, //24
	{
		kanji: "アンブロシア",
		romaji: "anburosia",
		eng: "ambrosia",
		validInputs: ["anburosia", "anburoshia", "anbrocia", "annburosia", "annburoshia", "annbrocia"]
	}, //6
	{
		kanji: "イカロスの翼",
		romaji: "ikarosunotubasa",
		eng: "icarus wings",
		validInputs: ["ikarosunotubasa", "ikarosunotsubasa", "icarosunotubasa", "icarosunotsubasa"]
	}, //4
	{
		kanji: "イモリの黒焼き",
		romaji: "imorinokuroyaki",
		eng: "charred newt",
		validInputs: ["imorinokuroyaki", "imorinocuroyaki", "imorinoquroyaki"]
	}, //3
	{ kanji: "ヴァジュラ", romaji: "vajura", eng: "vajra", validInputs: ["vajura", "vajyura", "vazyura"] }, //3
	{
		kanji: "ヴォータンの槍",
		romaji: "vo-tannnoyari",
		eng: "wotans spear",
		validInputs: ["vo-tannnoyari"]
	}, //1
	{
		kanji: "打ち出の小槌",
		romaji: "utidenokozuti",
		eng: "uchide mallet",
		validInputs: [
			"utidenokozuti",
			"utidenocozuti",
			"utidenokozuchi",
			"utidenocozuchi",
			"uchidenokozuti",
			"uchidenocozuti",
			"uchidenokozuchi",
			"uchidenocozuchi"
		]
	}, //8
	{ kanji: "イチイバル", romaji: "itiibaru", eng: "ichii-ball", validInputs: ["itiibaru", "ichiibaru"] }, //2
	{
		kanji: "エウリュトスの弓",
		romaji: "euryutosunoyumi",
		eng: "eurytus bow",
		validInputs: ["euryutosunoyumi"]
	}, //1
	{
		kanji: "エクスカリバー",
		romaji: "ekusukariba-",
		eng: "excalibur",
		validInputs: ["ekusukariba-", "ekusucariba-", "ecusukariba-", "ecusucariba-", "equsukariba-", "equsucariba-"]
	}, //6
	{
		kanji: "円卓",
		romaji: "entaku",
		eng: "round table",
		validInputs: ["entaku", "entacu", "entaqu", "enntaku", "enntacu", "enntaqu"]
	}, //6
	{
		kanji: "黄金の花嫁",
		romaji: "ougonnnohanayome",
		eng: "golden bride",
		validInputs: ["ougonnnohanayome"]
	},
	{
		kanji: "オティヌスの弩",
		romaji: "othinusunoisiyumi",
		eng: "othinus crossbow",
		validInputs: [
			"othinusunoisiyumi",
			"othinusunoishiyumi",
			"othinusunoiciyumi",
			"otelinusunoisiyumi",
			"otelinusunoishiyumi",
			"otelinusunoiciyumi",
			"otexinusunoisiyumi",
			"otexinusunoishiyumi",
			"otexinusunoiciyumi"
		]
	}, //9
	{ kanji: "オリハルコン", romaji: "oriharukon", eng: "orichalcum", validInputs: ["oriharukon", "oriharucon"] },
	{
		kanji: "オルフェウスの竪琴",
		romaji: "orufeusunotategoto",
		eng: "orpheus yre",
		validInputs: ["orufeusunotategoto"]
	}, //1
	{
		kanji: "ガルダの羽根",
		romaji: "garudanohane",
		eng: "garudas feather",
		validInputs: ["garudanohane"]
	}, //1
	{
		kanji: "カンタレラ",
		romaji: "kantarera",
		eng: "cantarella",
		validInputs: ["kantarera", "cantarera", "kanntarera", "canntarera"] //4
	},
	{
		kanji: "菊一文字",
		romaji: "kikuitimonji",
		eng: "kikuichimonji",
		validInputs: [
			"kikuitimonji",
			"kikuichimonji",
			"kikuitimonzi",
			"kikuichimonzi",
			"kicuitimonji",
			"kicuichimonji",
			"kicuitimonzi",
			"kicuichimonzi",
			"kiquitimonji",
			"kiquichimonji",
			"kiquitimonzi",
			"kiquichimonzi",
			"kikuitimonnji",
			"kikuichimonnji",
			"kikuitimonnzi",
			"kikuichimonnzi",
			"kicuitimonnji",
			"kicuichimonnji",
			"kicuitimonnzi",
			"kicuichimonnzi",
			"kiquitimonnji",
			"kiquichimonnji",
			"kiquitimonnzi",
			"kiquichimonnzi"
		]
	}, //16
	{ kanji: "ギャラルホルン", romaji: "gyararuhorun", eng: "gjallarhorn", validInputs: ["gyararuhorun"] },
	{
		kanji: "草薙剣",
		romaji: "kusanaginoturugi",
		eng: "kusanagi Sword",
		validInputs: [
			"kusanaginoturugi",
			"kusanaginotsurugi",
			"cusanaginoturugi",
			"cusanaginotsurugi",
			"qusanaginoturugi",
			"qusanaginotsurugi"
		]
	}, //6
	{ kanji: "グラム", romaji: "guramu", eng: "gram", validInputs: ["guramu"] }, //1
	{ kanji: "グレイプニル", romaji: "gureipuniru", eng: "gleipnir", validInputs: ["gureipuniru"] }, //1
	{ kanji: "グングニル", romaji: "gunguniru", eng: "gungnir", validInputs: ["gunguniru", "gunnguniru"] }, //2
	{ kanji: "小鴉丸", romaji: "kogarasumaru", eng: "kogarasumaru", validInputs: ["kogarasumaru", "cogarasumaru"] },
	{ kanji: "虎徹", romaji: "kotetu", eng: "kotetsu", validInputs: ["kotetu", "kotetsu", "cotetu", "cotetsu"] }, //4
	{
		kanji: "死海文書",
		romaji: "sikaimonjo",
		eng: "Dead Sea Scrolls",
		validInputs: [
			"sikaimonjo",
			"sikaimonjyo",
			"sikaimonzyo",
			"shikaimonjo",
			"shikaimonjyo",
			"shikaimonzyo",
			"cikaimonjo",
			"cikaimonjyo",
			"cikaimonzyo",
			"sicaimonjo",
			"sicaimonjyo",
			"sicaimonzyo",
			"shicaimonjo",
			"shicaimonjyo",
			"shicaimonzyo",
			"cicaimonjo",
			"cicaimonjyo",
			"cicaimonzyo",
			"sikaimonnjo",
			"sikaimonnjyo",
			"sikaimonnzyo",
			"shikaimonnjo",
			"shikaimonnjyo",
			"shikaimonnzyo",
			"cikaimonnjo",
			"cikaimonnjyo",
			"cikaimonnzyo",
			"sicaimonnjo",
			"sicaimonnjyo",
			"sicaimonnzyo",
			"shicaimonnjo",
			"shicaimonnjyo",
			"shicaimonnzyo",
			"cicaimonnjo",
			"cicaimonnjyo",
			"cicaimonnzyo"
		]
	},
	{
		kanji: "七枝刀",
		romaji: "sitisitou",
		eng: "sichisito",
		validInputs: [
			"sitisitou",
			"sitishitou",
			"siticitou",
			"shitishitou",
			"citicitou",
			"sichisitou",
			"sichishitou",
			"sichicitou",
			"shichishitou",
			"cichicitou"
		]
	}, //10
	{
		kanji: "シビュレの書",
		romaji: "sibyurenosyo",
		eng: "sibylline books",
		validInputs: ["sibyurenosyo", "shibyurenosyo", "cibyurenosyo", "sibyurenosho", "shibyurenosho", "cibyurenosho"]
	}, //6
	{ kanji: "スカラベ", romaji: "sukarabe", eng: "scarab", validInputs: ["sukarabe", "sucarabe"] }, //2
	{
		kanji: "ストーンヘンジ",
		romaji: "suto-nhenji",
		eng: "stonehenge",
		validInputs: [
			"suto-nhenji",
			"suto-nhenzi",
			"suto-nnhennji",
			"suto-nnhennzi",
			"suto-nnhenji",
			"suto-nnhenzi",
			"suto-nhennji",
			"suto-nhennzi"
		]
	}, //8
	{
		kanji: "ゼウスの雷霆",
		romaji: "zeusunoraitei",
		eng: "zeus thunderbolt",
		validInputs: ["zeusunoraitei"] //1
	},
	{ kanji: "聖槍", romaji: "seisou", eng: "holy spear", validInputs: ["seisou"] }, //1
	{ kanji: "聖杯", romaji: "seihai", eng: "holy grail", validInputs: ["seihai"] }, //1
	{
		kanji: "ゾンビパウダー",
		romaji: "zonbipauda-",
		eng: "zombie powder",
		validInputs: ["zonbipauda-", "zonnbipauda-"]
	}, //2
	{
		kanji: "ダインスレイフ",
		romaji: "dainsureifu",
		eng: "dainsleif",
		validInputs: ["dainsureifu", "dainsureihu", "dainnsureifu", "dainnsureihu"]
	}, //4
	{
		kanji: "ダマスカス鋼",
		romaji: "damasukasukou",
		eng: "damascus steel",
		validInputs: ["damasukasukou", "damasukasucou", "damasucasukou", "damasucasucou"]
	}, //4
	{ kanji: "玉手箱", romaji: "tamatebako", eng: "tamatebako", validInputs: ["tamatebako", "tamatebaco"] }, //2
	{ kanji: "タリスマン", romaji: "tarisuman", eng: "talisman", validInputs: ["tarisuman"] }, //1
	{ kanji: "達磨", romaji: "daruma", eng: "daruma", validInputs: ["daruma"] }, //1
	{
		kanji: "ディンギルの塔",
		romaji: "dhingirunotou",
		eng: "tower of dingir",
		validInputs: [
			"dhingirunotou",
			"delingirunotou",
			"dexingirunotou",
			"dhinngirunotou",
			"delinngirunotou",
			"dexinngirunotou"
		]
	}, //6
	{ kanji: "デュランダル", romaji: "dhurandaru", eng: "durandal", validInputs: ["dhurandaru", "dhuranndaru"] }, //2
	{ kanji: "テュルフィング", romaji: "thurufingu", eng: "tyrfing", validInputs: ["thurufingu", "thurufinngu"] }, //2
	{
		kanji: "十種の神宝",
		romaji: "tokusanokandakara",
		eng: "ten sacred treasures",
		validInputs: [
			"tokusanokandakara",
			"tokusanokandacara",
			"tokusanocandakara",
			"tokusanocandacara",
			"tocusanokandakara",
			"tocusanokandacara",
			"tocusanocandakara",
			"tocusanocandacara",
			"toqusanokandakara",
			"toqusanokandacara",
			"toqusanocandakara",
			"toqusanocandacara"
		]
	}, //12
	{
		kanji: "トロイアの木馬",
		romaji: "toroianomokuba",
		eng: "trojan horse",
		validInputs: ["toroianomokuba", "toroianomocuba", "toroianomoquba"]
	}, //3
	{ kanji: "蜻蛉切", romaji: "tonbokiri", eng: "tonbokiri", validInputs: ["tonbokiri", "tonnbokiri"] }, //2
	{
		kanji: "ネクロノミコン",
		romaji: "nekuronomikon",
		eng: "necronomicon",
		validInputs: ["nekuronomikon", "nekuronomicon", "necuronomikon", "necuronomicon", "nequronomikon", "nequronomicon"]
	}, //6
	{ kanji: "ノアの方舟", romaji: "noanohakobune", eng: "noahs ark", validInputs: ["noanohakobune", "noanohacobune"] }, //2
	{ kanji: "バベルの塔", romaji: "baberunotou", eng: "tower of babel", validInputs: ["baberunotou"] }, //1
	{ kanji: "パルテノン", romaji: "parutenon", eng: "parthenon", validInputs: ["parutenon"] }, //1
	{
		kanji: "バルムンク",
		romaji: "barumunku",
		eng: "balmung",
		validInputs: ["barumunku", "barumuncu", "barumunqu", "barumunnku", "barumunncu", "barumunnqu"]
	},
	{
		kanji: "反魂香",
		romaji: "hangonkou",
		eng: "resurrection incense",
		validInputs: [
			"hangonkou",
			"hangoncou",
			"hangonnkou",
			"hangonncou",
			"hanngonkou",
			"hanngoncou",
			"hanngonnkou",
			"hanngonncou"
		]
	}, //8
	{
		kanji: "パンドラの箱",
		romaji: "pandoranohako",
		eng: "pandoras box",
		validInputs: ["pandoranohako", "pandoranohaco", "panndoranohako", "panndoranohaco"]
	}, //4
	{ kanji: "膝丸", romaji: "hizamaru", eng: "hizamaru", validInputs: ["hizamaru"] }, //1
	{ kanji: "雛人形", romaji: "hinaningyou", eng: "hina doll", validInputs: ["hinaningyou", "hinaninngyou"] }, //2
	{ kanji: "ヒヒイロカネ", romaji: "hihiirokane", eng: "hihiirokane", validInputs: ["hihiirokane", "hihiirocane"] }, //2
	{ kanji: "ピュリスの手", romaji: "pyurisunote", eng: "hand of pyris", validInputs: ["pyurisunote"] }, //1
	{
		kanji: "ファーティマの手",
		romaji: "fa-thimanote",
		eng: "Hand of Fatima",
		validInputs: ["fa-thimanote", "fa-telimanote", "fa-teximanote"] //3
	},
	{
		kanji: "プランシェット",
		romaji: "puransyetto",
		eng: "planchette",
		validInputs: ["puransyetto", "puranshetto", "purannsyetto", "purannshetto"]
	}, //4
	{
		kanji: "ブリューナク",
		romaji: "buryu-naku",
		eng: "brunak",
		validInputs: ["buryu-naku", "buryu-nacu", "buryu-naqu"]
	}, //3
	{ kanji: "フレイの馬", romaji: "fureinouma", eng: "freis horse", validInputs: ["fureinouma", "hureinouma"] }, //2
	{
		kanji: "フレイムランス",
		romaji: "fureimuransu",
		eng: "Flame Lance",
		validInputs: ["fureimuransu", "hureimuransu", "fureimurannsu", "hureimurannsu"]
	}, //4
	{
		kanji: "ヘズワルの剣",
		romaji: "hezuwarunoken",
		eng: "sword of hezwar",
		validInputs: ["hezuwarunoken"]
	}, //1
	{
		kanji: "ヘラクレスの弓",
		romaji: "herakuresunoyumi",
		eng: "bow of hercules",
		validInputs: ["herakuresunoyumi", "heracuresunoyumi", "heraquresunoyumi"]
	}, //3
	{ kanji: "ベラドンナ", romaji: "beradonnna", eng: "belladonna", validInputs: ["beradonnna"] }, //1
	{
		kanji: "ペルセウスの靴",
		romaji: "peruseusunokutu",
		eng: "Shoes of Perseus",
		validInputs: [
			"peruseusunokutu",
			"peruseusunokutsu",
			"peruseusunocutu",
			"peruseusunocutsu",
			"peruseusunoqutu",
			"peruseusunoqutsu"
		]
	},
	{
		kanji: "ヘルメスの杖",
		romaji: "herumesunotue",
		eng: "staff of hermes",
		validInputs: ["herumesunotsue", "herumesunotue"]
	},
	{
		kanji: "ポセイドンの戟",
		romaji: "poseidonnnohoko",
		eng: "trident of poseidon",
		validInputs: ["poseidonnnohoko", "poseidonnnohoco"] //2
	},
	{ kanji: "ホテルスの帯", romaji: "hoterusunoobi", eng: "belt of hotei", validInputs: ["hoterusunoobi"] }, //1
	{ kanji: "ホルスの目", romaji: "horusunome", eng: "eye of horus", validInputs: ["horusunome"] }, //1
	{
		kanji: "魔女の軟膏",
		romaji: "majononankou",
		eng: "witch's ointment",
		validInputs: [
			"majononankou",
			"majyononankou",
			"mazyononankou",
			"majononancou",
			"majyononancou",
			"mazyononancou",
			"majononannkou",
			"majyononannkou",
			"mazyononannkou",
			"majononanncou",
			"majyononanncou",
			"mazyononanncou"
		]
	}, //12
	{ kanji: "魔弾", romaji: "madan", eng: "magic bullet", validInputs: ["madan"] }, //1
	{
		kanji: "マラキの予言",
		romaji: "marakinoyogen",
		eng: "prophecy of malachi",
		validInputs: ["marakinoyogen"]
	}, //1
	{ kanji: "曼陀羅", romaji: "mandara", eng: "mandala", validInputs: ["mandara", "manndara"] }, //2
	{ kanji: "ミスリル", romaji: "misuriru", eng: "mithril", validInputs: ["misuriru"] }, //1
	{ kanji: "ミョルニル", romaji: "myoruniru", eng: "mjolnir", validInputs: ["myoruniru"] }, //1
	{ kanji: "村雨", romaji: "murasame", eng: "murasame", validInputs: ["murasame"] }, //1
	{ kanji: "村正", romaji: "muramasa", eng: "muramasa", validInputs: ["muramasa"] }, //1
	{ kanji: "モーセの杖", romaji: "mo-senotue", eng: "mose's staff", validInputs: ["mo-senotue", "mo-senotsue"] }, //2
	{ kanji: "馬頭琴", romaji: "batoukin", eng: "horsehead fiddle", validInputs: ["batoukin"] }, //1
	{
		kanji: "八握剣",
		romaji: "yatukanoturugi",
		eng: "eight-grip sword",
		validInputs: [
			"yatukanoturugi",
			"yatucanoturugi",
			"yatsukanotsurugi",
			"yatsucanotsurugi",
			"yatukanotsurugi",
			"yatucanotsurugi",
			"yatsukanoturugi",
			"yatsucanoturugi"
		]
	}, //8
	{ kanji: "雷切", romaji: "raikiri", eng: "lightning cutter", validInputs: ["raikiri"] }, //1
	{
		kanji: "ラビュリントス",
		romaji: "rabyurintosu",
		eng: "labyrinthos",
		validInputs: ["rabyurintosu", "rabyurinntosu"]
	}, //1
	{
		kanji: "竜宮城",
		romaji: "ryuuguujou",
		eng: "dragon palace",
		validInputs: ["ryuuguujou", "ryuuguuzyou", "ryuuguujyou"]
	}, //3
	{ kanji: "レーヴァテイン", romaji: "re-vatein", eng: "Leavateinn", validInputs: ["re-vatein"] }, //1
	{ kanji: "レメゲトン", romaji: "remegeton", eng: "Lemegton", validInputs: ["remegeton"] }, //1
	{ kanji: "わすれな草", romaji: "wasurenagusa", eng: "forget me not", validInputs: ["wasurenagusa"] }, //1
	{
		kanji: "ソードブレイカー",
		romaji: "so-dobureika-",
		eng: "swordbreaker",
		validInputs: ["so-dobureika-", "so-dobureica-"]
	},
	{
		kanji: "フランベルジュ",
		romaji: "furanberuju",
		eng: "flamberge",
		validInputs: [
			"furanberuju",
			"furanberujyu",
			"furanberuzyu",
			"huranberuju",
			"huranberujyu",
			"huranberuzyu",
			"furannberuju",
			"furannberujyu",
			"furannberuzyu",
			"hurannberuju",
			"hurannberujyu",
			"hurannberuzyu"
		]
	}, //12
	{
		kanji: "チャクラム",
		romaji: "chakuramu",
		eng: "chakram",
		validInputs: [
			"chakuramu",
			"tyakuramu",
			"cyakuramu",
			"chacuramu",
			"tyacuramu",
			"cyacuramu",
			"chaquramu",
			"tyaquramu",
			"cyaquramu"
		]
	}, //9
	{ kanji: "エアの剣", romaji: "eanoken", eng: "sword of ea", validInputs: ["eanoken"] }, //1
	{
		kanji: "トールハンマー",
		romaji: "to-ruhanma-",
		eng: "thor's hammer",
		validInputs: ["to-ruhanma-", "to-ruhannma-"]
	}, //2
	{ kanji: "天鹿児弓", romaji: "amenokagoyumi", eng: "amenokago bow", validInputs: ["amenokagoyumi", "amenocagoyumi"] }, //2
	{ kanji: "アダマンタイト", romaji: "adamantaito", eng: "adamantite", validInputs: ["adamantaito", "adamanntaito"] }, //2
	{ kanji: "天羽々切", romaji: "amenohabakiri", eng: "amenohabakiri", validInputs: ["amenohabakiri"] }, //1
	{ kanji: "イガリマ", romaji: "igarima", eng: "igarima", validInputs: ["igarima"] }, //1
	{
		kanji: "シュルシャガナ",
		romaji: "syurusyagana",
		eng: "shurushagana",
		validInputs: ["syurusyagana", "shurushagana", "syurushagana", "shurusyagana"]
	}, //4
	{ kanji: "アガートラーム", romaji: "aga-tora-mu", eng: "Agart Tram", validInputs: ["aga-tora-mu"] }
];
// { kanji: "未来", romaji: "mirai", eng: "future" ,validInputs:[]},
// { kanji: "超能力", romaji: "tyounouryoku", eng: "psychic powers" ,validInputs:[]},
// { kanji: "タイムトラベル", romaji: "taimutoraberu", eng: "time travel" ,validInputs:[]},
// { kanji: "異星人", romaji: "iseijin", eng: "extraterrestrial" ,validInputs:[]},
// { kanji: "戦争", romaji: "sensou", eng: "war" ,validInputs:[]},
// { kanji: "サイバーパンク", romaji: "saiba-panku", eng: "cyberpunk" ,validInputs:[]},
// { kanji: "パラレルワールド", romaji: "parareruwa-rudo", eng: "parallel world" ,validInputs:[]},
// { kanji: "人工知能", romaji: "jinkoutinou", eng: "artificial intelligence" ,validInputs:[]},
// { kanji: "アンドロイド", romaji: "andoroido", eng: "android" ,validInputs:[]},
// { kanji: "サイボーグ", romaji: "saibo-gu", eng: "cyborg" ,validInputs:[]},
// { kanji: "ディストピア", romaji: "dhisutopia", eng: "dystopia" ,validInputs:[]},
// { kanji: "宇宙ステーション", romaji: "utyuusute-syon", eng: "space station" ,validInputs:[]},
// { kanji: "ロボット工学", romaji: "robottokougaku", eng: "robotics" ,validInputs:[]},
//{ kanji: "宇宙船", romaji: "utyuusen", eng: "spaceship", validInputs: [] },
// { kanji: "宇宙エレベーター", romaji: "utyuuerebe-ta-", eng: "space elevator" ,validInputs:[]},
// { kanji: "宇宙戦艦", romaji: "utyuusenkan", eng: "space battleship" ,validInputs:[]},
// { kanji: "クローン技術", romaji: "kuro-ngijyutu", eng: "clone technology" ,validInputs:[]},
// { kanji: "テレポーテーション", romaji: "terepo-te-syon", eng: "teleportation" ,validInputs:[]},
// { kanji: "人工衛星", romaji: "jinkoueisei", eng: "artificial satellite" ,validInputs:[]},
// { kanji: "仮想現実", romaji: "kasougenjitu", eng: "virtual reality" ,validInputs:[]},
// { kanji: "アステロイド", romaji: "asuteroido", eng: "asteroid" ,validInputs:[]},
// { kanji: "太陽系", romaji: "taiyoukei", eng: "solar system" ,validInputs:[]},
// { kanji: "恒星", romaji: "kousei", eng: "star" ,validInputs:[]},
// { kanji: "ブラックホール", romaji: "burakkuho-ru", eng: "black hole" ,validInputs:[]},
// { kanji: "スペースコロニー", romaji: "supe-sukoroni-", eng: "space colony" ,validInputs:[]},
// { kanji: "テラフォーミング", romaji: "terafo-mingu", eng: "terraforming" ,validInputs:[]},
// { kanji: "惑星探査機", romaji: "wakuseitansaki", eng: "planetary probe" ,validInputs:[]},
// { kanji: "地球外生命体", romaji: "tikyuugaiseimeitai", eng: "extraterrestrial life" ,validInputs:[]},
// { kanji: "量子コンピューター", romaji: "ryousikonpyu-ta-", eng: "quantum computer" ,validInputs:[]},
// { kanji: "テクノロジー", romaji: "tekunoroji-", eng: "technology" ,validInputs:[]},
// { kanji: "スペースシャトル", romaji: "supe-susyatoru", eng: "space shuttle" ,validInputs:[]},
// { kanji: "推理小説", romaji: "suirisyousetu", eng: "detective novel" ,validInputs:[]},
// { kanji: "ミステリー", romaji: "misuteri-", eng: "mystery" ,validInputs:[]},
// { kanji: "犯罪", romaji: "hanzai", eng: "crime" ,validInputs:[]},
// { kanji: "証拠", romaji: "syouko", eng: "evidence" ,validInputs:[]},
// { kanji: "アリバイ", romaji: "aribai", eng: "alibi" ,validInputs:[]},
// { kanji: "謎", romaji: "nazo", eng: "puzzle" ,validInputs:[]},
// { kanji: "密室", romaji: "missitu", eng: "locked room" ,validInputs:[]},
// { kanji: "事件現場", romaji: "jikengenba", eng: "crime scene" ,validInputs:[]},
// { kanji: "犯人", romaji: "hannnin", eng: "criminal" ,validInputs:[]},
// { kanji: "探偵助手", romaji: "tanteijyosyu", eng: "detective assistant" ,validInputs:[]},
// { kanji: "怪盗", romaji: "kaitou", eng: "phantom thief" ,validInputs:[]},
// { kanji: "暗号", romaji: "angou", eng: "cipher" ,validInputs:[]},
// { kanji: "推理力", romaji: "suiriryoku", eng: "deductive reasoning" ,validInputs:[]},
// { kanji: "サスペンス", romaji: "sasupensu", eng: "suspense" ,validInputs:[]},
// { kanji: "アクション", romaji: "akusyon", eng: "action" ,validInputs:[]},
// { kanji: "事件簿", romaji: "jikenbo", eng: "case file" ,validInputs:[]},
// { kanji: "密室殺人", romaji: "missitusatujin", eng: "locked-room murder" ,validInputs:[]},
// { kanji: "探偵事務所", romaji: "tanteijimusyo", eng: "detective agency" ,validInputs:[]},
// { kanji: "黒幕", romaji: "kuromaku", eng: "mastermind" ,validInputs:[]},
// { kanji: "証言", romaji: "syougen", eng: "testimony" ,validInputs:[]},

//ハンターハンター
export const hunterWords: WordList[] = [
	{ kanji: "百式観音", romaji: "hyakusikikannnon", eng: "hyakusikikannnon", validInputs: [] },
	{ kanji: "百式観音壱乃掌", romaji: "hyakusikikannnonitinote", eng: "hyakusikikannnonitinote", validInputs: [] },
	{ kanji: "百式観音零の掌", romaji: "hyakusikikannnonzeronote", eng: "hyakusikikannnonzeronote", validInputs: [] },
	{
		kanji: "百式観音九十九の掌",
		romaji: "hyakusikikannnontukumonote",
		eng: "hyakusikikannnontukumonote",
		validInputs: []
	},
	{ kanji: "蚤弾", romaji: "nomidan", eng: "huri-damu", validInputs: [], validInputs2: [] },
	{
		kanji: "死体と遊ぶな子供達",
		romaji: "sitaitoasobunakodomotati",
		eng: "ribinngudeddodo-ruzu",
		validInputs: [],
		validInputs2: []
	},
	{ kanji: "180分の恋奴隷", romaji: "180hunnnokoidorei", eng: "innsutantorava-", validInputs: [], validInputs2: [] },
	{ kanji: "俤人", romaji: "omokagebito", eng: "sourudo-ru", validInputs: [], validInputs2: [] },
	{ kanji: "魂呼ばい", romaji: "tamayobai", eng: "tamayobai", validInputs: [], validInputs2: [] },
	{ kanji: "人形受胎", romaji: "ningyoujutai", eng: "do-rukyattya-", validInputs: [], validInputs2: [] },
	{ kanji: "死亡遊戯", romaji: "sibouyuugi", eng: "datudeda-tu", validInputs: [], validInputs2: [] },
	{ kanji: "百万回生きた猫", romaji: "hyakumankaiikitaneko", eng: "nekononamae", validInputs: [], validInputs2: [] },
	{ kanji: "気狂いピエロ", romaji: "kiguruipiero", eng: "kureiji-surotto", validInputs: [], validInputs2: [] },
	{ kanji: "死神の円舞曲", romaji: "sinigaminoenbukyoku", eng: "sairentowarutu", validInputs: [], validInputs2: [] },
	{
		kanji: "踊る気儘な火人形",
		romaji: "odorukimamanahiningyou",
		eng: "dansingudo-ru",
		validInputs: [],
		validInputs2: []
	},
	{ kanji: "虎咬真拳", romaji: "kokousinken", eng: "kokousinken", validInputs: [], validInputs2: [] },
	{ kanji: "二人セゾン", romaji: "hutarisezon", eng: "kimigainai", validInputs: [], validInputs2: [] },
	{ kanji: "蛇咬の舞", romaji: "dakounomai", eng: "dakounomai", validInputs: [] },
	{ kanji: "散弾独楽哀歌", romaji: "sandangomaaika", eng: "syottoganburu-su", validInputs: [], validInputs2: [] },
	{ kanji: "戦闘舞踏曲", romaji: "sentoubutoukyoku", eng: "tatakainowarutu", validInputs: [], validInputs2: [] },
	{ kanji: "竜巻独楽", romaji: "tatumakigoma", eng: "tatumakigoma", validInputs: [], validInputs2: [] },
	{ kanji: "超不協輪怨", romaji: "tyouhukyouwaon", eng: "si-kurettonoizu", validInputs: [], validInputs2: [] },
	{ kanji: "雷掌", romaji: "raisyou", eng: "izutusi", validInputs: [], validInputs2: [] },
	{ kanji: "神速", romaji: "sinsoku", eng: "kanmuru", validInputs: [], validInputs2: [] },
	{ kanji: "落雷", romaji: "rakurai", eng: "narukami", validInputs: [], validInputs2: [] },
	{ kanji: "絶対時間", romaji: "zettaijikan", eng: "ennpera-taimu", validInputs: [], validInputs2: [] },
	{
		kanji: "律する小指の鎖",
		romaji: "rissurukoyubinokusari",
		eng: "jyajjimentotye-n",
		validInputs: [],
		validInputs2: []
	},
	{
		kanji: "奪う人差し指の鎖",
		romaji: "ubauhitosasiyubinokusari",
		eng: "suti-rutye-n",
		validInputs: [],
		validInputs2: []
	},
	{
		kanji: "導く薬指の鎖",
		romaji: "mitibikukusuriyubinokusari",
		eng: "daujingutye-n",
		validInputs: [],
		validInputs2: []
	},
	{
		kanji: "束縛する中指の鎖",
		romaji: "sokubakusurunakayubinokusari",
		eng: "tye-njeiru",
		validInputs: [],
		validInputs2: []
	},
	{ kanji: "癒す親指の鎖", romaji: "iyasuoyayubinokusari", eng: "ho-ri-tye-n", validInputs: [], validInputs2: [] },
	{ kanji: "密室遊魚", romaji: "missituyuugyo", eng: "indoafissyu", validInputs: [], validInputs2: [] },
	{ kanji: "人間の証明", romaji: "ningennnosyoumei", eng: "o-da-sutanpu", validInputs: [], validInputs2: [] },
	{ kanji: "転校生", romaji: "tenkousei", eng: "konba-tohanzu", validInputs: [], validInputs2: [] },
	{ kanji: "番いの破壊者", romaji: "tugainohakaisya", eng: "sannandomu-n", validInputs: [], validInputs2: [] },
	{ kanji: "盗賊の極意", romaji: "touzokunogokui", eng: "sukiruhanta-", validInputs: [], validInputs2: [] },
	{ kanji: "栞のテーマ", romaji: "siorinote-ma", eng: "daburufeisu", validInputs: [], validInputs2: [] },
	{ kanji: "一握りの火薬", romaji: "hitonigirinokayaku", eng: "ritorufurawa-", validInputs: [], validInputs2: [] },
	{
		kanji: "神の左手悪魔の右手",
		romaji: "kaminohidariteakumanomigite",
		eng: "gyarari-feiku",
		validInputs: [],
		validInputs2: []
	},
	{ kanji: "黒い賢人", romaji: "kuroikenjin", eng: "burakkugoreinu", validInputs: [], validInputs2: [] },
	{ kanji: "白い賢人", romaji: "siroikenjin", eng: "howaitogoreinu", validInputs: [], validInputs2: [] },
	{ kanji: "ジャジャン拳", romaji: "jajanken", eng: "jajanken", validInputs: [], validInputs2: [] },
	{ kanji: "血いさな世界", romaji: "tiisanasekai", eng: "buraddhimeari-", validInputs: [], validInputs2: [] },
	{ kanji: "審美的転生注射", romaji: "sinbitekitenseityuusya", eng: "kui-nsyotto", validInputs: [], validInputs2: [] },
	{ kanji: "遊戯王", romaji: "yuugiou", eng: "karudoseputo", validInputs: [], validInputs2: [] },
	{ kanji: "デメちゃん", romaji: "demetyan", eng: "demetyan", validInputs: [], validInputs2: [] },
	{ kanji: "大和撫子七変化", romaji: "yamatonadesikositihenge", eng: "raida-zuhai", validInputs: [], validInputs2: [] },
	{ kanji: "麟粉乃愛泉", romaji: "rinpunnnoai", eng: "supirityuarumesse-ji", validInputs: [], validInputs2: [] },
	{ kanji: "蠅の王", romaji: "haenoou", eng: "beruzebubu", validInputs: [], validInputs2: [] },
	{
		kanji: "縁の下の十一人",
		romaji: "ennnositanojyuuitinin",
		eng: "irebunburakkutirudoren",
		validInputs: [],
		validInputs2: []
	},
	{
		kanji: "携帯する他人の運命",
		romaji: "keitaisurutaninnnounmei",
		eng: "burakkuboisu",
		validInputs: [],
		validInputs2: []
	},
	{ kanji: "暗い宿", romaji: "kuraiyado", eng: "hoterurahuresia", validInputs: [], validInputs2: [] },
	{ kanji: "物真似鳥", romaji: "monomanedori", eng: "jeipusihuta-", validInputs: [], validInputs2: [] },
	{ kanji: "機械に巣食う棘", romaji: "kikainisukuutoge", eng: "masinni-ta-", validInputs: [], validInputs2: [] },
	{ kanji: "龍星群", romaji: "ryuuseigun", eng: "doragondaivu", validInputs: [], validInputs2: [] },
	{ kanji: "龍頭戯画", romaji: "ryuutougiga", eng: "doragonheddo", validInputs: [], validInputs2: [] },
	{ kanji: "牙突", romaji: "gatotu", eng: "doragonransu", validInputs: [], validInputs2: [] },
	{ kanji: "蠅の仕事", romaji: "haenosigoto", eng: "sairentowa-ka-", validInputs: [], validInputs2: [] },
	{ kanji: "天上不知唯我独損", romaji: "tenjouhutiyuigadokuson", eng: "hakoware", validInputs: [], validInputs2: [] },
	{
		kanji: "天使の自動筆記",
		romaji: "tensinojidouhikki",
		eng: "raburi-go-sutoraita-",
		validInputs: [],
		validInputs2: []
	},
	{ kanji: "黒子無想", romaji: "kokusimusou", eng: "terepusiko-ra", validInputs: [], validInputs2: [] },
	{ kanji: "玩具修理者", romaji: "gangusyuurisya", eng: "dokuta-buraisu", validInputs: [], validInputs2: [] },
	{ kanji: "窓を開く者", romaji: "madowohirakumono", eng: "sukuri-mu", validInputs: [], validInputs2: [] },
	{ kanji: "四次元マンション", romaji: "yojigenmansyon", eng: "haidoandosi-ku", validInputs: [], validInputs2: [] },
	{
		kanji: "淋しい深海魚",
		romaji: "samisiisinkaigyo",
		eng: "uinnkuburu-",
		validInputs: [],
		validInputs2: []
	},
	{ kanji: "暗黒の鬼婦神", romaji: "ankokunokihujin", eng: "burakkuwidou", validInputs: [], validInputs2: [] },
	{ kanji: "愛の放射線", romaji: "ainohousyasen", eng: "rabusyawa-", validInputs: [], validInputs2: [] },
	{ kanji: "記憶弾", romaji: "kiokudan", eng: "memori-bomu", validInputs: [], validInputs2: [] },
	{ kanji: "流離の大俳人", romaji: "sasurainodaihaijin", eng: "gureitohaika-", validInputs: [], validInputs2: [] },
	{ kanji: "凶器の錯乱", romaji: "kyoukinosakuran", eng: "imayariniikimasu", validInputs: [], validInputs2: [] },
	{ kanji: "幽体離脱", romaji: "yuutairidatu", eng: "zatatti", validInputs: [], validInputs2: [] },
	{ kanji: "桃色吐息", romaji: "momoirotoiki", eng: "pianomassa-ji", validInputs: [], validInputs2: [] },
	{ kanji: "魔法美容師", romaji: "mahoubiyousi", eng: "majikaruesute", validInputs: [], validInputs2: [] },
	{ kanji: "薄っぺらな嘘", romaji: "usupperanauso", eng: "dokkiritekusutya-", validInputs: [], validInputs2: [] },
	{ kanji: "伸縮自在の愛", romaji: "sinsyukujizainoai", eng: "banji-gamu", validInputs: [], validInputs2: [] },
	{ kanji: "切り裂き美容師", romaji: "kirisakibiyousi", eng: "siza-hanzu", validInputs: [], validInputs2: [] },
	{ kanji: "てのひらを太陽に", romaji: "tenohirawotaiyouni", eng: "baiohaza-do", validInputs: [], validInputs2: [] },
	{ kanji: "廻天", romaji: "kaiten", eng: "rippa-saikurotoron", validInputs: [], validInputs2: [] },
	{ kanji: "秘密の扉", romaji: "himitunotobira", eng: "majikaruwa-mu", validInputs: [], validInputs2: [] },
	{ kanji: "許されざる者", romaji: "yurusarezarumono", eng: "peinpakka-", validInputs: [], validInputs2: [] },
	{ kanji: "太陽に灼かれて", romaji: "taiyouniyakarete", eng: "raijingusan", validInputs: [], validInputs2: [] },
	{
		kanji: "不思議で便利な大風呂敷",
		romaji: "husigidebenrinaooburosiki",
		eng: "fanfankurosu",
		validInputs: [],
		validInputs2: []
	},
	{ kanji: "超複眼", romaji: "tyouhukugan", eng: "su-pa-ai", validInputs: [], validInputs2: [] },
	{
		kanji: "俺の両手は機関銃",
		romaji: "orenoryoutehakikanjuu",
		eng: "daburumasingan",
		validInputs: [],
		validInputs2: []
	},
	{ kanji: "裏窓の鳥", romaji: "uramadonotori", eng: "si-kurettouindou", validInputs: [], validInputs2: [] },
	{ kanji: "星を継ぐもの", romaji: "hosiwotugumono", eng: "benjaminbaton", validInputs: [], validInputs2: [] },
	{ kanji: "七色弓箭", romaji: "nanairokyuusen", eng: "reinbou", validInputs: [], validInputs2: [] },
	{ kanji: "戦闘演武曲", romaji: "sentouenbukyoku", eng: "batorekanta-bire", validInputs: [], validInputs2: [] },
	{ kanji: "念糸縫合", romaji: "nensihougou", eng: "nensihougou", validInputs: [], validInputs2: [] },
	{ kanji: "Zombie Girl", romaji: "zonbiga-ru", eng: "ravianro-zu", validInputs: [], validInputs2: [] },
	{ kanji: "密室裁判", romaji: "missitusaiban", eng: "kurosuge-mu", validInputs: [], validInputs2: [] },
	{ kanji: "神の共犯者", romaji: "kaminokyouhansya", eng: "kaminokyouhansya", validInputs: [], validInputs2: [] },
	{ kanji: "神の不在証明", romaji: "kaminohuzaisyoumei", eng: "pa-fekutopuran", validInputs: [], validInputs2: [] },
	{ kanji: "監獄ロック", romaji: "kangokurokku", eng: "sumo-ki-jeiru", validInputs: [], validInputs2: [] },
	{ kanji: "紫煙機兵隊", romaji: "sienkiheitai", eng: "dhi-pupa-puru", validInputs: [], validInputs2: [] },
	{ kanji: "恋のエチュード", romaji: "koinoetyu-do", eng: "saikinnosen", validInputs: [], validInputs2: [] },
	{ kanji: "墨攻", romaji: "bokukou", eng: "lsdf", validInputs: [], validInputs2: [] },
	{ kanji: "爆発的推進力", romaji: "bakuhatutekisuisinryoku", eng: "o-raba-suto", validInputs: [], validInputs2: [] },
	{ kanji: "双頭の蛇の正体", romaji: "soutounohebinosyoutai", eng: "sanda-sune-ku", validInputs: [], validInputs2: [] },
	{
		kanji: "双頭の蛇による二重唱",
		romaji: "soutounohebiniyorunijuusyou",
		eng: "songuobudhifensu",
		validInputs: [],
		validInputs2: []
	},
	{
		kanji: "体は全部知っている",
		romaji: "karadahazenbusitteiru",
		eng: "bodhiandosouru",
		validInputs: [],
		validInputs2: []
	},
	{ kanji: "14人の悪魔", romaji: "14ninnnoakuma", eng: "14ninnnoakuma", validInputs: [], validInputs2: [] },
	{ kanji: "TUBE", romaji: "tyu-bu", eng: "inamura", validInputs: [], validInputs2: [] },
	{ kanji: "渦波", romaji: "uzunami", eng: "toruneibu", validInputs: [], validInputs2: [] },
	{ kanji: "大波", romaji: "oonami", eng: "bikkuwho-ru", validInputs: [], validInputs2: [] },
	{ kanji: "謝債発行機", romaji: "syasaihakkouki", eng: "rentarupoddo", validInputs: [], validInputs2: [] },
	{ kanji: "漆黒の処刑台", romaji: "sikkokunosyokeidai", eng: "onbasara", validInputs: [], validInputs2: [] },
	{ kanji: "卵男", romaji: "tamagootoko", eng: "misairuman", validInputs: [], validInputs2: [] },
	{ kanji: "超破壊拳", romaji: "tyouhakaiken", eng: "bikkubanninpakuto", validInputs: [], validInputs2: [] },
	{ kanji: "裏窓", romaji: "uramado", eng: "ritoruai", validInputs: [], validInputs2: [] },
	{ kanji: "命の音", romaji: "inotinooto", eng: "kauntodaun", validInputs: [], validInputs2: [] },
	{ kanji: "11人いる", romaji: "11ninniru", eng: "sairentomajorithi-", validInputs: [], validInputs2: [] },
	{ kanji: "damage", romaji: "dame-ji", eng: "dame-ji", validInputs: [], validInputs2: [] }
];

export const adjectives: WordList[] = [
	{ kanji: "煌びやかな", romaji: "kirabiyakana", eng: "dazzling", validInputs: ["kirabiyakana"] },
	{ kanji: "深淵な", romaji: "shinen-na", eng: "abyssal", validInputs: ["shinen-na"] },
	{ kanji: "穏やかな", romaji: "odayakana", eng: "gentle", validInputs: ["odayakana"] },
	{ kanji: "華麗な", romaji: "karei-na", eng: "splendid", validInputs: ["karei-na"] },
	{ kanji: "漆黒の", romaji: "shikkoku-no", eng: "jet black", validInputs: ["shikkoku-no"] },
	{ kanji: "純白の", romaji: "junpaku-no", eng: "pure white", validInputs: ["junpaku-no"] },
	{ kanji: "荘厳な", romaji: "sougon-na", eng: "majestic", validInputs: ["sougon-na"] },
	{ kanji: "憂鬱な", romaji: "yuuutsu-na", eng: "melancholic", validInputs: ["yuuutsu-na"] },
	{ kanji: "静寂な", romaji: "seijaku-na", eng: "silent", validInputs: ["seijaku-na"] },
	{ kanji: "躍動的な", romaji: "yakudouteki-na", eng: "dynamic", validInputs: ["yakudouteki-na"] },
	{ kanji: "茜色の", romaji: "akaneiro-no", eng: "rosy", validInputs: ["akaneiro-no"] },
	{ kanji: "悠久の", romaji: "yuukyuu-no", eng: "eternal", validInputs: ["yuukyuu-no"] },
	{ kanji: "眩しい", romaji: "mabushii", eng: "dazzling", validInputs: ["mabushii"] },
	{ kanji: "残酷な", romaji: "zankoku-na", eng: "cruel", validInputs: ["zankoku-na"] },
	{ kanji: "絢爛たる", romaji: "kenrantaru", eng: "brilliant", validInputs: ["kenrantaru"] },
	{ kanji: "幽玄な", romaji: "yuugen-na", eng: "mystical", validInputs: ["yuugen-na"] },
	{ kanji: "荒涼とした", romaji: "kouyou-toshita", eng: "desolate", validInputs: ["kouyou-toshita"] },
	{ kanji: "凛とした", romaji: "rin-toshita", eng: "dignified", validInputs: ["rin-toshita"] },
	{ kanji: "空虚な", romaji: "kuukyo-na", eng: "empty", validInputs: ["kuukyo-na"] },
	{ kanji: "静謐な", romaji: "seihitsu-na", eng: "serene", validInputs: ["seihitsu-na"] },
	{ kanji: "美麗な", romaji: "bireina", eng: "beautiful", validInputs: ["bireina"] },
	{ kanji: "煌めく", romaji: "kirameku", eng: "sparkle", validInputs: ["kirameku"] },
	{ kanji: "壮大な", romaji: "soudaina", eng: "grand", validInputs: ["soudaina"] },
	{ kanji: "慎ましやかな", romaji: "tsutsumashiyakana", eng: "modest", validInputs: ["tsutsumashiyakana"] },
	{ kanji: "乾燥した", romaji: "kansou shita", eng: "dry", validInputs: ["kansou shita"] },
	{ kanji: "潤んだ", romaji: "urun da", eng: "moist", validInputs: ["urun da"] },
	{ kanji: "心地よい", romaji: "kokochi yoi", eng: "comfortable", validInputs: ["kokochi yoi"] },
	{ kanji: "悲劇的な", romaji: "higeki teki na", eng: "tragic", validInputs: ["higeki teki na"] },
	{ kanji: "幻想的な", romaji: "gensouteki na", eng: "fantastic", validInputs: ["gensouteki na"] },
	{ kanji: "深遠な", romaji: "shin'en na", eng: "profound", validInputs: ["shin'en na"] },
	{ kanji: "狂おしい", romaji: "kuruoshii", eng: "mad", validInputs: ["kuruoshii"] },
	{ kanji: "暖かな", romaji: "atatakana", eng: "warm", validInputs: ["atatakana"] },
	{ kanji: "優雅な", romaji: "yuuga na", eng: "elegant", validInputs: ["yuuga na"] },
	{ kanji: "無邪気な", romaji: "mujaki na", eng: "innocent", validInputs: ["mujaki na"] },
	{ kanji: "甘美な", romaji: "kanbi na", eng: "sweet", validInputs: ["kanbi na"] },
	{ kanji: "陰鬱な", romaji: "in'utsu na", eng: "gloomy", validInputs: ["in'utsu na"] },
	{ kanji: "疾風怒涛の", romaji: "shippuudotou no", eng: "stormy", validInputs: ["shippuudotou no"] },
	{ kanji: "息を呑むような", romaji: "iki o nomu you na", eng: "breathtaking", validInputs: ["iki o nomu you na"] },
	{ kanji: "鮮烈な", romaji: "senretsu na", eng: "vivid", validInputs: ["senretsu na"] },
	{ kanji: "雅な", romaji: "miyabi na", eng: "refined", validInputs: ["miyabi na"] },
	{ kanji: "蒼ざめた", romaji: "aozameta", eng: "pale", validInputs: ["aozameta"] },
	{ kanji: "豊かな", romaji: "yutaka na", eng: "rich", validInputs: ["yutaka na"] },
	{ kanji: "無情な", romaji: "mujou na", eng: "merciless", validInputs: ["mujou na"] },
	{ kanji: "壮麗な", romaji: "sourei na", eng: "magnificent", validInputs: ["sourei na"] },
	{ kanji: "純真な", romaji: "junshin na", eng: "pure", validInputs: ["junshin na"] },
	{ kanji: "愛おしい", romaji: "itooshii", eng: "lovely", validInputs: ["itooshii"] },
	{ kanji: "無垢な", romaji: "muku na", eng: "innocent", validInputs: ["muku na"] },
	{ kanji: "無限の", romaji: "mugen no", eng: "infinite", validInputs: ["mugen no"] },
	{ kanji: "儚い", romaji: "hakanai", eng: "fleeting", validInputs: ["hakanai"] },
	{ kanji: "陽気な", romaji: "youki na", eng: "cheerful", validInputs: ["youki na"] },
	{ kanji: "愉快な", romaji: "yukai na", eng: "pleasant", validInputs: ["yukai na"] },
	{ kanji: "激しい", romaji: "hageshii", eng: "intense", validInputs: ["hageshii"] },
	{ kanji: "切ない", romaji: "setsunai", eng: "painful", validInputs: ["setsunai"] },
	{ kanji: "美味しい", romaji: "oishii", eng: "delicious", validInputs: ["oishii"] },
	{ kanji: "艶やかな", romaji: "tsuyayaka na", eng: "glossy", validInputs: ["tsuyayaka na"] },
	{ kanji: "神聖な", romaji: "shinsei na", eng: "sacred", validInputs: ["shinsei na"] },
	{ kanji: "輝かしい", romaji: "kagayakashii", eng: "shining", validInputs: ["kagayakashii"] },
	{ kanji: "遥かな", romaji: "haruka na", eng: "distant", validInputs: ["haruka na"] },
	{ kanji: "哀れな", romaji: "aware na", eng: "pathetic", validInputs: ["aware na"] },
	{ kanji: "高貴な", romaji: "kouki na", eng: "noble", validInputs: ["kouki na"] },
	{ kanji: "瑞々しい", romaji: "mizumizushii", eng: "fresh", validInputs: ["mizumizushii"] },
	{ kanji: "魅惑的な", romaji: "miwaku teki na", eng: "charming", validInputs: ["miwaku teki na"] },
	{ kanji: "極彩色の", romaji: "gokusai shoku no", eng: "colorful", validInputs: ["gokusai shoku no"] },
	{ kanji: "細やかな", romaji: "komayaka na", eng: "meticulous", validInputs: ["komayaka na"] },
	{ kanji: "剥き出しの", romaji: "mukidashi no", eng: "exposed", validInputs: ["mukidashi no"] },
	{ kanji: "希望に満ちた", romaji: "kibou ni michita", eng: "hopeful", validInputs: ["kibou ni michita"] },
	{ kanji: "不可解な", romaji: "fukakai na", eng: "inexplicable", validInputs: ["fukakai na"] },
	{ kanji: "無口な", romaji: "mukuchi na", eng: "taciturn", validInputs: ["mukuchi na"] },
	{ kanji: "懐かしい", romaji: "natsukashii", eng: "nostalgic", validInputs: ["natsukashii"] },
	{ kanji: "情熱的な", romaji: "jounetsu teki na", eng: "passionate", validInputs: ["jounetsu teki na"] },
	{ kanji: "悠然とした", romaji: "yuuzen to shita", eng: "composed", validInputs: ["yuuzen to shita"] },
	{ kanji: "華麗な", romaji: "karei na", eng: "magnificent", validInputs: ["karei na"] },
	{ kanji: "美しい", romaji: "utsukushii", eng: "beautiful", validInputs: ["utsukushii"] },
	{ kanji: "優れた", romaji: "sugureta", eng: "excellent", validInputs: ["sugureta"] },
	{ kanji: "雅やかな", romaji: "miyabiyaka na", eng: "elegant", validInputs: ["miyabiyaka na"] },
	{ kanji: "甘い", romaji: "amai", eng: "sweet", validInputs: ["amai"] },
	{ kanji: "耳障りな", romaji: "mimizawari na", eng: "dissonant", validInputs: ["mimizawari na"] },
	{ kanji: "脆い", romaji: "moroi", eng: "fragile", validInputs: ["moroi"] },
	{ kanji: "優しい", romaji: "yasashii", eng: "kind", validInputs: ["yasashii"] },
	{ kanji: "寒々しい", romaji: "samuzamushii", eng: "chilly", validInputs: ["samuzamushii"] },
	{ kanji: "無慈悲な", romaji: "mujihi na", eng: "ruthless", validInputs: ["mujihi na"] },
	{ kanji: "温かい", romaji: "atatakai", eng: "warm", validInputs: ["atatakai"] },
	{ kanji: "気高い", romaji: "kedakai", eng: "noble", validInputs: ["kedakai"] }
];

//アニメ、漫画
// export const comicAndAnimeWords = [
// 	{ kanji: "アオアシ", romaji: "aoasi", eng: "Aoashi", validInputs: [] },
// 	{
// 		kanji: "あの日見た花の名前を僕達はまだ知らない",
// 		romaji: "anohimitahananonamaewobokutatihamadasiranai",
// 		eng: "Anohana: The Flower We Saw That Day",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "阿波連さんははかれない",
// 		romaji: "aharennsannhahakarenai",
// 		eng: "Aharen-san Is Indecipherable",
// 		validInputs: []
// 	},
// 	{ kanji: "甘城ブリリアントパーク", romaji: "amagiburirianntopa-ku", eng: "Amagi Brilliant Park", validInputs: [] },
// 	{ kanji: "アルドノア・ゼロ", romaji: "arudonoazero", eng: "Aldnoah.Zero", validInputs: [] },
// 	{ kanji: "暗殺教室", romaji: "annsatukyousitu", eng: "Assassination Classroom", validInputs: [] },
// 	{ kanji: "異世界おじさん", romaji: "isekaiojisann", eng: "Uncle from Another World", validInputs: [] },
// 	{
// 		kanji: "痛いのは嫌なので防御力に極振りしたいと思います",
// 		romaji: "itainohaiyananodebougyoryokunikyokuhurisitaitoomoimasu",
// 		eng: "BOFURI: I Don’t Want to Get Hurt, So I’ll Max Out My Defense",
// 		validInputs: []
// 	},
// 	{ kanji: "イナズマイレブン", romaji: "inazumairebunn", eng: "Inazuma Eleven", validInputs: [] },
// 	{
// 		kanji: "ヴァイオレット エヴァーガーデン",
// 		romaji: "vaioretto eva-ga-denn",
// 		eng: "Violet Evergarden",
// 		validInputs: []
// 	},
// 	{ kanji: "ヴィンラント サガ", romaji: "vinnrannto saga", eng: "Vinland Saga", validInputs: [] },
// 	{
// 		kanji: "映像研には手を出すな！",
// 		romaji: "eizoukennnihatewodasuna!",
// 		eng: "Keep Your Hands Off Eizouken!",
// 		validInputs: []
// 	},
// 	{ kanji: "86-エイティシックス-", romaji: "86-eitelisikkusu-", eng: "EIGHTY SIX", validInputs: [] },
// 	{ kanji: "エルフェンリート", romaji: "erufennri-to", eng: "Elfen Lied", validInputs: [] },
// 	{ kanji: "エロマンガ先生", romaji: "eromanngasennsei", eng: "Eromanga Sensei", validInputs: [] },
// 	{ kanji: "炎炎ノ消防隊", romaji: "ennennnosyouboutai", eng: "Fire Force", validInputs: [] },
// 	{ kanji: "王様ランキング", romaji: "ousamarannkinngu", eng: "Ranking of Kings", validInputs: [] },
// 	{ kanji: "桜蘭高校ホスト部", romaji: "ourannkoukouhosutobu", eng: "Ouran High School Host Club", validInputs: [] },
// 	{ kanji: "狼と香辛料", romaji: "ookamitokousinnryou", eng: "Spice and Wolf", validInputs: [] },
// 	{ kanji: "オーバーロード", romaji: "o-ba-ro-do", eng: "Overlord", validInputs: [] },
// 	{ kanji: "推しの子", romaji: "osinoko", eng: "Oshi No Ko", validInputs: [] },
// 	{ kanji: "おそ松さん", romaji: "osomatusann", eng: "Osomatsu-san", validInputs: [] },
// 	{ kanji: "オッドタクシー", romaji: "oddotakusi-", eng: "ODDTAXI", validInputs: [] },
// 	{
// 		kanji: "俺の妹がこんなに可愛いわけがない",
// 		romaji: "orenoimoutogakonnnanikawaiiwakeganai",
// 		eng: "OREIMO",
// 		validInputs: []
// 	},
// 	{ kanji: "終わりのセラフ", romaji: "owarinoserahu", eng: "Seraph of the end", validInputs: [] },
// 	{ kanji: "ガールズ＆パンツァー", romaji: "ga-ruzu&panntsa-", eng: "GIRLS und PANZER", validInputs: [] },
// 	{ kanji: "怪獣8号", romaji: "kaijyuu8gou", eng: "Kaiju No. 8", validInputs: [] },
// 	{ kanji: "カウボーイビパップ", romaji: "kaubo-ibibappu", eng: "Cowboy Bebop", validInputs: [] },
// 	{ kanji: "かくしごと", romaji: "kakusigoto", eng: "Kakushigoto", validInputs: [] },
// 	{
// 		kanji: "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
// 		romaji: "kaguyasamahakokurasetai~tennsaitatinorennaizunousenn~",
// 		eng: "Kaguya-sama: Love Is War",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "風の谷のナウシカ",
// 		romaji: "kazenotaninonausika",
// 		eng: "Nausicaa of the valley of the wind",
// 		validInputs: []
// 	},
// 	{ kanji: "がっこうぐらし！", romaji: "gakkougurasi!", eng: "SCHOOL-LIVE!", validInputs: [] },
// 	{ kanji: "彼方のアストラ", romaji: "kanatanoasutora", eng: "Astra Lost in Space", validInputs: [] },
// 	{ kanji: "彼女、お借りします", romaji: "kanojyo,okarisimasu", eng: "Rent a girlfriend", validInputs: [] },
// 	{ kanji: "神様になった日", romaji: "kamisamaninattahi", eng: "The Day I Became a God", validInputs: [] },
// 	{
// 		kanji: "からかい上手の高木さん",
// 		romaji: "karakaijyouzunotakagisann",
// 		eng: "Teasing Master Takagi-San",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "可愛いだけじゃない式守さん",
// 		romaji: "kawaiidakejyanaisikimorisann",
// 		eng: "Shikimori's Not Just a Cutie",
// 		validInputs: []
// 	},
// 	{ kanji: "寄生獣", romaji: "kiseijyuu", eng: "Parasyte", validInputs: [] },
// 	{ kanji: "機動戦士ガンダム", romaji: "kidousennsiganndamu", eng: "Mobile Suit Gundam", validInputs: [] },
// 	{
// 		kanji: "機動戦士ガンダム 水星の魔女",
// 		romaji: "kidousennsiganndamu suiseinomajyo",
// 		eng: "Mobile Suit Gundam: The Witch from Mercury",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "機動戦士ガンダム 鉄血のオルフェンズ",
// 		romaji: "kidousennsiganndamu tekketunoorufennzu",
// 		eng: "Mobile Suit Gundam: Iron-Blooded Orphans",
// 		validInputs: []
// 	},
// 	{ kanji: "鬼滅の刃", romaji: "kimetunoyaiba", eng: "Demon Slayer", validInputs: [] },
// 	{ kanji: "ギルティクラウン", romaji: "giruthikuraunn", eng: "The Everlasting Guilty Crown", validInputs: [] },
// 	{ kanji: "キルラキル", romaji: "kirurakiru", eng: "KILL la KILL", validInputs: [] },
// 	{ kanji: "キングダム", romaji: "kinngudamu", eng: "Kingdom", validInputs: [] },
// 	{ kanji: "銀魂", romaji: "ginntama", eng: "Gin Tama", validInputs: [] },
// 	{ kanji: "銀の匙", romaji: "ginnnosaji", eng: "Silver Spoon", validInputs: [] },
// 	{ kanji: "クラナド", romaji: "kuranado", eng: "CLANNAD", validInputs: [] },
// 	{ kanji: "ぐらんぶる", romaji: "gurannburu", eng: "Grand Blue", validInputs: [] },
// 	{ kanji: "黒子のバスケ", romaji: "kurokonobasuke", eng: "Kuroko's Basketball", validInputs: [] },
// 	{ kanji: "群青のファンファーレ", romaji: "gunnjyounofannfa-re", eng: "Fanfare of Adolescence", validInputs: [] },
// 	{ kanji: "けいおん！", romaji: "keionn!", eng: "K-ON!", validInputs: [] },
// 	{
// 		kanji: "ゲート 自衛隊彼の地にて斯く戦えり",
// 		romaji: "ge-to jieitaikanotinitekakutatakaeri",
// 		eng: "GATE： Where the JSDF Fought",
// 		validInputs: []
// 	},
// 	{ kanji: "血界戦線", romaji: "kekkaisennsenn", eng: "Blood Blockade Battlefront", validInputs: [] },
// 	{ kanji: "月刊少女 野崎くん", romaji: "gekkannsyoujyo nozakikunn", eng: "MONTHLY GIRLS NOZAKI-KUN", validInputs: [] },
// 	{ kanji: "攻殻機動隊", romaji: "koukakukidoutai", eng: "GHOST IN THE SHELL", validInputs: [] },
// 	{ kanji: "甲鉄城のカバネリ", romaji: "koutetujyounokabaneri", eng: "Kabaneri of the Iron Fortress", validInputs: [] },
// 	{ kanji: "聲の形", romaji: "koenokatati", eng: "A Silent Voice", validInputs: [] },
// 	{
// 		kanji: "コードギアス 反逆のルルーシュ",
// 		romaji: "ko-dogiasu hanngyakunoruru-syu",
// 		eng: "CODE GEASS Lelouch of the Rebellion",
// 		validInputs: []
// 	},
// 	{ kanji: "ゴールデンカムイ", romaji: "go-rudennkamui", eng: "Golden Kamuy", validInputs: [] },
// 	{
// 		kanji: "ご注文はうさぎですか？",
// 		romaji: "gotyuumonnhausagidesuka?",
// 		eng: "Is the Order a Rabbit?",
// 		validInputs: []
// 	},
// 	{ kanji: "五等分の花嫁", romaji: "gotoubunnnohanayome", eng: "The Quintessential Quintuplets", validInputs: [] },
// 	{
// 		kanji: "この素晴らしい世界に祝福を！",
// 		romaji: "konosubarasiisekainisyukuhukuwo!",
// 		eng: "Konosuba: God's Blessing on This Wonderful World!",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "この素晴らしい世界に爆焔を！",
// 		romaji: "konosubarasiisekainibakuennwo!",
// 		eng: "KonoSuba: An Explosion on This Wonderful World!",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "小林さんちのメイドラゴン",
// 		romaji: "kobayasisanntinomeidoragonn",
// 		eng: "Miss Kobayashi's Dragon Maid",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "古見さんは、コミュ症です。",
// 		romaji: "komisannha,komyusyoudesu",
// 		eng: "Komi Can't Communicate",
// 		validInputs: []
// 	},
// 	{ kanji: "金色のガッシュベル!!", romaji: "konnjikinogassyuberu!", eng: "Zatch Bell!", validInputs: [] },
// 	{ kanji: "サイコパス", romaji: "saikopasu", eng: "PSYCHO-PASS", validInputs: [] },
// 	{
// 		kanji: "冴えない彼女の育てかた",
// 		romaji: "saenaikanojyonosodatekata",
// 		eng: "How to Raise a Boring Girlfriend",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "さくら荘のペットな彼女",
// 		romaji: "sakurasounopettonakanojyo",
// 		eng: "The Pet Girl of Sakurasou",
// 		validInputs: []
// 	},
// 	{ kanji: "サマーウォーズ", romaji: "sama-who-zu", eng: "SUMMER WARS", validInputs: [] },
// 	{ kanji: "三月のライオン", romaji: "sanngatunoraionn", eng: "MARCH COMES IN LIKE A LION", validInputs: [] },
// 	{ kanji: "四月は君の嘘", romaji: "sigatuhakiminouso", eng: "Your Lie in April", validInputs: [] },
// 	{ kanji: "地獄楽", romaji: "jigokuraku", eng: "Hell's Paradise", validInputs: [] },
// 	{ kanji: "呪術廻戦", romaji: "jyujyutukaisenn", eng: "Jujutsu Kaisen", validInputs: [] },
// 	{ kanji: "シュタインズゲート", romaji: "syutainnzuge-to", eng: "STEINS;GATE", validInputs: [] },
// 	{
// 		kanji: "女子高生の無駄づかい",
// 		romaji: "jyosikouseinomudadukai",
// 		eng: "Wasteful Days of High School Girl",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "終末なにしてますか？忙しいですか？救ってもらっていいですか？",
// 		romaji: "syuumatunanisitemasuka?isogasiidesuka?sukuttemoratteiidesuka?",
// 		eng: "WorldEnd: What Do You Do at the End of the World? Are You Busy? Will You Save Us?",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "ジョジョの奇妙な冒険",
// 		romaji: "jyojyonokimyounaboukenn",
// 		eng: "JoJo's Bizarre Adventure",
// 		validInputs: []
// 	},
// 	{ kanji: "SHIROBAKO", romaji: "shirobako", eng: "Shirobako", validInputs: [] },
// 	{ kanji: "進撃の巨人", romaji: "sinngekinokyojinn", eng: "Attack on Titan", validInputs: [] },
// 	{ kanji: "新世界より", romaji: "sinnsekaiyori", eng: "From the New World", validInputs: [] },
// 	{ kanji: "新世紀エヴァンゲリオン", romaji: "sinnseikievanngerionn", eng: "Neon Genesis EVANGELION", validInputs: [] },
// 	{ kanji: "スプリガン", romaji: "supurigann", eng: "SPRIGGAN", validInputs: [] },
// 	{ kanji: "スラムダンク", romaji: "suramudannku", eng: "SLAM DUNK", validInputs: [] },
// 	{
// 		kanji: "涼宮ハルヒの憂鬱",
// 		romaji: "suzumiyaharuhinoyuuutu",
// 		eng: "The Melancholy of Haruhi Suzumiya",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "青春ブタ野郎はバニーガール先輩の夢を見ない",
// 		romaji: "seisyunnbutayarouhabani-ga-rusennpainoyumewominai",
// 		eng: "Rascal Does Not Dream of Bunny Girl Senpai",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "青春ブタ野郎はゆめみる少女の夢を見ない",
// 		romaji: "seisyunnbutayarouhayumemirusyoujyonoyumewominai",
// 		eng: "Rascal Does Not Dream of a Dreaming Girl",
// 		validInputs: []
// 	},
// 	{ kanji: "千と千尋の神隠し", romaji: "senntotihironokamikakusi", eng: "Spirited Away", validInputs: [] },
// 	{ kanji: "ソードアート オンライン", romaji: "so-doa-to onnrainn", eng: "Sword Art Online", validInputs: [] },
// 	{
// 		kanji: "その着せ替え人形は恋をする",
// 		romaji: "sonokisekaeninngyouhakoiwosuru",
// 		eng: "My Dress-Up Darling",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "宇宙よりも遠い場所",
// 		romaji: "utyuuyorimotooibasyo",
// 		eng: "A Place Further than the Universe",
// 		validInputs: []
// 	},
// 	{ kanji: "ゾンビ ランド サガ", romaji: "zonnbiranndosaga", eng: "Zombie Land Saga", validInputs: [] },
// 	{
// 		kanji: "ダーリン イン ザ フランキス",
// 		romaji: "da-rinn inn za hurannkisu",
// 		eng: "DARLING in the FRANXX",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "盾の勇者の成り上がり",
// 		romaji: "tatenoyuusyanonariagari",
// 		eng: "The Rising of the Shield Hero",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "男子高校生の日常",
// 		romaji: "dannsikoukouseinonitijyou",
// 		eng: "Daily Lives of high school boys",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "ダンジョンに出会いを求めるのは間違っているだろうか",
// 		romaji: "dannjyonnnideaiwomotomerunohamatigatteirudarouka",
// 		eng: "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
// 		validInputs: []
// 	},
// 	{ kanji: "チェンソーマン", romaji: "tyennso-mann", eng: "Chainsaw Man", validInputs: [] },
// 	{ kanji: "ちはやふる", romaji: "tihayahuru", eng: "Chihayafuru", validInputs: [] },
// 	{
// 		kanji: "中二病でも恋がしたい！",
// 		romaji: "tyuunibyoudemokoigasitai",
// 		eng: "Love, Chunibyo & Other Delusions",
// 		validInputs: []
// 	},
// 	{ kanji: "月がきれい", romaji: "tukigakirei", eng: "as the moon, so beautiful", validInputs: [] },
// 	{ kanji: "デート ア ライブ", romaji: "de-to a raibu", eng: "DATE A LIVE", validInputs: [] },
// 	{ kanji: "デスノート", romaji: "desuno-to", eng: "DEATH NOTE", validInputs: [] },
// 	{ kanji: "デュラララ!!", romaji: "dhurarara!!", eng: "Durarara!!", validInputs: [] },
// 	{ kanji: "天空の城ラピュタ", romaji: "tennkuunosirorapyuta", eng: "Castle in the Sky", validInputs: [] },
// 	{ kanji: "天元突破グレンラガン", romaji: "tenngenntoppagurennragann", eng: "Gurren Lagann", validInputs: [] },
// 	{
// 		kanji: "転生したらスライムだった件",
// 		romaji: "tennseisitarasuraimudattakenn",
// 		eng: "That Time I Got Reincarnated as a Slime",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "とある科学の超電磁砲",
// 		romaji: "toarukagakunore-rugann",
// 		eng: "A Certain Scientific Railgun",
// 		validInputs: []
// 	},
// 	{ kanji: "東京喰種トーキョーグール", romaji: "toukyougu-ru", eng: "Tokyo Ghoul", validInputs: [] },
// 	{ kanji: "東京24区", romaji: "toukyou24ku", eng: "TOKYO TWENTY FOURTH WARD", validInputs: [] },
// 	{
// 		kanji: "東京マグニチュード8.0",
// 		romaji: "toukyoumagunityu-do8.0",
// 		eng: "Tokyo Magnitude 8.0: Complete Collection",
// 		validInputs: []
// 	},
// 	{ kanji: "東京リベンジャーズ", romaji: "toukyouribennjya-zu", eng: "Tokyo Revengers", validInputs: [] },
// 	{ kanji: "時をかける少女", romaji: "tokiwokakerusyoujyo", eng: "Girl Who Leapt Through Time", validInputs: [] },
// 	{ kanji: "ドクターストーン", romaji: "dokuta-suto-nn", eng: "Dr.STONE", validInputs: [] },
// 	{ kanji: "となりのトトロ", romaji: "tonarinototoro", eng: "My Neighbor Totoro", validInputs: [] },
// 	{ kanji: "ドラえもん", romaji: "doraemonn", eng: "Doraemon", validInputs: [] },
// 	{ kanji: "ドラゴンボール超", romaji: "doragonnbo-rusu-pa-", eng: "Dragon Ball Super", validInputs: [] },
// 	{ kanji: "とらドラ！", romaji: "toradora!", eng: "Toradora!", validInputs: [] },
// 	{
// 		kanji: "とんでもスキルで異世界放浪メシ",
// 		romaji: "tonndemosukirudeisekaihouroumesi",
// 		eng: "Campfire Cooking in Another World with My Absurd Skill",
// 		validInputs: []
// 	},
// 	{ kanji: "凪のあすから", romaji: "naginoasukara", eng: "A Lull in the Sea", validInputs: [] },
// 	{ kanji: "夏目友人帳", romaji: "nasumeyuujinntyou", eng: "Natsume's Book of Friends", validInputs: [] },
// 	{ kanji: "七つの大罪", romaji: "nanatunotaizai", eng: "The Seven Deadly Sins", validInputs: [] },
// 	{ kanji: "ナルト", romaji: "naruto", eng: "NARUTO", validInputs: [] },
// 	{ kanji: "ニセコイ", romaji: "nisekoi", eng: "Nisekoi", validInputs: [] },
// 	{ kanji: "日常", romaji: "nitijyou", eng: "NICHIJOU: MY ORDINARY LIFE", validInputs: [] },
// 	{ kanji: "ノーゲーム ノーライフ", romaji: "no-ge-mu no-raihu", eng: "NO GAME NO LIFE", validInputs: [] },
// 	{ kanji: "のんのんびより", romaji: "nonnnonnbiyori", eng: "Non Non Biyori", validInputs: [] },
// 	{ kanji: "ハイキュー!!", romaji: "haikyu-!!", eng: "Haikyu!!", validInputs: [] },
// 	{ kanji: "ハイスコアガール", romaji: "haisukoaga-ru", eng: "Hi Score Girl", validInputs: [] },
// 	{
// 		kanji: "灰と幻想のグリムガル",
// 		romaji: "haitogennsounogurimugaru",
// 		eng: "Grimgar of Fantasy and Ash",
// 		validInputs: []
// 	},
// 	{ kanji: "鋼の錬金術師", romaji: "haganenorennkinnjyutusi", eng: "FULLMETAL ALCHEMIST", validInputs: [] },
// 	{ kanji: "はたらく魔王さま！", romaji: "hatarakumaousama!", eng: "The Devil Is a Part-Timer", validInputs: [] },
// 	{ kanji: "花咲くいろは", romaji: "hanasakuiroha", eng: "Hanasaku Iroha", validInputs: [] },
// 	{ kanji: "ばらかもん", romaji: "barakamonn", eng: "Barakamon", validInputs: [] },
// 	{ kanji: "パリピ孔明", romaji: "paripikoumei", eng: "Ya Boy Kongming!", validInputs: [] },
// 	{ kanji: "ハンターハンター", romaji: "hannta-hannta-", eng: "HUNTER×HUNTER", validInputs: [] },
// 	{ kanji: "東のエデン", romaji: "higasinoedenn", eng: "Eden of The East", validInputs: [] },
// 	{ kanji: "ヒカルの碁", romaji: "hikarunogo", eng: "Hikaru no Go", validInputs: [] },
// 	{ kanji: "ひぐらしのなく頃に", romaji: "higurasinonakukoroni", eng: "WHEN THEY CRY", validInputs: [] },
// 	{ kanji: "美少女戦士セーラームーン", romaji: "bisyoujyosennsise-ra-mu-nn", eng: "Sailor Moon", validInputs: [] },
// 	{ kanji: "ヒナまつり", romaji: "hinamaturi", eng: "Hinamatsuri", validInputs: [] },
// 	{ kanji: "響け！ユーフォニアム", romaji: "hibike!yu-foniamu", eng: "Sound! Euphonium", validInputs: [] },
// 	{ kanji: "氷菓", romaji: "hyouka", eng: "HYOUKA", validInputs: [] },
// 	{ kanji: "ピンポン", romaji: "pinnponn", eng: "PingPong", validInputs: [] },
// 	{ kanji: "プラスティックメモリーズ", romaji: "purasuthikkumemori-zu", eng: "Plastic Memories", validInputs: [] },
// 	{ kanji: "ブラック ラグーン", romaji: "burakku ragu-nn", eng: "BLACK LAGOON", validInputs: [] },
// 	{ kanji: "プラネテス", romaji: "puranetesu", eng: "PLANETES", validInputs: [] },
// 	{ kanji: "ブリーチ", romaji: "buri-ti", eng: "BLEACH", validInputs: [] },
// 	{ kanji: "フルーツバスケット", romaji: "huru-tubasuketto", eng: "Fruits Basket", validInputs: [] },
// 	{ kanji: "ブルーロック", romaji: "buru-rokku", eng: "BLUELOCK", validInputs: [] },
// 	{ kanji: "文豪ストレイドッグス", romaji: "bunngousutoreidoggusu", eng: "Bungo Stray Dogs", validInputs: [] },
// 	{ kanji: "僕だけがいない街", romaji: "bokudakegainaimati", eng: "Erased", validInputs: [] },
// 	{ kanji: "僕の心のヤバイやつ", romaji: "bokunokokoronoyabaiyatu", eng: "The Dangers in My Heart", validInputs: [] },
// 	{ kanji: "僕のヒーローアカデミア", romaji: "bokunohi-ro-akademia", eng: "My Hero Academia", validInputs: [] },
// 	{ kanji: "ぼっち ざ ろっく！", romaji: "botti za rokku!", eng: "Bocchi the Rock!", validInputs: [] },
// 	{ kanji: "マイホームヒーロー", romaji: "maiho-muhi-ro-", eng: "My Home Hero", validInputs: [] },
// 	{ kanji: "マクロスF", romaji: "makurosuF", eng: "MACROSS Frontier", validInputs: [] },
// 	{
// 		kanji: "魔法科高校の劣等生",
// 		romaji: "mahoukakoukounorettousei",
// 		eng: "The Irregular at Magic High School",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "魔法少女まどかマギカ",
// 		romaji: "mahousyoujyomadokamagika",
// 		eng: "Puella Magi Madoka Magica",
// 		validInputs: []
// 	},
// 	{ kanji: "魔法使いの嫁", romaji: "mahoutukainoyome", eng: "The Ancient Magus' Bride", validInputs: [] },
// 	{ kanji: "輪るピングドラム", romaji: "mawarupinngudoramu", eng: "Mawaru Penguindrum", validInputs: [] },
// 	{ kanji: "未来日記", romaji: "mirainikki", eng: "Future Diary", validInputs: [] },
// 	{ kanji: "蟲師", romaji: "musisi", eng: "Mushishi", validInputs: [] },
// 	{
// 		kanji: "無職転生 ～異世界行ったら本気だす～",
// 		romaji: "musyokutennsei~isekaiittarahonnkidasu~",
// 		eng: "Mushoku Tensei: Jobless Reincarnation",
// 		validInputs: []
// 	},
// 	{ kanji: "名探偵コナン", romaji: "meitannteikonann", eng: "Detective Conan / Case Closed", validInputs: [] },
// 	{ kanji: "メイドインアビス", romaji: "meidoinnabisu", eng: "MADE IN ABYSS", validInputs: [] },
// 	{ kanji: "もののけ姫", romaji: "mononokehime", eng: "Princess Mononoke", validInputs: [] },
// 	{ kanji: "モブサイコ100", romaji: "mobusaiko100", eng: "Mob Psycho 100", validInputs: [] },
// 	{
// 		kanji: "Re:ゼロから始める異世界生活",
// 		romaji: "Re:zerokarahajimeruisekaiseikatu",
// 		eng: "Re:Zero -Starting Life in Another World-",
// 		validInputs: []
// 	},
// 	{ kanji: "化物語", romaji: "bakemonogatari", eng: "BAKEMONOGATARI", validInputs: [] },
// 	{ kanji: "約束のネバーランド", romaji: "yakusokunoneba-ranndo", eng: "The Promised Neverland", validInputs: [] },
// 	{
// 		kanji: "やはり俺の青春ラブコメはまちがっている。",
// 		romaji: "yahariorenoseisyunnrabukomehamatigatteiru",
// 		eng: "My Youth Romantic Comedy Is Wrong As I Expected.",
// 		validInputs: []
// 	},
// 	{
// 		kanji: "山田くんと Lv999 の恋をする",
// 		romaji: "yamadakunntoLv999nokoiwosuru",
// 		eng: "My Love Story with Yamada-kun at Lv999",
// 		validInputs: []
// 	},
// 	{ kanji: "結城友奈は勇者である", romaji: "yuukiyuunahayuusyadearu", eng: "YUKI YUNA IS A HERO", validInputs: [] },
// 	{ kanji: "勇者、辞めます", romaji: "yuusya,yamemasu", eng: "I'm Quitting Heroing", validInputs: [] },
// 	{ kanji: "幽遊白書", romaji: "yuuyuuhakusyo", eng: "YuYu Hakusho", validInputs: [] },
// 	{ kanji: "ユーリ!!! オン アイス", romaji: "yu-ri!!! onn aisu", eng: "YURI!!! on ICE", validInputs: [] },
// 	{ kanji: "ゆるキャン", romaji: "yurukyann", eng: "Laid back camp", validInputs: [] },
// 	{
// 		kanji: "ようこそ実力至上主義の教室へ",
// 		romaji: "youkosojituryokusijyousyuginokyousituhe",
// 		eng: "Classroom of the Elite",
// 		validInputs: []
// 	},
// 	{ kanji: "幼女戦記", romaji: "youjyosennki", eng: "The Saga of Tanya the Evil", validInputs: [] },
// 	{ kanji: "四畳半神話大系", romaji: "yojyouhannsinnwataikei", eng: "The Tatami Galaxy", validInputs: [] },
// 	{ kanji: "ヨルムンガンド", romaji: "yorumunnganndo", eng: "Jormungand", validInputs: [] },
// 	{ kanji: "弱虫ペダル", romaji: "yowamusipedaru", eng: "Yowamushi Pedal", validInputs: [] },
// 	{ kanji: "らきすた", romaji: "rakisuta", eng: "Lucky Star", validInputs: [] },
// 	{ kanji: "ラブライブ！", romaji: "raburaibu!", eng: "Love Live!", validInputs: [] },
// 	{ kanji: "リーマンズクラブ", romaji: "ri-mannzukurabu", eng: "Salaryman's Club", validInputs: [] },
// 	{ kanji: "リライフ", romaji: "riraihu", eng: "ReLIFE", validInputs: [] },
// 	{ kanji: "ルパン三世", romaji: "rupannsannsei", eng: "Lupin the Third", validInputs: [] },
// 	{ kanji: "レクリエイターズ", romaji: "rekurieita-zu", eng: "Re:CREATORS", validInputs: [] },
// 	{ kanji: "ログ ホライズン", romaji: "rogu horaizunn", eng: "LOG HORIZON", validInputs: [] },
// 	{ kanji: "ワールドトリガー", romaji: "wa-rudotoriga-", eng: "WORLD TRIGGER", validInputs: [] },
// 	{
// 		kanji: "私に天使が舞い降りた！",
// 		romaji: "watasinitennsigamaiorita!",
// 		eng: "The angel came to me from the sky",
// 		validInputs: []
// 	},
// 	{ kanji: "ワンパンマン", romaji: "wannpannmann", eng: "One Punch-Man", validInputs: [] },
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
