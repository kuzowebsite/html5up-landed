const e_grids = document.getElementById("grids");
const e_list = document.getElementById("list");

const gridString = {
  kana: Array.from("にんきもしそりせえなふうとたよはくみひこのぬついすまやらるおあさかちゆて"),
  rom: [
    "ni","n","ki","mo","shi","so",
    "ri","se","e","na","fu","u",
    "to","ta","yo","ha","ku","mi",
    "hi","ko","no","nu","tsu","i",
    "su","ma","ya","ra","ru","o",
    "a","sa","ka","chi","yu","te",
  ],
}

for (const str in gridString) {
  const e_grid = document.createElement("div");
  e_grid.className = "grid";

  gridString[str].forEach((char)=> {
    e_grid.innerHTML += `<span>${(char=="る"||char=="ru")?"<b>"+char+"</b>":char}</span>`;
  });
  
  e_grids.appendChild(e_grid);
}

const dict = [
  {
    kana: "あお",
    romaji: "ao",
    kanji: "青",
    english: ["цэнхэр"],
  },{
    kana: "あさ",
    romaji: "asa",
    kanji: "朝",
    english: ["өглөө"],
  },{
    kana: "あす",
    romaji: "asu",
    kanji: "明日",
    english: ["маргааш"],
  },{
    kana: "いお",
    romaji: "io",
    kanji: "イオ",
    english: ["Io (Jupiter moon)"],
  },{
    kana: "いく",
    romaji: "iku",
    kanji: "行く",
    english: ["явах","ажиллах","(逝) үхэх"],
  },{
    kana: "いす",
    romaji: "isu",
    kanji: "椅子",
    english: ["сандал"],
  },{
    kana: "いつ",
    romaji: "itsu",
    kanji: "何時",
    english: ["хэзээ","хэдэн цагт"],
  },{
    kana: "いみ",
    romaji: "imi",
    kanji: "意味",
    english: ["утга учир"],
  },{
    kana: "いる",
    romaji: "iru",
    kanji: "居る",
    english: ["байх/байдаг (амьд биетүүд)"],
  },{
    kana: "うく",
    romaji: "uku",
    kanji: "浮く",
    english: ["хөвөх"],
  },{
    kana: "うし",
    romaji: "ushi",
    kanji: "牛",
    english: ["үхэр"],
  },{
    kana: "うそ",
    romaji: "uso",
    kanji: "嘘",
    english: ["худлаа","худал"],
  },{
    kana: "うみ",
    romaji: "umi",
    kanji: "海",
    english: ["далай"],
  },{
    kana: "え",
    romaji: "e",
    kanji: "絵",
    english: ["зурах","уран зураг"],
  },{
    kana: "えん",
    romaji: "en",
    kanji: "円",
    english: ["иен","тойрог"],
  },{
    kana: "えき",
    romaji: "eki",
    kanji: "駅",
    english: ["галт тэрэгний буудал"],
  },{
    kana: "おる",
    romaji: "oru",
    kanji: "折る",
    english: ["нугалах"],
  },{
    kana: "おる",
    romaji: "oru",
    kanji: "居る",
    english: ["байх/байдаг (амьд биетүүд)"],
  },{
    kana: "かも",
    romaji: "kamo",
    kanji: "かも",
    english: ["магадгүй","тэгж бодож байна"],
  },{
    kana: "かも",
    romaji: "kamo",
    kanji: "鴨",
    english: ["нугас"],
  },{
    kana: "かち",
    romaji: "kachi",
    kanji: "勝ち",
    english: ["ялалт","ялна"],
  },{
    kana: "き",
    romaji: "ki",
    kanji: "木",
    english: ["мод"],
  },{
    kana: "き",
    romaji: "ki",
    kanji: "気",
    english: ["уур амьсгал","агаар","(орчуулахад хэцүү)"],
  },{
    kana: "き",
    romaji: "ki",
    kanji: "機",
    english: ["машин","төхөөрөмж","нисэх онгоц"],
  },{
    kana: "くう",
    romaji: "kuu",
    kanji: "食う",
    english: ["идэх"],
  },{
    kana: "くつ",
    romaji: "kutsu",
    kanji: "靴",
    english: ["гутал"],
  },{
    kana: "くみ",
    romaji: "kumi",
    kanji: "組",
    english: ["анги (оюутнууд)","бүлэг"],
  },{
    kana: "こ",
    romaji: "ko",
    kanji: "子",
    english: ["хүүхэд"],
  },{
    kana: "こと",
    romaji: "toko",
    kanji: "事",
    english: ["зүйл"],
  },{
    kana: "この",
    romaji: "kono",
    kanji: "この",
    english: ["энэ (обьект)"],
  },{
    kana: "こよ",
    romaji: "koyo",
    kanji: "こよ",
    english: ["хөөе :)"],
  },{
    kana: "さか",
    romaji: "saka",
    kanji: "坂",
    english: ["толгод","налуу"],
  },{
    kana: "さき",
    romaji: "saka",
    kanji: "先",
    english: ["зөвлөгөө","очих газар","зорилтот","урагшаа"],
  },{
    kana: "さす",
    romaji: "sasu",
    kanji: "刺す",
    english: ["цоолох","хутгалах"],
  },{
    kana: "さす",
    romaji: "sasu",
    kanji: "指す",
    english: ["зааж өгөх"],
  },{
    kana: "さま",
    romaji: "sama",
    kanji: "様",
    english: ["байдал/нөхцөл байдал","Гадаад төрх","эелдэг дагавар"],
  },{
    kana: "し",
    romaji: "shi",
    kanji: "死",
    english: ["үхэл"],
  },{
    kana: "し",
    romaji: "shi",
    kanji: "詩",
    english: ["шүлэг"],
  },{
    kana: "せ",
    romaji: "se",
    kanji: "背",
    english: ["буцах","арын тал"],
  },{
    kana: "せき",
    romaji: "seki",
    kanji: "咳",
    english: ["ханиалгах"],
  },{
    kana: "せき",
    romaji: "seki",
    kanji: "席",
    english: ["суудал"],
  },{
    kana: "せん",
    romaji: "sen",
    kanji: "千",
    english: ["1000"],
  },{
    kana: "せん",
    romaji: "sen",
    kanji: "線",
    english: ["шугам"],
  },{
    kana: "そう",
    romaji: "sou",
    kanji: "そう",
    english: ["like that","in that way","that's right","correct"],
  },{
    kana: "そふ",
    romaji: "sofu",
    kanji: "祖父",
    english: ["grandfather"],
  },{
    kana: "そり",
    romaji: "sori",
    kanji: "橇",
    english: ["sled"],
  },{
    kana: "ち",
    romaji: "chi",
    kanji: "血",
    english: ["blood"],
  },{
    kana: "たこ",
    romaji: "tako",
    kanji: "タコ",
    english: ["taco"],
  },{
    kana: "ちし",
    romaji: "chishi",
    kanji: "地誌",
    english: ["topography"],
  },{
    kana: "ちし",
    romaji: "chishi",
    kanji: "致死",
    english: ["fatal","lethal"],
  },{
    kana: "つい",
    romaji: "tsui",
    kanji: "つい",
    english: ["just now"],
  },{
    kana: "つみ",
    romaji: "tsumi",
    kanji: "罪",
    english: ["crime","sin"],
  },{
    kana: "つる",
    romaji: "tsuru",
    kanji: "弦",
    english: ["string (for instruments)"],
  },{
    kana: "つる",
    romaji: "tsuru",
    kanji: "吊る",
    english: ["to hang","to suspend"],
  },{
    kana: "つる",
    romaji: "tsuru",
    kanji: "釣る",
    english: ["to fish","to catch","to lure in"],
  },{
    kana: "て",
    romaji: "te",
    kanji: "手",
    english: ["hand"],
  },{
    kana: "とこ",
    romaji: "toko",
    kanji: "床",
    english: ["bed"],
  },{
    kana: "とこ",
    romaji: "toko",
    kanji: "所",
    english: ["place","location"],
  },{
    kana: "とり",
    romaji: "tori",
    kanji: "鳥",
    english: ["bird"],
  },{
    kana: "なし",
    romaji: "nashi",
    kanji: "無し",
    english: ["none","N/A"],
  },{
    kana: "に",
    romaji: "ni",
    kanji: "に",
    english: ["in","at","as"],
  },{
    kana: "に",
    romaji: "ni",
    kanji: "二",
    english: ["2"],
  },{
    kana: "にせ",
    romaji: "nise",
    kanji: "偽",
    english: ["fake","imitation"],
  },{
    kana: "にんき",
    romaji: "nin'ki",
    kanji: "人気",
    english: ["popular","popularity"],
  },{
    kana: "ぬく",
    romaji: "nuku",
    kanji: "抜く",
    english: ["to pull/take something out","to omit"],
  },{
    kana: "ぬの",
    romaji: "nuno",
    kanji: "布",
    english: ["cloth"],
  },{
    kana: "ぬる",
    romaji: "nin'ki",
    kanji: "塗る",
    english: ["paint"],
  },{
    kana: "の",
    romaji: "no",
    kanji: "の",
    english: ["of"],
  },{
    kana: "は",
    romaji: "wa",
    kanji: "は",
    english: ["is"],
  },{
    kana: "は",
    romaji: "ha",
    kanji: "葉",
    english: ["leaf"],
  },{
    kana: "は",
    romaji: "ha",
    kanji: "歯",
    english: ["tooth"],
  },{
    kana: "はく",
    romaji: "haku",
    kanji: "吐く",
    english: ["vomit/throw up","spit"],
  },{
    kana: "はく",
    romaji: "haku",
    kanji: "履く",
    english: ["put on/wear (on lower body)"],
  },{
    kana: "はつ",
    romaji: "hatsu",
    kanji: "初",
    english: ["first"],
  },{
    kana: "はな",
    romaji: "hana",
    kanji: "花",
    english: ["flower"],
  },{
    kana: "ひ",
    romaji: "hi",
    kanji: "火",
    english: ["fire"],
  },{
    kana: "ひ",
    romaji: "hi",
    kanji: "日",
    english: ["day","sun"],
  },{
    kana: "ひと",
    romaji: "hito",
    kanji: "人",
    english: ["person"],
  },{
    kana: "ひま",
    romaji: "hima",
    kanji: "暇",
    english: ["free time"],
  },{
    kana: "ふう",
    romaji: "fuu",
    kanji: "風",
    english: ["way/manner","seeming"],
  },{
    kana: "ふう",
    romaji: "fuu",
    kanji: "封",
    english: ["seal"],
  },{
    kana: "ふく",
    romaji: "fuku",
    kanji: "服",
    english: ["clothes"],
  },{
    kana: "ふも",
    romaji: "fumo",
    kanji: "ふも",
    english: ["fumo","fumofumo","fumo fumo","FUOMFMO","FUFMOFUM"],
  },{
    kana: "ま",
    romaji: "ma",
    kanji: "魔",
    english: ["magic"],
  },{
    kana: "ます",
    romaji: "masu",
    kanji: "増す",
    english: ["to grow","to increase"],
  },{
    kana: "み",
    romaji: "mi",
    kanji: "三",
    english: ["3"],
  },{
    kana: "み",
    romaji: "mi",
    kanji: "見",
    english: ["gaze","looking"],
  },{
    kana: "み",
    romaji: "mi",
    kanji: "身",
    english: ["body"],
  },{
    kana: "も",
    romaji: "mo",
    kanji: "も",
    english: ["also","as well","too"],
  },{
    kana: "もえ(た)",
    romaji: "moe(ta)",
    kanji: "萌え(た)",
    english: ["moe","sprouting","(た) indicates past tense"],
  },{
    kana: "もえ(た)",
    romaji: "moe(ta)",
    kanji: "燃え(た)",
    english: ["burning","getting fired up","(た) indicates past tense"],
  },{
    kana: "もし",
    romaji: "moshi",
    kanji: "もし",
    english: ["if","in case","supposing that"],
  },{
    kana: "や",
    romaji: "ya",
    kanji: "矢",
    english: ["arrow"],
  },{
    kana: "やま",
    romaji: "yama",
    kanji: "山",
    english: ["mountain"],
  },{
    kana: "よ",
    romaji: "yo",
    kanji: "世",
    english: ["world","society"],
  },{
    kana: "よこ",
    romaji: "yoko",
    kanji: "横",
    english: ["horizontal","side","next to"],
  },{
    kana: "よこす",
    romaji: "yokosu",
    kanji: "寄越す",
    english: ["to send","to forward"],
  },
]

const params = ["kana","romaji","kanji","english"];

for (const item of dict) {
  const e_item = document.createElement("div");
  e_item.className = "item";
  
  const e_reading = document.createElement("div");
    const e_romaji = document.createElement("span");
    e_romaji.className = "romaji";
    e_romaji.innerText = item.romaji;
    e_reading.appendChild(e_romaji);

    const e_kana = document.createElement("span");
    e_kana.className = "kana";
    e_kana.innerText = item.kana;
    e_reading.appendChild(e_kana);
  e_item.appendChild(e_reading);

  const e_kanji = document.createElement("span");
  e_kanji.className = "kanji";
  e_kanji.innerHTML = `<a href="https://jisho.org/search/${item.kanji}">${item.kanji}</a>`;
  e_item.appendChild(e_kanji);

  const e_english = document.createElement("span");
  e_english.className = "english";
  e_english.innerHTML = "<span>"+item.english.join("</span><span>")+"</span>";
  e_item.appendChild(e_english);

  e_list.appendChild(e_item);
}