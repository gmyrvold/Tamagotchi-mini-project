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
        this.lightsAreOn = true
    } 
    incrementHunger() {
        this.hungerId = setInterval(() => {
            const hungerElement = document.querySelector('#hunger')
            hungerElement.innerText = `Hunger: ${this.hunger}`
    
            this.hunger ++
    
            if (this.hunger > 10) {
                clearInterval(this.hungerId)
                this.deadTamagotchi()
            }
        
        },1200)
    }
    incrementSleepiness() {
        this.sleepId = setInterval(() => {
            const sleepElement = document.querySelector('#sleepiness')
            sleepElement.innerText = `Sleepiness: ${this.sleepiness}`
    
            this.sleepiness ++
    
            if (this.sleepiness > 10) {
                clearInterval(this.sleepId)
                this.deadTamagotchi()
            }
        
        },1500)
    }
    incrementBoredom() {
        this.boredId = setInterval(() => {
            const boredElement = document.querySelector('#boredom')
            boredElement.innerText = `Boredom: ${this.boredom}`
    
            this.boredom ++
    
            if (this.boredom > 10) {
                clearInterval(this.boredId)
                this.deadTamagotchi()
            }
        
        },1300)
    }
    incrementAge() {
        this.ageId = setInterval(() => {
            const ageElement = document.querySelector('#age')
    
            this.age ++
            ageElement.innerText = `Age: ${this.age}`
            if (this.age === 1) {
                //console.log('running')
                this.ageUp1()
            }
            else if (this.age === 2) {
                this.ageUp2()
                clearInterval(this.ageId)
            }
        
        },5000)
    }
    ageUp1() {
        document.querySelector('#Mashimaro').setAttribute('src','Images/Age1Mashi.png')
    }
    ageUp2(){
        document.querySelector('#Mashimaro').setAttribute('src','Images/Age2Mashi.png')
    }
    deadTamagotchi(){
        document.querySelector('#Mashimaro').setAttribute('src','Images/Dead Mashimaro.png')
        clearInterval(this.hungerId)
        clearInterval(this.sleepId)
        clearInterval(this.boredId)
        clearInterval(this.ageId)
    }
    nightTime() {
        let night = document.createElement('img')
        night.setAttribute('src', 'Images/Moon.png')
        night.setAttribute('id', 'moon')
        document.body.appendChild(night)
        this.lightsAreOn = false
    }
    dayTime() {
        this.lightsAreOn = true
        document.querySelector('#moon').remove()
    }
    feed() {
        this.hunger --
    }
    toggleLights() {
        this.sleepiness --
        if (this.lightsAreOn === true) {
            this.nightTime()
        } else {
            this.dayTime()
        }
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
    tamagotchi1.toggleLights()
})
document.querySelector('#play').addEventListener('click', () => {
    tamagotchi1.play()
})





