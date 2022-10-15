const drumsBtn = document.querySelectorAll('.drum').length

function playDrum(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3')   // returns a object
            // constructor function
            tom1.play()
            break;

        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()
            break;

        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()
            break;

        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()
            break;

        case 'j':
            var snare = new Audio('./sounds/snare.mp3')
            snare.play()
            break;

        case 'k':
            var crash = new Audio('./sounds/crash.mp3')
            crash.play()
            break;

        case 'l':
            var kick = new Audio('./sounds/kick-bass.mp3')
            kick.play()
            break;

        default:
            break;
    }
}

for (var i = 0; i < drumsBtn; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var buttonInnerHtml = this.innerText
        playDrum(buttonInnerHtml)

        buttonAnimation(buttonInnerHtml)
    })
}

document.addEventListener('keypress', function(event) {
    playDrum(event.key)  // this type of event trigger the callback
    buttonAnimation(event.key)
})

function buttonAnimation(currKey) {
    var activeBtn = document.querySelector("." + currKey)
    activeBtn.classList.add('pressed')

    setTimeout(function(){
      activeBtn.classList.remove('pressed')  
    }, 100);
}