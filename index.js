
const duarationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r')*Math.PI*2;
circle.setAttribute('stroke-dasharray', perimeter)


let duration;
const timer = new Timer(duarationInput, startButton, pauseButton,{
    onStart(totalDuration){
        duration = totalDuration
        
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
        perimeter*timeRemaining/duration-perimeter);

    },
    onComplete(){
        console.log('compete');
        
    }
})
// timer.start()