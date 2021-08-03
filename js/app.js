console.log("Tamagotchi Project 0")

class Tamagotchi {
    constructor() {
        this.name = ''
        this.hunger = 0
        this.sleepiness = 0
        this.boredom = 0
        this.age = 0
    } 
    incrementHunger() {
        const hungerId = setInterval(() => {
            const hungerElement = document.querySelector('#hunger')
            hungerElement.innerText = `Hunger: ${this.hunger}`
    
            this.hunger ++
    
            if (this.hunger < 0) {
                clearInterval(hungerId)
            }
        
        },1000)
    }
    incrementSleepiness() {
        const sleepId = setInterval(() => {
            const sleepElement = document.querySelector('#sleepiness')
            sleepElement.innerText = `Sleepiness: ${this.sleepiness}`
    
            this.sleepiness ++
    
            if (this.sleepiness < 0) {
                clearInterval(sleepId)
            }
        
        },1000)
    }
    incrementBoredom() {
        const boredId = setInterval(() => {
            const boredElement = document.querySelector('#boredom')
            boredElement.innerText = `Boredom: ${this.boredom}`
    
            this.boredom ++
    
            if (this.boredom < 0) {
                clearInterval(boredId)
            }
        
        },1000)
    }
    incrementAge() {
        const ageId = setInterval(() => {
            const ageElement = document.querySelector('#age')
            ageElement.innerText = `Age: ${this.age}`
    
            this.age ++
    
            if (this.age < 0) {
                clearInterval(ageId)
            }
        
        },1000)
    }
    feed() {

    }
    turnOffLights() {

    }
    play() {
        
    }
    startGame(){
        this.incrementHunger()
        this.incrementSleepiness()
        this.incrementBoredom()
        this.incrementAge()
    }
}
const tamagotchi1 = new Tamagotchi ('')
console.log(tamagotchi1)

const buttonSubmit = document.querySelector('button')
buttonSubmit.addEventListener('click', () => {
    tamagotchi1.startGame()
})


















