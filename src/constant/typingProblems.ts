//小説の言葉
export type WordList = {
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

export const adjectives: WordList[] = [
	{ kanji: "煌びやかな", romaji: "kirabiyakana", eng: "dazzling", validInputs: ["kirabiyakana", "kirabiyacana"] },
	{
		kanji: "深淵の",
		romaji: "sinnennno",
		eng: "abyssal",
		validInputs: ["sinnennno", "shinnennno", "cinnennno"]
	},
	{ kanji: "穏やかな", romaji: "odayakana", eng: "gentle", validInputs: ["odayakana", "odayacana"] },
	{ kanji: "華麗な", romaji: "kareina", eng: "splendid", validInputs: ["kareina", "careina"] },
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
		]
	},
	{ kanji: "純白の", romaji: "junpakuno", eng: "pure white", validInputs: ["junpakuno"] },
	{ kanji: "荘厳な", romaji: "sougonna", eng: "majestic", validInputs: ["sougonna"] },
	{ kanji: "憂鬱な", romaji: "yuuutsuna", eng: "melancholic", validInputs: ["yuuutsuna"] },
	{ kanji: "静寂な", romaji: "seijakuna", eng: "silent", validInputs: ["seijakuna"] },
	{ kanji: "躍動的な", romaji: "yakudoutekina", eng: "dynamic", validInputs: ["yakudoutekina"] },
	{ kanji: "茜色の", romaji: "akaneirono", eng: "rosy", validInputs: ["akaneirono"] },
	{ kanji: "悠久の", romaji: "yuukyuuno", eng: "eternal", validInputs: ["yuukyuuno"] },
	{ kanji: "眩しい", romaji: "mabushii", eng: "dazzling", validInputs: ["mabushii"] },
	{ kanji: "残酷な", romaji: "zankokuna", eng: "cruel", validInputs: ["zankokuna"] },
	{ kanji: "絢爛たる", romaji: "kenrantaru", eng: "brilliant", validInputs: ["kenrantaru"] },
	{ kanji: "幽玄な", romaji: "yuugenna", eng: "mystical", validInputs: ["yuugenna"] },
	{ kanji: "荒涼とした", romaji: "kouyoutoshita", eng: "desolate", validInputs: ["kouyoutoshita"] },
	{ kanji: "凛とした", romaji: "rintoshita", eng: "dignified", validInputs: ["rintoshita"] },
	{ kanji: "空虚な", romaji: "kuukyona", eng: "empty", validInputs: ["kuukyona"] },
	{ kanji: "静謐な", romaji: "seihitsuna", eng: "serene", validInputs: ["seihitsuna"] },
	{ kanji: "美麗な", romaji: "bireina", eng: "beautiful", validInputs: ["bireina"] },
	{ kanji: "煌めく", romaji: "kirameku", eng: "sparkle", validInputs: ["kirameku"] },
	{ kanji: "壮大な", romaji: "soudaina", eng: "grand", validInputs: ["soudaina"] },
	{ kanji: "慎ましやかな", romaji: "tsutsumashiyakana", eng: "modest", validInputs: ["tsutsumashiyakana"] },
	{ kanji: "乾燥した", romaji: "kansoushita", eng: "dry", validInputs: ["kansoushita"] },
	{ kanji: "潤んだ", romaji: "urunda", eng: "moist", validInputs: ["urunda"] },
	{ kanji: "心地よい", romaji: "kokochiyoi", eng: "comfortable", validInputs: ["kokochiyoi"] },
	{ kanji: "悲劇的な", romaji: "higekitekina", eng: "tragic", validInputs: ["higekitekina"] },
	{ kanji: "幻想的な", romaji: "gensoutekina", eng: "fantastic", validInputs: ["gensoutekina"] },
	{ kanji: "深遠な", romaji: "shinenna", eng: "profound", validInputs: ["shinenna"] },
	{ kanji: "狂おしい", romaji: "kuruoshii", eng: "mad", validInputs: ["kuruoshii"] },
	{ kanji: "暖かな", romaji: "atatakana", eng: "warm", validInputs: ["atatakana"] },
	{ kanji: "優雅な", romaji: "yuugana", eng: "elegant", validInputs: ["yuugana"] },
	{ kanji: "無邪気な", romaji: "mujakina", eng: "innocent", validInputs: ["mujakina"] },
	{ kanji: "甘美な", romaji: "kanbina", eng: "sweet", validInputs: ["kanbina"] },
	{ kanji: "陰鬱な", romaji: "inutsuna", eng: "gloomy", validInputs: ["inutsuna"] },
	{ kanji: "疾風怒涛の", romaji: "shippuudotouno", eng: "stormy", validInputs: ["shippuudotouno"] },
	{ kanji: "息を呑むような", romaji: "ikionomuyouna", eng: "breathtaking", validInputs: ["ikionomuyouna"] },
	{ kanji: "鮮烈な", romaji: "senretsuna", eng: "vivid", validInputs: ["senretsuna"] },
	{ kanji: "雅な", romaji: "miyabina", eng: "refined", validInputs: ["miyabina"] },
	{ kanji: "蒼ざめた", romaji: "aozameta", eng: "pale", validInputs: ["aozameta"] },
	{ kanji: "豊かな", romaji: "yutakana", eng: "rich", validInputs: ["yutakana"] },
	{ kanji: "無情な", romaji: "mujouna", eng: "merciless", validInputs: ["mujouna"] },
	{ kanji: "壮麗な", romaji: "soureina", eng: "magnificent", validInputs: ["soureina"] },
	{ kanji: "純真な", romaji: "junshinna", eng: "pure", validInputs: ["junshinna"] },
	{ kanji: "愛おしい", romaji: "itooshii", eng: "lovely", validInputs: ["itooshii"] },
	{ kanji: "無垢な", romaji: "mukuna", eng: "innocent", validInputs: ["mukuna"] },
	{ kanji: "無限の", romaji: "mugenno", eng: "infinite", validInputs: ["mugenno"] },
	{ kanji: "儚い", romaji: "hakanai", eng: "fleeting", validInputs: ["hakanai"] },
	{ kanji: "陽気な", romaji: "youkina", eng: "cheerful", validInputs: ["youkina"] },
	{ kanji: "愉快な", romaji: "yukaina", eng: "pleasant", validInputs: ["yukaina"] },
	{ kanji: "激しい", romaji: "hageshii", eng: "intense", validInputs: ["hageshii"] },
	{ kanji: "切ない", romaji: "setsunai", eng: "painful", validInputs: ["setsunai"] },
	{ kanji: "美味しい", romaji: "oishii", eng: "delicious", validInputs: ["oishii"] },
	{ kanji: "艶やかな", romaji: "tsuyayakana", eng: "glossy", validInputs: ["tsuyayakana"] },
	{ kanji: "神聖な", romaji: "shinseina", eng: "sacred", validInputs: ["shinseina"] },
	{ kanji: "輝かしい", romaji: "kagayakashii", eng: "shining", validInputs: ["kagayakashii"] },
	{ kanji: "遥かな", romaji: "harukana", eng: "distant", validInputs: ["harukana"] },
	{ kanji: "哀れな", romaji: "awarena", eng: "pathetic", validInputs: ["awarena"] },
	{ kanji: "高貴な", romaji: "koukina", eng: "noble", validInputs: ["koukina"] },
	{ kanji: "瑞々しい", romaji: "mizumizushii", eng: "fresh", validInputs: ["mizumizushii"] },
	{ kanji: "魅惑的な", romaji: "miwakutekina", eng: "charming", validInputs: ["miwakutekina"] },
	{ kanji: "極彩色の", romaji: "gokusaishokuno", eng: "colorful", validInputs: ["gokusaishokuno"] },
	{ kanji: "細やかな", romaji: "komayakana", eng: "meticulous", validInputs: ["komayakana"] },
	{ kanji: "剥き出しの", romaji: "mukidashino", eng: "exposed", validInputs: ["mukidashino"] },
	{ kanji: "希望に満ちた", romaji: "kibounimichita", eng: "hopeful", validInputs: ["kibounimichita"] },
	{ kanji: "不可解な", romaji: "fukakaina", eng: "inexplicable", validInputs: ["fukakaina"] },
	{ kanji: "無口な", romaji: "mukuchina", eng: "taciturn", validInputs: ["mukuchina"] },
	{ kanji: "懐かしい", romaji: "natsukashii", eng: "nostalgic", validInputs: ["natsukashii"] },
	{ kanji: "情熱的な", romaji: "jounetsutekina", eng: "passionate", validInputs: ["jounetsutekina"] },
	{ kanji: "悠然とした", romaji: "yuuzentoshita", eng: "composed", validInputs: ["yuuzentoshita"] },
	{ kanji: "華麗な", romaji: "kareina", eng: "magnificent", validInputs: ["kareina"] },
	{ kanji: "美しい", romaji: "utsukushii", eng: "beautiful", validInputs: ["utsukushii"] },
	{ kanji: "優れた", romaji: "sugureta", eng: "excellent", validInputs: ["sugureta"] },
	{ kanji: "雅やかな", romaji: "miyabiyakana", eng: "elegant", validInputs: ["miyabiyakana"] },
	{ kanji: "甘い", romaji: "amai", eng: "sweet", validInputs: ["amai"] },
	{ kanji: "耳障りな", romaji: "mimizawari na", eng: "dissonant", validInputs: ["mimizawarina"] },
	{ kanji: "脆い", romaji: "moroi", eng: "fragile", validInputs: ["moroi"] },
	{ kanji: "優しい", romaji: "yasashii", eng: "kind", validInputs: ["yasashii"] },
	{ kanji: "寒々しい", romaji: "samuzamushii", eng: "chilly", validInputs: ["samuzamushii"] },
	{ kanji: "無慈悲な", romaji: "mujihina", eng: "ruthless", validInputs: ["mujihina"] },
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
