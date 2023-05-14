//小説の言葉
export const novelWords = [
	{ kanji: "魔法使い", romaji: "mahoutukai", eng: "wizard", validInputs: ["mahoutukai","mahoutsukai","mahoutucai","mahoutsucai"] },
  { kanji: "魔法陣", romaji: "mahoujin", eng: "magic circle", validInputs: ["mahoujin","mahouzin"] },
	{ kanji: "呪文", romaji: "jumon", eng: "spell", validInputs: ["jumon","jyumon","zyumon"] },
	{ kanji: "杖", romaji: "tue", eng: "wand", validInputs: ["tue","tsue"] },
	{ kanji: "竜", romaji: "ryuu", eng: "dragon", validInputs: ["ryuu"] },
	{ kanji: "魔王", romaji: "maou", eng: "demon king", validInputs: ["maou"] },
	{ kanji: "騎士", romaji: "kisi", eng: "knight", validInputs: ["kisi","kici","kishi"] },
	{ kanji: "冒険者", romaji: "boukensya", eng: "adventurer", validInputs: ["boukensya","boukennsya","boukensha","boukennsha"] },
	{ kanji: "勇者", romaji: "yuusya", eng: "hero", validInputs: ["yuusya","yuusha"] },
	{ kanji: "魔獣", romaji: "majuu", eng: "magical beast", validInputs: ["majuu","majyuu","mazyuu"] },
	{ kanji: "召喚", romaji: "syoukan", eng: "summon", validInputs: ["syoukan","shoukan","syoucan","shoucan"] },
	{ kanji: "魔力", romaji: "maryoku", eng: "magical power", validInputs: ["maryoku","maryocu"] },
	{ kanji: "ドラゴン", romaji: "doragon", eng: "dragon", validInputs: ["doragon"] },
	{ kanji: "予言書", romaji: "yogensyo", eng: "prophecy book", validInputs: ["yogensyo","yogensho"] },
	{ kanji: "魔術", romaji: "majutu", eng: "magic art" ,validInputs:["majutu","majutsu","majyutu","majyutsu","mazyutu","mazyutsu"]},
	{ kanji: "妖精", romaji: "yousei", eng: "fairy" ,validInputs:["yousei"]},
	{ kanji: "幻獣", romaji: "genjuu", eng: "phantom beast" ,validInputs:["genjuu","genjyuu","genzyu"]},
	{ kanji: "神話", romaji: "sinwa", eng: "myth" ,validInputs:["sinwa","cinwa","shinwa"]},
	{ kanji: "戦士", romaji: "sensi", eng: "warrior" ,validInputs:["sensi","senci","senshi","sennsi","sennci","sennshi"]},
	{ kanji: "聖剣", romaji: "seiken", eng: "holy sword" ,validInputs:["seiken"]},
	{ kanji: "魔界", romaji: "makai", eng: "demon world" ,validInputs:["makai","macai"]},
	{ kanji: "魔女", romaji: "majo", eng: "witch" ,validInputs:["majo","majyo","mazyo"]},
	{ kanji: "魔法学校", romaji: "mahougakkou", eng: "magic school" ,validInputs:["mahougakkou","mahougaccou"]},
	{ kanji: "宇宙船", romaji: "utyuusen", eng: "spaceship" ,validInputs:[]},
	{ kanji: "未来", romaji: "mirai", eng: "future" ,validInputs:[]},
	{ kanji: "超能力", romaji: "tyounouryoku", eng: "psychic powers" ,validInputs:[]},
	{ kanji: "タイムトラベル", romaji: "taimutoraberu", eng: "time travel" ,validInputs:[]},
	{ kanji: "異星人", romaji: "iseijin", eng: "extraterrestrial" ,validInputs:[]},
	{ kanji: "戦争", romaji: "sensou", eng: "war" ,validInputs:[]},
	{ kanji: "サイバーパンク", romaji: "saiba-panku", eng: "cyberpunk" ,validInputs:[]},
	{ kanji: "パラレルワールド", romaji: "parareruwa-rudo", eng: "parallel world" ,validInputs:[]},
	{ kanji: "人工知能", romaji: "jinkoutinou", eng: "artificial intelligence" ,validInputs:[]},
	{ kanji: "アンドロイド", romaji: "andoroido", eng: "android" ,validInputs:[]},
	{ kanji: "サイボーグ", romaji: "saibo-gu", eng: "cyborg" ,validInputs:[]},
	{ kanji: "ディストピア", romaji: "dhisutopia", eng: "dystopia" ,validInputs:[]},
	{ kanji: "宇宙ステーション", romaji: "utyuusute-syon", eng: "space station" ,validInputs:[]},
	{ kanji: "ロボット工学", romaji: "robottokougaku", eng: "robotics" ,validInputs:[]},
	{ kanji: "宇宙エレベーター", romaji: "utyuuerebe-ta-", eng: "space elevator" ,validInputs:[]},
	{ kanji: "宇宙戦艦", romaji: "utyuusenkan", eng: "space battleship" ,validInputs:[]},
	{ kanji: "クローン技術", romaji: "kuro-ngijyutu", eng: "clone technology" ,validInputs:[]},
	{ kanji: "テレポーテーション", romaji: "terepo-te-syon", eng: "teleportation" ,validInputs:[]},
	{ kanji: "人工衛星", romaji: "jinkoueisei", eng: "artificial satellite" ,validInputs:[]},
	{ kanji: "仮想現実", romaji: "kasougenjitu", eng: "virtual reality" ,validInputs:[]},
	{ kanji: "アステロイド", romaji: "asuteroido", eng: "asteroid" ,validInputs:[]},
	{ kanji: "太陽系", romaji: "taiyoukei", eng: "solar system" ,validInputs:[]},
	{ kanji: "恒星", romaji: "kousei", eng: "star" ,validInputs:[]},
	{ kanji: "ブラックホール", romaji: "burakkuho-ru", eng: "black hole" ,validInputs:[]},
	{ kanji: "スペースコロニー", romaji: "supe-sukoroni-", eng: "space colony" ,validInputs:[]},
	{ kanji: "テラフォーミング", romaji: "terafo-mingu", eng: "terraforming" ,validInputs:[]},
	{ kanji: "惑星探査機", romaji: "wakuseitansaki", eng: "planetary probe" ,validInputs:[]},
	{ kanji: "地球外生命体", romaji: "tikyuugaiseimeitai", eng: "extraterrestrial life" ,validInputs:[]},
	{ kanji: "量子コンピューター", romaji: "ryousikonpyu-ta-", eng: "quantum computer" ,validInputs:[]},
	{ kanji: "テクノロジー", romaji: "tekunoroji-", eng: "technology" ,validInputs:[]},
	{ kanji: "スペースシャトル", romaji: "supe-susyatoru", eng: "space shuttle" ,validInputs:[]},
	{ kanji: "推理小説", romaji: "suirisyousetu", eng: "detective novel" ,validInputs:[]},
	{ kanji: "ミステリー", romaji: "misuteri-", eng: "mystery" ,validInputs:[]},
	{ kanji: "犯罪", romaji: "hanzai", eng: "crime" ,validInputs:[]},
	{ kanji: "証拠", romaji: "syouko", eng: "evidence" ,validInputs:[]},
	{ kanji: "アリバイ", romaji: "aribai", eng: "alibi" ,validInputs:[]},
	{ kanji: "謎", romaji: "nazo", eng: "puzzle" ,validInputs:[]},
	{ kanji: "密室", romaji: "missitu", eng: "locked room" ,validInputs:[]},
	{ kanji: "事件現場", romaji: "jikengenba", eng: "crime scene" ,validInputs:[]},
	{ kanji: "犯人", romaji: "hannnin", eng: "criminal" ,validInputs:[]},
	{ kanji: "探偵助手", romaji: "tanteijyosyu", eng: "detective assistant" ,validInputs:[]},
	{ kanji: "怪盗", romaji: "kaitou", eng: "phantom thief" ,validInputs:[]},
	{ kanji: "暗号", romaji: "angou", eng: "cipher" ,validInputs:[]},
	{ kanji: "推理力", romaji: "suiriryoku", eng: "deductive reasoning" ,validInputs:[]},
	{ kanji: "サスペンス", romaji: "sasupensu", eng: "suspense" ,validInputs:[]},
	{ kanji: "アクション", romaji: "akusyon", eng: "action" ,validInputs:[]},
	{ kanji: "事件簿", romaji: "jikenbo", eng: "case file" ,validInputs:[]},
	{ kanji: "密室殺人", romaji: "missitusatujin", eng: "locked-room murder" ,validInputs:[]},
	{ kanji: "探偵事務所", romaji: "tanteijimusyo", eng: "detective agency" ,validInputs:[]},
	{ kanji: "黒幕", romaji: "kuromaku", eng: "mastermind" ,validInputs:[]},
	{ kanji: "証言", romaji: "syougen", eng: "testimony" ,validInputs:[]},
{kanji:"",romaji:"",eng:"",validInputs:[]}






















];

