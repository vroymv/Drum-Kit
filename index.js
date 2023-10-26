var w = document.querySelector('.w');
var a = document.querySelector('.a');
var s = document.querySelector('.s');
var d = document.querySelector('.d');
var j = document.querySelector('.j');
var k = document.querySelector('.k');
var l = document.querySelector('.l');

// w.addEventListener('click', function(){
//     var audio = new Audio();
//     audio.src = 'sounds/crash.mp3';
//     audio.play();
// },false);

// a.addEventListener('click', function(){
//     var audio = new Audio();
//     audio.src = 'sounds/kick-bass.mp3';
//     audio.play();
// },false);

// s.addEventListener('click', function(){
//     var audio = new Audio();
//     audio.src = 'sounds/snare.mp3';
//     audio.play();
// },false);

// d.addEventListener('click', function(){
//     var audio = new Audio();
//     audio.src = 'sounds/tom-1.mp3';
//     audio.play();
// },false);

// j.addEventListener('click', function(){
//     var audio = new Audio();
//     audio.src = 'sounds/tom-2.mp3';
//     audio.play();
// },false);

// k.addEventListener('click', function(){
//     var audio = new Audio();
//     audio.src = 'sounds/tom-3.mp3';
//     audio.play();
// },false);

// l.addEventListener('click', function(){
//     var audio = new Audio();
//     audio.src = 'sounds/tom-4.mp3';
//     audio.play();
// },false);

document.addEventListener('click', function(e){
    switch(e.target){
        case w:
            var audio = new Audio();
            audio.src = 'sounds/crash.mp3';
            audio.play();
        case a:
            a.addEventListener('click', function(){
                var audio = new Audio();
                audio.src = 'sounds/kick-bass.mp3';
                audio.play();
            },false);
        case s:
            s.addEventListener('click', function(){
                var audio = new Audio();
                audio.src = 'sounds/snare.mp3';
                audio.play();
            },false);
        case d:
            d.addEventListener('click', function(){
                var audio = new Audio();
                audio.src = 'sounds/tom-1.mp3';
                audio.play();
            },false);
        case j:
            j.addEventListener('click', function(){
                var audio = new Audio();
                audio.src = 'sounds/tom-2.mp3';
                audio.play();
            },false);
        case k:
            k.addEventListener('click', function(){
                var audio = new Audio();
                audio.src = 'sounds/tom-3.mp3';
                audio.play();
            },false);
        case l:
            l.addEventListener('click', function(){
                var audio = new Audio();
                audio.src = 'sounds/tom-4.mp3';
                audio.play();
            },false); 
    }
},false);

document.addEventListener('keydown', function(e){
    switch(e.key){
        case 'w':
            var audio = new Audio();
            audio.src = 'sounds/crash.mp3';
            audio.play();
        case 'a':
            var audio = new Audio();
            audio.src = 'sounds/kick-bass.mp3';
            audio.play();
        case 's':
            var audio = new Audio();
            audio.src = 'sounds/snare.mp3';
            audio.play();
        case 'd':
            var audio = new Audio();
            audio.src = 'sounds/tom-1.mp3';
            audio.play();
        case 'j':
            var audio = new Audio();
            audio.src = 'sounds/tom-2.mp3';
            audio.play();
        case 'k':
            var audio = new Audio();
            audio.src = 'sounds/tom-3.mp3';
            audio.play();
        case 'l':
            var audio = new Audio();
            audio.src = 'sounds/tom-4.mp3';
            audio.play();
    }
});



l.addEventListener('keydown', function (event) {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
        w.focus();
    }
  });



    w.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            w.classList.toggle('drum-press');
        }
      });

      w.addEventListener('keyup', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            w.classList.toggle('drum-press');
        }
      });
  

