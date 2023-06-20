const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1920
canvas.height = 1080

c.fillStyle = 'grey'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/Flight_Deck.png'

const playerImage = new Image()
playerImage.src = './img/Characters/Main_Player/Player1.png'

class Sprite {
    constructor({ position, velocity, image}) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(image, 0, 0,)
    }

}

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: image
})

function animate() {
    window.requestAnimationFrame(animate)
    
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        canvas.width / 6 - playerImage.width / 2,
        canvas.height / 8 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height
    )
}

animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            console.log('pressed w key')
            break
        case 'a':
            console.log('pressed a key')
            break
        
        case 's':
            console.log('pressed s key')
            break
        
        case 'd':
            console.log('pressed d key')
            break
        }
    })

