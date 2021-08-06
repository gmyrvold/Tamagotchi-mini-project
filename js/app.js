console.log("Tamagotchi Project 0")

function nameTamagotchi() {
    let name = document.querySelector('#Tamagotchi-name').value 
    let h2 = document.createElement('h2')
    h2.innerText = name
    h2.setAttribute('id', 'tamagotchi-name')
    document.body.appendChild(h2)
}
    document.querySelector('#submit').addEventListener('click',nameTamagotchi)

class Tamagotchi {
    constructor() {
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
    
            if (this.hunger > 10) {
                clearInterval(hungerId)
                //deadTamagotchi()
            }
        
        },1200)
    }
    incrementSleepiness() {
        const sleepId = setInterval(() => {
            const sleepElement = document.querySelector('#sleepiness')
            sleepElement.innerText = `Sleepiness: ${this.sleepiness}`
    
            this.sleepiness ++
    
            if (this.sleepiness > 10) {
                clearInterval(sleepId)
            }
        
        },1500)
    }
    incrementBoredom() {
        const boredId = setInterval(() => {
            const boredElement = document.querySelector('#boredom')
            boredElement.innerText = `Boredom: ${this.boredom}`
    
            this.boredom ++
    
            if (this.boredom > 10) {
                clearInterval(boredId)
            }
        
        },1300)
    }
    incrementAge() {
        const ageId = setInterval(() => {
            const ageElement = document.querySelector('#age')
            ageElement.innerText = `Age: ${this.age}`
    
            this.age ++
    
            if (this.age > 2) {
                clearInterval(ageId)
            }
        
        },5000)
    }
    changeImage() {

    }
    deadTamagotchi(){
        document.setAttribute
    }
    feed() {
        this.hunger --
    }
    turnOffLights() {
        this.sleepiness --
    }
    play() {
        this.boredom --
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

document.querySelector('#feed').addEventListener('click', () => {
    tamagotchi1.feed()
})
document.querySelector('#turn-off-lights').addEventListener('click', () => {
    tamagotchi1.turnOffLights()
})
document.querySelector('#play').addEventListener('click', () => {
    tamagotchi1.play()
})

//let makeTamagotchi = document.createElement('div')
//makeTamagotchi.setAttribute('id', 'Mashimaro')





