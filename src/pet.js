const NEED_WALK = 'I need a walk';
const HUNGRY = 'I am hungry';
const HUNGRY_NEED_WALK = 'I am hungry AND I need a walk';
const CONTENT = 'I feel great!';

function Pet(name) {
    this.name = name
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;

    Pet.prototype = {
        get isAlive() {
            return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        }
    }
    
    Pet.prototype.growUp = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        } else {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
        };
    };

    Pet.prototype.walk = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        } if ((this.fitness + 4) <= 10) {
        this.fitness += 4;
        } else {
        this.fitness = 10;
        }
    }

    Pet.prototype.feed = function() {
        // this.hunger -= 3;
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }  if ((this.hunger - 3) >= 0) {
        this.hunger -= 3;
        } else {
            this.fitness = 0;
        }
    }

    Pet.prototype.checkUp = function() {
         if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }   if (this.fitness <= 3 && this.hunger >= 5) {
            return HUNGRY_NEED_WALK;
        }  else if (this.fitness <= 3) {
            return NEED_WALK;
        }  else if (this.hunger >= 5) {
            return HUNGRY;
        } else return CONTENT;
    }
}
module.exports = Pet;