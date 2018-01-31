var testText="",myText="",ms= new Date(),theTime = ms.getTime(),c,t=false,s=0,keys = new Array();

function Key(ch,tm) {
  this.character = ch;
  this.ms = tm;
}
//typing functions
var shareMsg="";
function checkText() {
    var text2check = document.getElementById('typing').value;
    if (text2check.length>testText.length) {
      msPrev = theTime;
      theTime=ms.getTime();
      key = new Key(text2check.substring(text2check.length-1), theTime-msPrev);
      var pattern = new RegExp("[A-Za-z0-9]");
      if(pattern.test(key.character)) {
        keys.push(key);
      }
    }
    if(document.getElementById('typing').value.length==1) {
      start=Date.now();
    }
    var end = Date.now();
    var w = document.getElementById('typing').value.length/5;
    var se = (end-start)/1000;
    if(se==0) {
      document.getElementById('score').innerHTML = "test started... calculating score... keep typing";
    } else {
      var currentWPM = wpm(w, se);
      var a = checkAccuracy(text2check,myText);
      if(t==1) {
        shareMsg = "I got " + currentWPM + " wpm! Can you do better?";
        document.getElementById('score').innerHTML = currentWPM + " wpm (" + kph(currentWPM).toFixed(0) + " kph)";
        document.getElementById('results').innerHTML = document.getElementById('typing').value.length/5 + " words in " + showClock(se) + " minutes - " + a.toFixed(0)+"% correct";
      } else {
        shareMsg = "I got " + kph(currentWPM).toFixed(0) + " kph! Can you do better?";
        document.getElementById('score').innerHTML = kph(currentWPM).toFixed(0) + " kph (" + currentWPM + " wpm)";
        document.getElementById('results').innerHTML = document.getElementById('typing').value.length + " characters in " + showClock(se) + " minutes - " + a.toFixed(0)+"% correct";
      }
    }
    if (text2check.length - testText.length > 3) {
      alert("excessive copy & paste detected");
      document.getElementById('typing').value = testText;
    } else {
      testText = text2check;
      document.getElementById('typed').innerHTML=checkIt(myText,text2check);
      if (myText==text2check) {
        score();
        document.getElementById('results').innerHTML= "Congratulations! You completed this test with a speed of " +  document.getElementById('score').innerHTML + " and 100% accuracy!";
        keys.sort(function(a, b) {
          return b.ms - a.ms
        });
        s=0;
        nextText();
        document.getElementById('score').innerHTML="Test begins when you start typing...";
        testLength=0;
        testText="";
      }
    }
}

