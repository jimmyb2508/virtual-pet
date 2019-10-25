const Pet = require("../src/pet");

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet()).toBeInstanceOf(Object);
    });
    const newPet = new Pet('Fido');
    it('returns a pet name', () => {
        expect(newPet.name).toBe('Fido');
    });
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
    it('has an initial hunger of 0', () => {
        const pet = new Pet('Roger');
        expect(pet.hunger).toEqual(0);
    });
    it('has an initial fitness of 10', () => {
        const pet = new Pet('Snoopy');
        expect(pet.fitness).toEqual(10);
    })
});

describe('when its growsUp then the following', () => {
    it('should increase the age by 1', () => {
        const newPet = new Pet('Fido');
        newPet.growUp()
        expect(newPet.age).toEqual(1);
        newPet.growUp()
        expect(newPet.age).toEqual(2)
    });
    it('should increase hunger by 5', () => {
        const newPet = new Pet('Fido');
        newPet.growUp()
        expect(newPet.hunger).toEqual(5);
        newPet.growUp()
        expect(newPet.hunger).toEqual(10);
    })
    it('should decrease fitness by 3', () => {
        const newPet = new Pet('Trish');
        newPet.growUp()
        expect(newPet.fitness).toEqual(7);
        newPet.growUp()
        expect(newPet.fitness).toEqual(4);
        newPet.growUp()
        expect(newPet.fitness).toEqual(1);
    })
})

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
    it ('increases fitness by a maximum of 10', () => {
        const pet = new Pet('fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    })
});

describe('feed', () => {
    it('decreases Pet hunger level by 3', () => {
        const pet = new Pet('Jeffrey');
        pet.hunger = 3;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('Boris');
        pet.hunger = 0;
        pet.feed();
        expect(pet.hunger).toEqual(0);
  })

describe('checkUp', () => {
    it('if pet fitness is 3 or less return I need a walk', () => {
        const pet = new Pet('Sparkle');
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I need a walk');
    })
    it('if pet hunger is 5 or more return I am hungry', () => {
        const pet = new Pet('Harry');
        pet.hunger = 6;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry');
        pet.hunger = 8;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry');
        pet.hunger = 10;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry');
    })
    it('if both are true return I am hungry AND I need a walk', () => {
        const pet = new Pet('Tamawotzi');
        pet.fitness = 2;
        pet.hunger = 8;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    })
    it('if neither are true return I feel great', () => {
        const pet = new Pet ('Noam');
        pet.fitness = 5;
        pet.hunger = 3;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I feel great!');
    })
  })
})