//ハンターハンター
export const hunterWords = [
	{ kanji: "百式観音", romaji: "hyakusikikannnon", eng: "ひゃくしきかんのん", validInputs: [] },
	{ kanji: "百式観音壱乃掌", romaji: "hyakusikikannnonnitinote", eng: "ひゃくしきかんのんいちのて", validInputs: [] },
	{ kanji: "百式観音零の掌", romaji: "hyakusikikannnonnzeronote", eng: "ひゃくしきかんのんぜろのて", validInputs: [] },
	{
		kanji: "百式観音九十九の掌",
		romaji: "hyakusikikannnonntukumonote",
		eng: "ひゃくしきかんのんつくものて",
		validInputs: []
	},
	{ kanji: "蚤弾", romaji: "huri-damu", eng: "フリーダム", validInputs: [] },
	{ kanji: "死体と遊ぶな子供達", romaji: "sitaitoasobunakodomotati", eng: "リビングデッドドールズ", validInputs: [] },
	{ kanji: "180分の恋奴隷", romaji: "180hunnnokoidorei", eng: "インスタントラヴァー", validInputs: [] },
	{ kanji: "俤人", romaji: "omokagebito", eng: "ソウルドール", validInputs: [] },
	{ kanji: "魂呼ばい", romaji: "tamayobai", eng: "たまよばい", validInputs: [] },
	{ kanji: "人形受胎", romaji: "ninngyoujyutai", eng: "ドールキャッチャー", validInputs: [] },
	{ kanji: "死亡遊戯", romaji: "sibouyuugi", eng: "ダツDEダーツ", validInputs: [] },
	{ kanji: "百万回生きた猫", romaji: "hyakumannkaiikitaneko", eng: "ネコノナマエ", validInputs: [] },
	{ kanji: "気狂いピエロ", romaji: "kiguruipiero", eng: "クレイジースロット", validInputs: [] },
	{ kanji: "死神の円舞曲", romaji: "sinigaminoennbukyoku", eng: "サイレントワルツ", validInputs: [] },
	{ kanji: "踊る気儘な火人形", romaji: "odorukimamanahininngyou", eng: "ダンシングドール", validInputs: [] },
	{ kanji: "虎咬真拳", romaji: "kokousinnkenn", eng: "ここうしんけん", validInputs: [] },
	{ kanji: "二人セゾン", romaji: "hutarisezonn", eng: "キミガイナイ", validInputs: [] },
	{ kanji: "蛇咬の舞", romaji: "dakounomai", eng: "だこうのまい", validInputs: [] },
	{ kanji: "散弾独楽哀歌", romaji: "sanndanngomaaika", eng: "ショットガンブルース", validInputs: [] },
	{ kanji: "戦闘舞踏曲", romaji: "senntoubutoukyoku", eng: "たたかいのワルツ", validInputs: [] },
	{ kanji: "竜巻独楽", romaji: "tatumakigoma", eng: "たつまきごま", validInputs: [] },
	{ kanji: "超不協輪怨", romaji: "tyouhukyouwaonn", eng: "シークレットノイズ", validInputs: [] },
	{ kanji: "雷掌", romaji: "raisyou", eng: "イズツシ", validInputs: [] },
	{ kanji: "神速", romaji: "sinnsoku", eng: "カンムル", validInputs: [] },
	{ kanji: "落雷", romaji: "rakurai", eng: "ナルカミ", validInputs: [] },
	{ kanji: "絶対時間", romaji: "zettaijikann", eng: "エンペラータイム", validInputs: [] },
	{ kanji: "律する小指の鎖", romaji: "rissurukoyubinokusari", eng: "ジャッジメントチェーン", validInputs: [] },
	{ kanji: "奪う人差し指の鎖", romaji: "ubauhitosasiyubinokusari", eng: "スチールチェーン", validInputs: [] },
	{ kanji: "導く薬指の鎖", romaji: "mitibikukusuriyubinokusari", eng: "ダウジングチェーン", validInputs: [] },
	{ kanji: "束縛する中指の鎖", romaji: "sokubakusurunakayubinokusari", eng: "チェーンジェイル", validInputs: [] },
	{ kanji: "癒す親指の鎖", romaji: "iyasuoyayubinokusari", eng: "ホーリーチェーン", validInputs: [] },
	{ kanji: "密室遊魚", romaji: "missituyuugyo", eng: "インドアフィッシュ", validInputs: [] },
	{ kanji: "人間の証明", romaji: "ninngennnosyoumei", eng: "オーダースタンプ", validInputs: [] },
	{ kanji: "転校生", romaji: "tennkousei", eng: "コンバートハンズ", validInputs: [] },
	{ kanji: "番いの破壊者", romaji: "tugainohakaisya", eng: "サンアンドムーン", validInputs: [] },
	{ kanji: "盗賊の極意", romaji: "touzokunogokui", eng: "スキルハンター", validInputs: [] },
	{ kanji: "栞のテーマ", romaji: "siorinote-ma", eng: "ダブルフェイス", validInputs: [] },
	{ kanji: "一握りの火薬", romaji: "hitonigirinokayaku", eng: "リトルフラワー", validInputs: [] },
	{ kanji: "神の左手悪魔の右手", romaji: "kaminohidariteakumanomigite", eng: "ギャラリーフェイク", validInputs: [] },
	{ kanji: "黒い賢人", romaji: "kuroikennjinn", eng: "ブラックゴレイヌ", validInputs: [] },
	{ kanji: "白い賢人", romaji: "siroikennjinn", eng: "ホワイトゴレイヌ", validInputs: [] },
	{ kanji: "ジャジャン拳", romaji: "jyajyannkenn", eng: "じゃじゃんけん", validInputs: [] },
	{ kanji: "血いさな世界", romaji: "tiisanasekai", eng: "ブラッディメアリー", validInputs: [] },
	{ kanji: "審美的転生注射", romaji: "sinnbitekitennseityuusya", eng: "クイーンショット", validInputs: [] },
	{ kanji: "遊戯王", romaji: "yuugiou", eng: "カルドセプト", validInputs: [] },
	{ kanji: "デメちゃん", romaji: "demetyann", eng: "でめちゃん", validInputs: [] },
	{ kanji: "大和撫子七変化", romaji: "yamatonadesikositihennge", eng: "ライダーズハイ", validInputs: [] },
	{ kanji: "麟粉乃愛泉", romaji: "rinnpunnnoaisenn", eng: "スピリチュアルメッセージ", validInputs: [] },
	{ kanji: "蠅の王", romaji: "haenoou", eng: "ベルゼブブ", validInputs: [] },
	{ kanji: "縁の下の十一人", romaji: "ennnositanojyuuitininn", eng: "イレブンブラックチルドレン", validInputs: [] },
	{ kanji: "携帯する他人の運命", romaji: "keitaisurutaninnnounnmei", eng: "ブラックボイス", validInputs: [] },
	{ kanji: "暗い宿", romaji: "kuraiyado", eng: "ホテル・ラフレシア", validInputs: [] },
	{ kanji: "物真似鳥", romaji: "monomanedori", eng: "ジェイプシフター", validInputs: [] },
	{ kanji: "機械に巣食う棘", romaji: "kikainisukuutoge", eng: "マシンイーター", validInputs: [] },
	{ kanji: "龍星群", romaji: "ryuuseigunn", eng: "ドラゴンダイヴ", validInputs: [] },
	{ kanji: "龍頭戯画", romaji: "ryuutougiga", eng: "ドラゴンヘッド", validInputs: [] },
	{ kanji: "牙突", romaji: "gatotu", eng: "ドランゴンランス", validInputs: [] },
	{ kanji: "蠅の仕事", romaji: "haenosigoto", eng: "サイレントワーカー", validInputs: [] },
	{ kanji: "天上不知唯我独損", romaji: "tennjyouhutiyuigadokusonn", eng: "ハコワレ", validInputs: [] },
	{ kanji: "天使の自動筆記", romaji: "tennsinojidouhikki", eng: "ラブリーゴーストライター", validInputs: [] },
	{ kanji: "黒子無想", romaji: "kokusimusou", eng: "テレプシコーラ", validInputs: [] },
	{ kanji: "玩具修理者", romaji: "ganngusyuurisya", eng: "ドクタープライス", validInputs: [] },
	{ kanji: "窓を開く者", romaji: "madowohirakumono", eng: "スクリーム", validInputs: [] },
	{ kanji: "四次元マンション", romaji: "yojigennmannsyonn", eng: "ハイドアンドシーク", validInputs: [] },
	{ kanji: "淋しい深海魚", romaji: "samisiisinnkaigyo", eng: "ウインクブルー", validInputs: [] },
	{ kanji: "暗黒の鬼婦神", romaji: "annkokunokihujinn", eng: "ブラックウィドウ", validInputs: [] },
	{ kanji: "愛の放射線", romaji: "ainohousyasenn", eng: "ラブシャワー", validInputs: [] },
	{ kanji: "記憶弾", romaji: "kiokudann", eng: "メモリーボム", validInputs: [] },
	{ kanji: "流離の大俳人", romaji: "sasurainodaihaijinn", eng: "グレイトハイカー", validInputs: [] },
	{ kanji: "凶器の錯乱", romaji: "kyoukinosakurann", eng: "いまやりにゆきます", validInputs: [] },
	{ kanji: "幽体離脱", romaji: "yuutairidatu", eng: "ザタッチ", validInputs: [] },
	{ kanji: "桃色吐息", romaji: "momoirotoiki", eng: "ピアノマッサージ", validInputs: [] },
	{ kanji: "魔法美容師", romaji: "mahoubiyousi", eng: "マジカルエステ", validInputs: [] },
	{ kanji: "薄っぺらな嘘", romaji: "usupperanauso", eng: "ドッキリテクスチャー", validInputs: [] },
	{ kanji: "伸縮自在の愛", romaji: "sinnsyukujizainoai", eng: "バンジーガム", validInputs: [] },
	{ kanji: "切り裂き美容師", romaji: "kirisakibiyousi", eng: "シザーハンズ", validInputs: [] },
	{ kanji: "てのひらを太陽に", romaji: "tenohirawotaiyouni", eng: "バイオハザード", validInputs: [] },
	{ kanji: "廻天", romaji: "kaitenn", eng: "リッパー・サイクロトロン", validInputs: [] },
	{ kanji: "秘密の扉", romaji: "himitunotobira", eng: "マジカルワーム", validInputs: [] },
	{ kanji: "許されざる者", romaji: "yurusarezarumono", eng: "ペインパッカー", validInputs: [] },
	{ kanji: "太陽に灼かれて", romaji: "taiyouniyakarete", eng: "ライジングサン", validInputs: [] },
	{ kanji: "不思議で便利な大風呂敷", romaji: "husigidebennrinaooburosiki", eng: "ファンファンクロス", validInputs: [] },
	{ kanji: "超複眼", romaji: "tyouhukugann", eng: "スーパーアイ", validInputs: [] },
	{ kanji: "俺の両手は機関銃", romaji: "orenoryoutehakikannjyuu", eng: "ダブルマシンガン", validInputs: [] },
	{ kanji: "裏窓の鳥", romaji: "uramadonotori", eng: "シークレットウインドウ", validInputs: [] },
	{ kanji: "星を継ぐもの", romaji: "hosiwotugumono", eng: "ベンジャミンバトン", validInputs: [] },
	{ kanji: "七色弓箭", romaji: "nanairokyuusenn", eng: "レインボウ", validInputs: [] },
	{ kanji: "戦闘演武曲", romaji: "senntouennbukyoku", eng: "バト＝レ・カンタービレ", validInputs: [] },
	{ kanji: "念糸縫合", romaji: "nennsihougou", eng: "ねんしほうごう", validInputs: [] },
	{ kanji: "Zombie Girl", romaji: "zonnbiga-ru", eng: "ラ・ヴィアン・ローズ", validInputs: [] },
	{ kanji: "密室裁判", romaji: "missitusaibann", eng: "クロスゲーム", validInputs: [] },
	{ kanji: "神の共犯者", romaji: "kaminokyouhannsya", eng: "かみのきょうはんしゃ", validInputs: [] },
	{ kanji: "神の不在証明", romaji: "kaminohuzaisyoumei", eng: "パーフェクトプラン", validInputs: [] },
	{ kanji: "監獄ロック", romaji: "kanngokurokku", eng: "スモーキージェイル", validInputs: [] },
	{ kanji: "紫煙機兵隊", romaji: "siennkiheitai", eng: "ディープパープル", validInputs: [] },
	{ kanji: "恋のエチュード", romaji: "koinoetyu-do", eng: "サイキンオセン", validInputs: [] },
	{ kanji: "墨攻", romaji: "bokukou", eng: "LSDF", validInputs: [] },
	{ kanji: "爆発的推進力", romaji: "bakuhatutekisuisinnryoku", eng: "オーラバースト", validInputs: [] },
	{ kanji: "双頭の蛇の正体", romaji: "soutounohebinosyoutai", eng: "サンダースネイク", validInputs: [] },
	{
		kanji: "双頭の蛇による二重唱",
		romaji: "soutounohebiniyorunijyuusyou",
		eng: "ソングオブディフェンス",
		validInputs: []
	},
	{ kanji: "体は全部知っている", romaji: "karadahazennbusitteiru", eng: "ボディアンドソウル", validInputs: [] },
	{ kanji: "14人の悪魔", romaji: "14ninnnoakuma", eng: "じゅうよにんのあくま", validInputs: [] },
	{ kanji: "TUBE", romaji: "tyu-bu", eng: "イナムラ", validInputs: [] },
	{ kanji: "渦波", romaji: "uzunami", eng: "トルネイヴ", validInputs: [] },
	{ kanji: "大波", romaji: "oonami", eng: "ビックウォール", validInputs: [] },
	{ kanji: "謝債発行機", romaji: "syasaihakkouki", eng: "レンタルポッド", validInputs: [] },
	{ kanji: "漆黒の処刑台", romaji: "sikkokunosyokeidai", eng: "オンバサラ", validInputs: [] },
	{ kanji: "卵男", romaji: "tamagootoko", eng: "ミサイルマン", validInputs: [] },
	{ kanji: "超破壊拳", romaji: "tyouhakaikenn", eng: "ビックバンインパクト", validInputs: [] },
	{ kanji: "裏窓", romaji: "uramado", eng: "リトルアイ", validInputs: [] },
	{ kanji: "命の音", romaji: "inotinooto", eng: "カウントダウン", validInputs: [] },
	{ kanji: "11人いる", romaji: "11ninniru", eng: "サイレントマジョリティ", validInputs: [] },
	{ kanji: "damage", romaji: "dame-ji", eng: "ダメージ", validInputs: [] }
];

