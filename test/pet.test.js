const Pet = require("../src/pet")

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });


  describe('constructor', () => {
    
  
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
  });


  describe('growUp', () => {
    it('increments the age by 5', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(5);
    });
  });


//* this describes  the hunger  of Fido that is 0
  describe('hunger', () => {
      it('has a initial hunger of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.hunger).toEqual(0);
    });
  });

//* this describes the hunger increasing by 5

  describe('growUp', () => {
    it('increments the hunger by 5', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.hunger).toEqual(5);
    });
  });

//* this describes the initial fitness being 10

  describe('fitness', () => {
    it('has a initial fitness of 10', () => {
    const pet = new Pet('Fido');

    expect(pet.fitness).toEqual(10);
  });
});

//* this describes the initial fitness decreasing by 3 and equalling 7. 
describe('growUp', () => {
  it('decrease the fitness by 3', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('fido');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });
});

describe('walk', () => {
 

  it('increases the fitness to a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {
  it('decreases hunger level by 3', () => {
    const pet = new Pet('Fido');

    pet.hunger = 15;
    pet.feed();

    expect(pet.hunger).toEqual(12);
  });
  
  it('decreases hunger to a minimum of 0', () => {
    const pet = new Pet('Fido');

    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });

  });

  describe('checkUp', () => {

  it('returns instructions for improving the pet\'s fitness if 3 or less', () => {
    const pet = new Pet('Fido');

    pet.fitness = 2;

    pet.checkUp();

    expect(pet.checkUp()).toEqual('I need a walk');

  });

  it('returns instructions for satiating pet\'s hunger if 5 or more', () => {
    const pet = new Pet('Fido');

    pet.hunger = 6;

    pet.checkUp();

    expect(pet.checkUp()).toEqual('I am hungry');
  });

  it('checks if pet is both hungry and unfit', () => {
    const pet = new Pet('Fido');

    pet.fitness = 1;
    pet.hunger = 8;

    pet.checkUp();

    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });

  it('checks if pet is full and fit', () => {
    const pet = new Pet('Fido');

    pet.fitness = 7;
    pet.hunger = 2;

    pet.checkUp();

    expect(pet.checkUp()).toEqual('I feel great!');
  });

  });
  
  describe('dead or alive', () => {
    it('pet dies if criteria satisfied', () => {
      const pet = new Pet('Fido');
  
      pet.fitness = 0;
      pet.age = 99;
      pet.hunger = 97;
      pet.isAlive();
  
      expect(pet.isAlive()).toBe(false);
    });

    it('pet is alive if criteria satisfied', () => {
      const pet = new Pet('Fido');
  
      pet.fitness = 25;
      pet.age = 29;
      pet.hunger = 9;
      pet.isAlive();
  
      expect(pet.isAlive()).toBe(true);
    });
  });
  

