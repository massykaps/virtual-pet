const MAXIMUM_FITNESS = 10;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};
    
    Pet.prototype.growUp = function() {
        this.age += 5;
        this.hunger += 5;
        this.fitness -= 3;
    };
    Pet.prototype.walk = function() {
        this.fitness += 4;
        this.isAlive = this.age < 30 && this.hunger < 10 && this.fitness > 0;
      }

    Pet.prototype.walk = function() {
        if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
          this.fitness += 4;
        } else {
          this.fitness = MAXIMUM_FITNESS;
        }
      }

      Pet.prototype.feed = function() {
        if ((this.hunger - 3) <= 0) {
            this.hunger = 0;
        } else {
            this.hunger -= 3;
        };
        };
        
        Pet.prototype.checkUp = function() {
        
            const fitnessAlert = (this.fitness <= 3);
            const hungerAlert = (this.hunger >= 5);
        
            if (fitnessAlert && hungerAlert) {
                return 'I am hungry AND I need a walk'
            };
            
            if (fitnessAlert) {
                return 'I need a walk'
            }; 
            
            if (hungerAlert) {
                return 'I am hungry'
            }; 
            
            if (!fitnessAlert && !hungerAlert) {
                return 'I feel great!'
            };
        
        };

        Pet.prototype.isAlive = function() {
            return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        }
        
        module.exports = Pet;
        