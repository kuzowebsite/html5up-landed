var kanji = ["n","wa","ra","ya","ma","ha","na","ta","sa","ka","a","wi","ri","mi","hi","ni","chi","shi","ki","i","ru","yu","mu","fu","nu","tsu","su","ku","u","we","re","me","he","ne","te","se","ke","e","wo","ro","yo","mo","ho","no","to","so","ko","o"];
var currentKanji;
var selectedKanji;
var chosen = false;
var numberCorrect = 0;

function pickKanji(){
  ClearTiles();
  currentKanji = kanji[Math.floor(Math.random() * 48)];
  document.getElementById("kanjiContainer").innerHTML = currentKanji;
  chosen = false;
}

function selectTile(id)
{
    if(chosen == false){
      if(currentKanji == id.id){
         id.classList.add('correct');
        numberCorrect++;
        document.getElementById("scoreContainer").innerHTML = numberCorrect;
      }else{
        id.classList.add('wrong');
       document.getElementById(currentKanji).classList.add('correct');
        numberCorrect = 0;
   document.getElementById(scoreContainer).innerHTML = numberCorrect;
      }
      chosen = true;
    }
}

function ClearTiles(){
  var a = document.getElementsByTagName('div');
  for (i = 0; i < a.length; i++) {
      a[i].classList.remove('correct');
      a[i].classList.remove('wrong');
    }
}

document.onload = pickKanji();
document.querySelector('.button').onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
}