//アニメ、漫画
export const comicAndAnimeWords = [
	{ kanji: "アオアシ", romaji: "aoasi", eng: "Aoashi", validInputs: [] },
	{
		kanji: "あの日見た花の名前を僕達はまだ知らない",
		romaji: "anohimitahananonamaewobokutatihamadasiranai",
		eng: "Anohana: The Flower We Saw That Day",
		validInputs: []
	},
	{
		kanji: "阿波連さんははかれない",
		romaji: "aharennsannhahakarenai",
		eng: "Aharen-san Is Indecipherable",
		validInputs: []
	},
	{ kanji: "甘城ブリリアントパーク", romaji: "amagiburirianntopa-ku", eng: "Amagi Brilliant Park", validInputs: [] },
	{ kanji: "アルドノア・ゼロ", romaji: "arudonoazero", eng: "Aldnoah.Zero", validInputs: [] },
	{ kanji: "暗殺教室", romaji: "annsatukyousitu", eng: "Assassination Classroom", validInputs: [] },
	{ kanji: "異世界おじさん", romaji: "isekaiojisann", eng: "Uncle from Another World", validInputs: [] },
	{
		kanji: "痛いのは嫌なので防御力に極振りしたいと思います",
		romaji: "itainohaiyananodebougyoryokunikyokuhurisitaitoomoimasu",
		eng: "BOFURI: I Don’t Want to Get Hurt, So I’ll Max Out My Defense",
		validInputs: []
	},
	{ kanji: "イナズマイレブン", romaji: "inazumairebunn", eng: "Inazuma Eleven", validInputs: [] },
	{
		kanji: "ヴァイオレット エヴァーガーデン",
		romaji: "vaioretto eva-ga-denn",
		eng: "Violet Evergarden",
		validInputs: []
	},
	{ kanji: "ヴィンラント サガ", romaji: "vinnrannto saga", eng: "Vinland Saga", validInputs: [] },
	{
		kanji: "映像研には手を出すな！",
		romaji: "eizoukennnihatewodasuna!",
		eng: "Keep Your Hands Off Eizouken!",
		validInputs: []
	},
	{ kanji: "86-エイティシックス-", romaji: "86-eitelisikkusu-", eng: "EIGHTY SIX", validInputs: [] },
	{ kanji: "エルフェンリート", romaji: "erufennri-to", eng: "Elfen Lied", validInputs: [] },
	{ kanji: "エロマンガ先生", romaji: "eromanngasennsei", eng: "Eromanga Sensei", validInputs: [] },
	{ kanji: "炎炎ノ消防隊", romaji: "ennennnosyouboutai", eng: "Fire Force", validInputs: [] },
	{ kanji: "王様ランキング", romaji: "ousamarannkinngu", eng: "Ranking of Kings", validInputs: [] },
	{ kanji: "桜蘭高校ホスト部", romaji: "ourannkoukouhosutobu", eng: "Ouran High School Host Club", validInputs: [] },
	{ kanji: "狼と香辛料", romaji: "ookamitokousinnryou", eng: "Spice and Wolf", validInputs: [] },
	{ kanji: "オーバーロード", romaji: "o-ba-ro-do", eng: "Overlord", validInputs: [] },
	{ kanji: "推しの子", romaji: "osinoko", eng: "Oshi No Ko", validInputs: [] },
	{ kanji: "おそ松さん", romaji: "osomatusann", eng: "Osomatsu-san", validInputs: [] },
	{ kanji: "オッドタクシー", romaji: "oddotakusi-", eng: "ODDTAXI", validInputs: [] },
	{
		kanji: "俺の妹がこんなに可愛いわけがない",
		romaji: "orenoimoutogakonnnanikawaiiwakeganai",
		eng: "OREIMO",
		validInputs: []
	},
	{ kanji: "終わりのセラフ", romaji: "owarinoserahu", eng: "Seraph of the end", validInputs: [] },
	{ kanji: "ガールズ＆パンツァー", romaji: "ga-ruzu&panntsa-", eng: "GIRLS und PANZER", validInputs: [] },
	{ kanji: "怪獣8号", romaji: "kaijyuu8gou", eng: "Kaiju No. 8", validInputs: [] },
	{ kanji: "カウボーイビパップ", romaji: "kaubo-ibibappu", eng: "Cowboy Bebop", validInputs: [] },
	{ kanji: "かくしごと", romaji: "kakusigoto", eng: "Kakushigoto", validInputs: [] },
	{
		kanji: "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
		romaji: "kaguyasamahakokurasetai~tennsaitatinorennaizunousenn~",
		eng: "Kaguya-sama: Love Is War",
		validInputs: []
	},
	{
		kanji: "風の谷のナウシカ",
		romaji: "kazenotaninonausika",
		eng: "Nausicaa of the valley of the wind",
		validInputs: []
	},
	{ kanji: "がっこうぐらし！", romaji: "gakkougurasi!", eng: "SCHOOL-LIVE!", validInputs: [] },
	{ kanji: "彼方のアストラ", romaji: "kanatanoasutora", eng: "Astra Lost in Space", validInputs: [] },
	{ kanji: "彼女、お借りします", romaji: "kanojyo,okarisimasu", eng: "Rent a girlfriend", validInputs: [] },
	{ kanji: "神様になった日", romaji: "kamisamaninattahi", eng: "The Day I Became a God", validInputs: [] },
	{
		kanji: "からかい上手の高木さん",
		romaji: "karakaijyouzunotakagisann",
		eng: "Teasing Master Takagi-San",
		validInputs: []
	},
	{
		kanji: "可愛いだけじゃない式守さん",
		romaji: "kawaiidakejyanaisikimorisann",
		eng: "Shikimori's Not Just a Cutie",
		validInputs: []
	},
	{ kanji: "寄生獣", romaji: "kiseijyuu", eng: "Parasyte", validInputs: [] },
	{ kanji: "機動戦士ガンダム", romaji: "kidousennsiganndamu", eng: "Mobile Suit Gundam", validInputs: [] },
	{
		kanji: "機動戦士ガンダム 水星の魔女",
		romaji: "kidousennsiganndamu suiseinomajyo",
		eng: "Mobile Suit Gundam: The Witch from Mercury",
		validInputs: []
	},
	{
		kanji: "機動戦士ガンダム 鉄血のオルフェンズ",
		romaji: "kidousennsiganndamu tekketunoorufennzu",
		eng: "Mobile Suit Gundam: Iron-Blooded Orphans",
		validInputs: []
	},
	{ kanji: "鬼滅の刃", romaji: "kimetunoyaiba", eng: "Demon Slayer", validInputs: [] },
	{ kanji: "ギルティクラウン", romaji: "giruthikuraunn", eng: "The Everlasting Guilty Crown", validInputs: [] },
	{ kanji: "キルラキル", romaji: "kirurakiru", eng: "KILL la KILL", validInputs: [] },
	{ kanji: "キングダム", romaji: "kinngudamu", eng: "Kingdom", validInputs: [] },
	{ kanji: "銀魂", romaji: "ginntama", eng: "Gin Tama", validInputs: [] },
	{ kanji: "銀の匙", romaji: "ginnnosaji", eng: "Silver Spoon", validInputs: [] },
	{ kanji: "クラナド", romaji: "kuranado", eng: "CLANNAD", validInputs: [] },
	{ kanji: "ぐらんぶる", romaji: "gurannburu", eng: "Grand Blue", validInputs: [] },
	{ kanji: "黒子のバスケ", romaji: "kurokonobasuke", eng: "Kuroko's Basketball", validInputs: [] },
	{ kanji: "群青のファンファーレ", romaji: "gunnjyounofannfa-re", eng: "Fanfare of Adolescence", validInputs: [] },
	{ kanji: "けいおん！", romaji: "keionn!", eng: "K-ON!", validInputs: [] },
	{
		kanji: "ゲート 自衛隊彼の地にて斯く戦えり",
		romaji: "ge-to jieitaikanotinitekakutatakaeri",
		eng: "GATE： Where the JSDF Fought",
		validInputs: []
	},
	{ kanji: "血界戦線", romaji: "kekkaisennsenn", eng: "Blood Blockade Battlefront", validInputs: [] },
	{ kanji: "月刊少女 野崎くん", romaji: "gekkannsyoujyo nozakikunn", eng: "MONTHLY GIRLS NOZAKI-KUN", validInputs: [] },
	{ kanji: "攻殻機動隊", romaji: "koukakukidoutai", eng: "GHOST IN THE SHELL", validInputs: [] },
	{ kanji: "甲鉄城のカバネリ", romaji: "koutetujyounokabaneri", eng: "Kabaneri of the Iron Fortress", validInputs: [] },
	{ kanji: "聲の形", romaji: "koenokatati", eng: "A Silent Voice", validInputs: [] },
	{
		kanji: "コードギアス 反逆のルルーシュ",
		romaji: "ko-dogiasu hanngyakunoruru-syu",
		eng: "CODE GEASS Lelouch of the Rebellion",
		validInputs: []
	},
	{ kanji: "ゴールデンカムイ", romaji: "go-rudennkamui", eng: "Golden Kamuy", validInputs: [] },
	{
		kanji: "ご注文はうさぎですか？",
		romaji: "gotyuumonnhausagidesuka?",
		eng: "Is the Order a Rabbit?",
		validInputs: []
	},
	{ kanji: "五等分の花嫁", romaji: "gotoubunnnohanayome", eng: "The Quintessential Quintuplets", validInputs: [] },
	{
		kanji: "この素晴らしい世界に祝福を！",
		romaji: "konosubarasiisekainisyukuhukuwo!",
		eng: "Konosuba: God's Blessing on This Wonderful World!",
		validInputs: []
	},
	{
		kanji: "この素晴らしい世界に爆焔を！",
		romaji: "konosubarasiisekainibakuennwo!",
		eng: "KonoSuba: An Explosion on This Wonderful World!",
		validInputs: []
	},
	{
		kanji: "小林さんちのメイドラゴン",
		romaji: "kobayasisanntinomeidoragonn",
		eng: "Miss Kobayashi's Dragon Maid",
		validInputs: []
	},
	{
		kanji: "古見さんは、コミュ症です。",
		romaji: "komisannha,komyusyoudesu",
		eng: "Komi Can't Communicate",
		validInputs: []
	},
	{ kanji: "金色のガッシュベル!!", romaji: "konnjikinogassyuberu!", eng: "Zatch Bell!", validInputs: [] },
	{ kanji: "サイコパス", romaji: "saikopasu", eng: "PSYCHO-PASS", validInputs: [] },
	{
		kanji: "冴えない彼女の育てかた",
		romaji: "saenaikanojyonosodatekata",
		eng: "How to Raise a Boring Girlfriend",
		validInputs: []
	},
	{
		kanji: "さくら荘のペットな彼女",
		romaji: "sakurasounopettonakanojyo",
		eng: "The Pet Girl of Sakurasou",
		validInputs: []
	},
	{ kanji: "サマーウォーズ", romaji: "sama-who-zu", eng: "SUMMER WARS", validInputs: [] },
	{ kanji: "三月のライオン", romaji: "sanngatunoraionn", eng: "MARCH COMES IN LIKE A LION", validInputs: [] },
	{ kanji: "四月は君の嘘", romaji: "sigatuhakiminouso", eng: "Your Lie in April", validInputs: [] },
	{ kanji: "地獄楽", romaji: "jigokuraku", eng: "Hell's Paradise", validInputs: [] },
	{ kanji: "呪術廻戦", romaji: "jyujyutukaisenn", eng: "Jujutsu Kaisen", validInputs: [] },
	{ kanji: "シュタインズゲート", romaji: "syutainnzuge-to", eng: "STEINS;GATE", validInputs: [] },
	{
		kanji: "女子高生の無駄づかい",
		romaji: "jyosikouseinomudadukai",
		eng: "Wasteful Days of High School Girl",
		validInputs: []
	},
	{
		kanji: "終末なにしてますか？忙しいですか？救ってもらっていいですか？",
		romaji: "syuumatunanisitemasuka?isogasiidesuka?sukuttemoratteiidesuka?",
		eng: "WorldEnd: What Do You Do at the End of the World? Are You Busy? Will You Save Us?",
		validInputs: []
	},
	{
		kanji: "ジョジョの奇妙な冒険",
		romaji: "jyojyonokimyounaboukenn",
		eng: "JoJo's Bizarre Adventure",
		validInputs: []
	},
	{ kanji: "SHIROBAKO", romaji: "shirobako", eng: "Shirobako", validInputs: [] },
	{ kanji: "進撃の巨人", romaji: "sinngekinokyojinn", eng: "Attack on Titan", validInputs: [] },
	{ kanji: "新世界より", romaji: "sinnsekaiyori", eng: "From the New World", validInputs: [] },
	{ kanji: "新世紀エヴァンゲリオン", romaji: "sinnseikievanngerionn", eng: "Neon Genesis EVANGELION", validInputs: [] },
	{ kanji: "スプリガン", romaji: "supurigann", eng: "SPRIGGAN", validInputs: [] },
	{ kanji: "スラムダンク", romaji: "suramudannku", eng: "SLAM DUNK", validInputs: [] },
	{
		kanji: "涼宮ハルヒの憂鬱",
		romaji: "suzumiyaharuhinoyuuutu",
		eng: "The Melancholy of Haruhi Suzumiya",
		validInputs: []
	},
	{
		kanji: "青春ブタ野郎はバニーガール先輩の夢を見ない",
		romaji: "seisyunnbutayarouhabani-ga-rusennpainoyumewominai",
		eng: "Rascal Does Not Dream of Bunny Girl Senpai",
		validInputs: []
	},
	{
		kanji: "青春ブタ野郎はゆめみる少女の夢を見ない",
		romaji: "seisyunnbutayarouhayumemirusyoujyonoyumewominai",
		eng: "Rascal Does Not Dream of a Dreaming Girl",
		validInputs: []
	},
	{ kanji: "千と千尋の神隠し", romaji: "senntotihironokamikakusi", eng: "Spirited Away", validInputs: [] },
	{ kanji: "ソードアート オンライン", romaji: "so-doa-to onnrainn", eng: "Sword Art Online", validInputs: [] },
	{
		kanji: "その着せ替え人形は恋をする",
		romaji: "sonokisekaeninngyouhakoiwosuru",
		eng: "My Dress-Up Darling",
		validInputs: []
	},
	{
		kanji: "宇宙よりも遠い場所",
		romaji: "utyuuyorimotooibasyo",
		eng: "A Place Further than the Universe",
		validInputs: []
	},
	{ kanji: "ゾンビ ランド サガ", romaji: "zonnbiranndosaga", eng: "Zombie Land Saga", validInputs: [] },
	{
		kanji: "ダーリン イン ザ フランキス",
		romaji: "da-rinn inn za hurannkisu",
		eng: "DARLING in the FRANXX",
		validInputs: []
	},
	{
		kanji: "盾の勇者の成り上がり",
		romaji: "tatenoyuusyanonariagari",
		eng: "The Rising of the Shield Hero",
		validInputs: []
	},
	{
		kanji: "男子高校生の日常",
		romaji: "dannsikoukouseinonitijyou",
		eng: "Daily Lives of high school boys",
		validInputs: []
	},
	{
		kanji: "ダンジョンに出会いを求めるのは間違っているだろうか",
		romaji: "dannjyonnnideaiwomotomerunohamatigatteirudarouka",
		eng: "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
		validInputs: []
	},
	{ kanji: "チェンソーマン", romaji: "tyennso-mann", eng: "Chainsaw Man", validInputs: [] },
	{ kanji: "ちはやふる", romaji: "tihayahuru", eng: "Chihayafuru", validInputs: [] },
	{
		kanji: "中二病でも恋がしたい！",
		romaji: "tyuunibyoudemokoigasitai",
		eng: "Love, Chunibyo & Other Delusions",
		validInputs: []
	},
	{ kanji: "月がきれい", romaji: "tukigakirei", eng: "as the moon, so beautiful", validInputs: [] },
	{ kanji: "デート ア ライブ", romaji: "de-to a raibu", eng: "DATE A LIVE", validInputs: [] },
	{ kanji: "デスノート", romaji: "desuno-to", eng: "DEATH NOTE", validInputs: [] },
	{ kanji: "デュラララ!!", romaji: "dhurarara!!", eng: "Durarara!!", validInputs: [] },
	{ kanji: "天空の城ラピュタ", romaji: "tennkuunosirorapyuta", eng: "Castle in the Sky", validInputs: [] },
	{ kanji: "天元突破グレンラガン", romaji: "tenngenntoppagurennragann", eng: "Gurren Lagann", validInputs: [] },
	{
		kanji: "転生したらスライムだった件",
		romaji: "tennseisitarasuraimudattakenn",
		eng: "That Time I Got Reincarnated as a Slime",
		validInputs: []
	},
	{
		kanji: "とある科学の超電磁砲",
		romaji: "toarukagakunore-rugann",
		eng: "A Certain Scientific Railgun",
		validInputs: []
	},
	{ kanji: "東京喰種トーキョーグール", romaji: "toukyougu-ru", eng: "Tokyo Ghoul", validInputs: [] },
	{ kanji: "東京24区", romaji: "toukyou24ku", eng: "TOKYO TWENTY FOURTH WARD", validInputs: [] },
	{
		kanji: "東京マグニチュード8.0",
		romaji: "toukyoumagunityu-do8.0",
		eng: "Tokyo Magnitude 8.0: Complete Collection",
		validInputs: []
	},
	{ kanji: "東京リベンジャーズ", romaji: "toukyouribennjya-zu", eng: "Tokyo Revengers", validInputs: [] },
	{ kanji: "時をかける少女", romaji: "tokiwokakerusyoujyo", eng: "Girl Who Leapt Through Time", validInputs: [] },
	{ kanji: "ドクターストーン", romaji: "dokuta-suto-nn", eng: "Dr.STONE", validInputs: [] },
	{ kanji: "となりのトトロ", romaji: "tonarinototoro", eng: "My Neighbor Totoro", validInputs: [] },
	{ kanji: "ドラえもん", romaji: "doraemonn", eng: "Doraemon", validInputs: [] },
	{ kanji: "ドラゴンボール超", romaji: "doragonnbo-rusu-pa-", eng: "Dragon Ball Super", validInputs: [] },
	{ kanji: "とらドラ！", romaji: "toradora!", eng: "Toradora!", validInputs: [] },
	{
		kanji: "とんでもスキルで異世界放浪メシ",
		romaji: "tonndemosukirudeisekaihouroumesi",
		eng: "Campfire Cooking in Another World with My Absurd Skill",
		validInputs: []
	},
	{ kanji: "凪のあすから", romaji: "naginoasukara", eng: "A Lull in the Sea", validInputs: [] },
	{ kanji: "夏目友人帳", romaji: "nasumeyuujinntyou", eng: "Natsume's Book of Friends", validInputs: [] },
	{ kanji: "七つの大罪", romaji: "nanatunotaizai", eng: "The Seven Deadly Sins", validInputs: [] },
	{ kanji: "ナルト", romaji: "naruto", eng: "NARUTO", validInputs: [] },
	{ kanji: "ニセコイ", romaji: "nisekoi", eng: "Nisekoi", validInputs: [] },
	{ kanji: "日常", romaji: "nitijyou", eng: "NICHIJOU: MY ORDINARY LIFE", validInputs: [] },
	{ kanji: "ノーゲーム ノーライフ", romaji: "no-ge-mu no-raihu", eng: "NO GAME NO LIFE", validInputs: [] },
	{ kanji: "のんのんびより", romaji: "nonnnonnbiyori", eng: "Non Non Biyori", validInputs: [] },
	{ kanji: "ハイキュー!!", romaji: "haikyu-!!", eng: "Haikyu!!", validInputs: [] },
	{ kanji: "ハイスコアガール", romaji: "haisukoaga-ru", eng: "Hi Score Girl", validInputs: [] },
	{
		kanji: "灰と幻想のグリムガル",
		romaji: "haitogennsounogurimugaru",
		eng: "Grimgar of Fantasy and Ash",
		validInputs: []
	},
	{ kanji: "鋼の錬金術師", romaji: "haganenorennkinnjyutusi", eng: "FULLMETAL ALCHEMIST", validInputs: [] },
	{ kanji: "はたらく魔王さま！", romaji: "hatarakumaousama!", eng: "The Devil Is a Part-Timer", validInputs: [] },
	{ kanji: "花咲くいろは", romaji: "hanasakuiroha", eng: "Hanasaku Iroha", validInputs: [] },
	{ kanji: "ばらかもん", romaji: "barakamonn", eng: "Barakamon", validInputs: [] },
	{ kanji: "パリピ孔明", romaji: "paripikoumei", eng: "Ya Boy Kongming!", validInputs: [] },
	{ kanji: "ハンターハンター", romaji: "hannta-hannta-", eng: "HUNTER×HUNTER", validInputs: [] },
	{ kanji: "東のエデン", romaji: "higasinoedenn", eng: "Eden of The East", validInputs: [] },
	{ kanji: "ヒカルの碁", romaji: "hikarunogo", eng: "Hikaru no Go", validInputs: [] },
	{ kanji: "ひぐらしのなく頃に", romaji: "higurasinonakukoroni", eng: "WHEN THEY CRY", validInputs: [] },
	{ kanji: "美少女戦士セーラームーン", romaji: "bisyoujyosennsise-ra-mu-nn", eng: "Sailor Moon", validInputs: [] },
	{ kanji: "ヒナまつり", romaji: "hinamaturi", eng: "Hinamatsuri", validInputs: [] },
	{ kanji: "響け！ユーフォニアム", romaji: "hibike!yu-foniamu", eng: "Sound! Euphonium", validInputs: [] },
	{ kanji: "氷菓", romaji: "hyouka", eng: "HYOUKA", validInputs: [] },
	{ kanji: "ピンポン", romaji: "pinnponn", eng: "PingPong", validInputs: [] },
	{ kanji: "プラスティックメモリーズ", romaji: "purasuthikkumemori-zu", eng: "Plastic Memories", validInputs: [] },
	{ kanji: "ブラック ラグーン", romaji: "burakku ragu-nn", eng: "BLACK LAGOON", validInputs: [] },
	{ kanji: "プラネテス", romaji: "puranetesu", eng: "PLANETES", validInputs: [] },
	{ kanji: "ブリーチ", romaji: "buri-ti", eng: "BLEACH", validInputs: [] },
	{ kanji: "フルーツバスケット", romaji: "huru-tubasuketto", eng: "Fruits Basket", validInputs: [] },
	{ kanji: "ブルーロック", romaji: "buru-rokku", eng: "BLUELOCK", validInputs: [] },
	{ kanji: "文豪ストレイドッグス", romaji: "bunngousutoreidoggusu", eng: "Bungo Stray Dogs", validInputs: [] },
	{ kanji: "僕だけがいない街", romaji: "bokudakegainaimati", eng: "Erased", validInputs: [] },
	{ kanji: "僕の心のヤバイやつ", romaji: "bokunokokoronoyabaiyatu", eng: "The Dangers in My Heart", validInputs: [] },
	{ kanji: "僕のヒーローアカデミア", romaji: "bokunohi-ro-akademia", eng: "My Hero Academia", validInputs: [] },
	{ kanji: "ぼっち ざ ろっく！", romaji: "botti za rokku!", eng: "Bocchi the Rock!", validInputs: [] },
	{ kanji: "マイホームヒーロー", romaji: "maiho-muhi-ro-", eng: "My Home Hero", validInputs: [] },
	{ kanji: "マクロスF", romaji: "makurosuF", eng: "MACROSS Frontier", validInputs: [] },
	{
		kanji: "魔法科高校の劣等生",
		romaji: "mahoukakoukounorettousei",
		eng: "The Irregular at Magic High School",
		validInputs: []
	},
	{
		kanji: "魔法少女まどかマギカ",
		romaji: "mahousyoujyomadokamagika",
		eng: "Puella Magi Madoka Magica",
		validInputs: []
	},
	{ kanji: "魔法使いの嫁", romaji: "mahoutukainoyome", eng: "The Ancient Magus' Bride", validInputs: [] },
	{ kanji: "輪るピングドラム", romaji: "mawarupinngudoramu", eng: "Mawaru Penguindrum", validInputs: [] },
	{ kanji: "未来日記", romaji: "mirainikki", eng: "Future Diary", validInputs: [] },
	{ kanji: "蟲師", romaji: "musisi", eng: "Mushishi", validInputs: [] },
	{
		kanji: "無職転生 ～異世界行ったら本気だす～",
		romaji: "musyokutennsei~isekaiittarahonnkidasu~",
		eng: "Mushoku Tensei: Jobless Reincarnation",
		validInputs: []
	},
	{ kanji: "名探偵コナン", romaji: "meitannteikonann", eng: "Detective Conan / Case Closed", validInputs: [] },
	{ kanji: "メイドインアビス", romaji: "meidoinnabisu", eng: "MADE IN ABYSS", validInputs: [] },
	{ kanji: "もののけ姫", romaji: "mononokehime", eng: "Princess Mononoke", validInputs: [] },
	{ kanji: "モブサイコ100", romaji: "mobusaiko100", eng: "Mob Psycho 100", validInputs: [] },
	{
		kanji: "Re:ゼロから始める異世界生活",
		romaji: "Re:zerokarahajimeruisekaiseikatu",
		eng: "Re:Zero -Starting Life in Another World-",
		validInputs: []
	},
	{ kanji: "化物語", romaji: "bakemonogatari", eng: "BAKEMONOGATARI", validInputs: [] },
	{ kanji: "約束のネバーランド", romaji: "yakusokunoneba-ranndo", eng: "The Promised Neverland", validInputs: [] },
	{
		kanji: "やはり俺の青春ラブコメはまちがっている。",
		romaji: "yahariorenoseisyunnrabukomehamatigatteiru",
		eng: "My Youth Romantic Comedy Is Wrong As I Expected.",
		validInputs: []
	},
	{
		kanji: "山田くんと Lv999 の恋をする",
		romaji: "yamadakunntoLv999nokoiwosuru",
		eng: "My Love Story with Yamada-kun at Lv999",
		validInputs: []
	},
	{ kanji: "結城友奈は勇者である", romaji: "yuukiyuunahayuusyadearu", eng: "YUKI YUNA IS A HERO", validInputs: [] },
	{ kanji: "勇者、辞めます", romaji: "yuusya,yamemasu", eng: "I'm Quitting Heroing", validInputs: [] },
	{ kanji: "幽遊白書", romaji: "yuuyuuhakusyo", eng: "YuYu Hakusho", validInputs: [] },
	{ kanji: "ユーリ!!! オン アイス", romaji: "yu-ri!!! onn aisu", eng: "YURI!!! on ICE", validInputs: [] },
	{ kanji: "ゆるキャン", romaji: "yurukyann", eng: "Laid back camp", validInputs: [] },
	{
		kanji: "ようこそ実力至上主義の教室へ",
		romaji: "youkosojituryokusijyousyuginokyousituhe",
		eng: "Classroom of the Elite",
		validInputs: []
	},
	{ kanji: "幼女戦記", romaji: "youjyosennki", eng: "The Saga of Tanya the Evil", validInputs: [] },
	{ kanji: "四畳半神話大系", romaji: "yojyouhannsinnwataikei", eng: "The Tatami Galaxy", validInputs: [] },
	{ kanji: "ヨルムンガンド", romaji: "yorumunnganndo", eng: "Jormungand", validInputs: [] },
	{ kanji: "弱虫ペダル", romaji: "yowamusipedaru", eng: "Yowamushi Pedal", validInputs: [] },
	{ kanji: "らきすた", romaji: "rakisuta", eng: "Lucky Star", validInputs: [] },
	{ kanji: "ラブライブ！", romaji: "raburaibu!", eng: "Love Live!", validInputs: [] },
	{ kanji: "リーマンズクラブ", romaji: "ri-mannzukurabu", eng: "Salaryman's Club", validInputs: [] },
	{ kanji: "リライフ", romaji: "riraihu", eng: "ReLIFE", validInputs: [] },
	{ kanji: "ルパン三世", romaji: "rupannsannsei", eng: "Lupin the Third", validInputs: [] },
	{ kanji: "レクリエイターズ", romaji: "rekurieita-zu", eng: "Re:CREATORS", validInputs: [] },
	{ kanji: "ログ ホライズン", romaji: "rogu horaizunn", eng: "LOG HORIZON", validInputs: [] },
	{ kanji: "ワールドトリガー", romaji: "wa-rudotoriga-", eng: "WORLD TRIGGER", validInputs: [] },
	{
		kanji: "私に天使が舞い降りた！",
		romaji: "watasinitennsigamaiorita!",
		eng: "The angel came to me from the sky",
		validInputs: []
	},
	{ kanji: "ワンパンマン", romaji: "wannpannmann", eng: "One Punch-Man", validInputs: [] },
	{ kanji: "ワンピース", romaji: "wannpi-su", eng: "ONE PIECE", validInputs: [] }
];

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