//common functions
function score() {
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

function checkIt(goodText,testText) {
  var checkedText="";
  var tempText="";
  var i;
  var x=0;
  for(i in testText) {
  if (goodText[i]==testText[i]) {
    checkedText=checkedText+goodText[i];
    } else {
    checkedText=checkedText+"<span class='error'>"+goodText[i]+"</span>";
    }
   tempText="<span style = 'color:black;'>" + checkedText + "</span>" + goodText.substr(++x);
   }
  if(tempText!="") {
    return (tempText);
  } else {
    return (goodText);
  }
}
function getLink(key) {
  var link="";
  switch(key) {
    case "A":
    case "a":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/a/'>"+key+" drills</a>";
        break;
    case "B":
    case "b":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/b/'>"+key+" drills</a>";
        break;
    case "C":
    case "c":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/c/'>"+key+" drills</a>";
        break;
    case "D":
    case "d":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/d/'>"+key+" drills</a>";
        break;
    case "E":
    case "e":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/e/'>"+key+" drills</a>";
        break;
    case "F":
    case "f":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/f/'>"+key+" drills</a>";
        break;
    case "G":
    case "g":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/g/'>"+key+" drills</a>";
        break;
    case "H":
    case "h":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/h/'>"+key+" drills</a>";
        break;
    case "I":
    case "i":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/i/'>"+key+" drills</a>";
        break;
    case "J":
    case "j":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/j/'>"+key+" drills</a>";
        break;
    case "K":
    case "k":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/k/'>"+key+" drills</a>";
        break;
    case "L":
    case "l":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/l/'>"+key+" drills</a>";
        break;
    case "M":
    case "m":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/m/'>"+key+" drills</a>";
        break;
    case "N":
    case "n":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/n/'>"+key+" drills</a>";
        break;
    case "O":
    case "o":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/o/'>"+key+" drills</a>";
        break;
    case "P":
    case "p":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/p/'>"+key+" drills</a>";
        break;
    case "Q":
    case "q":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/q/'>"+key+" drills</a>";
        break;
    case "R":
    case "r":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/r/'>"+key+" drills</a>";
        break;
    case "S":
    case "s":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/s/'>"+key+" drills</a>";
        break;
    case "T":
    case "t":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/t/'>"+key+" drills</a>";
        break;
    case "U":
    case "u":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/u/'>"+key+" drills</a>";
        break;
    case "V":
    case "v":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/v/'>"+key+" drills</a>";
        break;
    case "W":
    case "w":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/w/'>"+key+" drills</a>";
        break;
    case "X":
    case "x":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/x/'>"+key+" drills</a>";
        break;
    case "Y":
    case "y":
        link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/y/'>"+key+" drills</a>";
        break;
    case "Z":
    case "z":
      link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/typing/drills/alphabet/z/'>"+key+" drills</a>";
      break;
    case "1":
    case "0":
      link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/keyboarding/21/'>"+key+" drills</a>";
      break;
    case "2":
    case "9":
      link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/keyboarding/20/'>"+key+" drills</a>";
      break;
    case "3":
    case "8":
      link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/keyboarding/19/'>"+key+" drills</a>";
      break;
    case "4":
    case "7":
      link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/keyboarding/18/'>"+key+" drills</a>";
      break;
    case "5":
    case "6":
      link="<strong>" + key + "</strong> <a href='https://thepracticetest.com/keyboarding/17/'>"+key+" drills</a>";
      break;
    default:
        link="<strong>" + key + "</strong>";
        break;
  }
  return link;
}
var start = null;
function checkAccuracy(text1, text2) {
  var total = text1.length;
  var correct = 0;
  for(i in text1) {
  if (text1[i]==text2[i]) {
    correct++;
    }
   }
  return correct/total*100;
}
function wpm(words, elapsed) {
  var value=words/(elapsed/60);
  return value.toFixed(1) ;
}
function kph(wpm) {
  return wpm*300;
}
function showClock(elapsed) {
  var minutes = elapsed/60;
  var seconds = elapsed%60;

  if(parseInt(seconds)<10) {
    seconds2show = "0" + parseInt(seconds);
  } else {
    seconds2show = parseInt(seconds);
  }
  return parseInt(minutes) + ":" + seconds2show;
}
function randomNumber(n1,n2){
  n2=n2-n1;
  var n = Math.floor(Math.random()*n2)+n1;
  return n;
}
function randomCharacter(possible){
   var c = possible.charAt(Math.floor(Math.random()*possible.length));
   return c;
}
function getKPH() {
  var speed = parseInt(document.getElementById('wpm').value);
  document.getElementById('kph').innerHTML=speed*300;
}
function checkSpeed(){
  if(document.getElementById("typing").value.length==1){
    start=Date.now()
  }
  var end=Date.now();
  var elapsed=((end-start)/1000);
  var words=document.getElementById("typing").value.length/5;
  var cWpm=wpm(words, elapsed);
  var cKph=kph(cWpm);
  var clock=showClock(elapsed);
  document.getElementById("score").innerHTML=cWpm+" wpm / "+cKph+" kph ("+words.toFixed(1)+" words in "+clock+" minutes)";
}

window.fbAsyncInit = function() {
    FB.init({
      appId            : '2482002645357331',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

document.getElementById('facebookShare').onclick = function() {
 FB.ui({
   method: 'share',
   display: 'popup',
   href: 'http://thepracticetest.com/data-entry/street-address-practice/index.php',
   quote: shareMsg,
 }, function(response){});
}

document.getElementById('twitterShare').onclick = function() {
  var url="https://twitter.com/intent/tweet?screen_name=thepracticetest&text="+shareMsg+" https://thepracticetest.com/data-entry/street-address-practice"
  window.open(url, "_target", "width=600, height=350");
}


document.getElementById('linkedinShare').onclick = function() {
  var url = "https://www.linkedin.com/shareArticle?mini=true&url=https://thepracticetest.com/data-entry/street-address-practice&title="+shareMsg;
  window.open(url, "_target", "width=600, height=350");
}
