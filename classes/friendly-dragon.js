const Dragon = require('./dragon')

class FriendlyDragon extends Dragon {
    constructor (name, color, lifeGoals, friend) {
        super(name, color)
        this.lifeGoals = lifeGoals
        this.friend = friend

    }

    hasLifeGoals() {
        this.lifeGoals.forEach( e => {
            console.log(`${this.name} likes to ${e}`)
        })
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`
    }


}

module.exports = FriendlyDragon
