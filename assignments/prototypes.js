/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(gameproperties) {
  this.createdAt = gameproperties.createdAt;
  this.name = gameproperties.name;
  this.dimensions = gameproperties.dimensions; 
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charproperties) {
  GameObject.call(this, charproperties);
  this.healthPoints = charproperties.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humanproperties) {
  GameObject.call(this, humanproperties);
  CharacterStats.call(this, humanproperties);
  this.team = humanproperties.team;
  this.weapons = humanproperties.weapons;
  this.language = humanproperties.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

// /*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
// */

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  // Villain constructor
  function Villain(evilproperties) {
    Humanoid.call(this, evilproperties);
    this.damage = evilproperties.damage;
    this.healthPoints = evilproperties.healthPoints;
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.corrupt = function() {
    hero.healthPoints -= this.damage;
    if (hero.healthPoints <= 0) {
      console.log(`${this.name} has slain ${hero.name}, darkness reigns supreme!`);
      console.log(hero.destroy());
    } else {
    console.log(`${this.name} attacks for ${this.damage} damage. ${hero.name} has ${hero.healthPoints} health remaining.`);
    }
  }

  // Hero constructor
  function Hero(goodproperties) {
    Humanoid.call(this, goodproperties);
    this.damage = goodproperties.damage;
    this.healthPoints = goodproperties.healthPoints;
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.smite = function() {
    villain.healthPoints -= this.damage;
    if (villain.healthPoints <= 0) {
      console.log(`${this.name} has slain ${villain.name}, light and purity emerges victorious!`);
      console.log(villain.destroy());
    } else {
    console.log(`${this.name} attacks for ${this.damage} damage. ${villain.name} has ${villain.healthPoints} health remaining.`);
    }
  }

  Hero.prototype.bless = function() {
    hero.healthPoints += this.damage;
    console.log(`${this.name} heals for ${this.damage} health. ${hero.name} has ${hero.healthPoints} health remaining.`);
  }
// Villain object
    const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 6,
      width: 6,
      height: 8,
      },
      healthPoints: 40,
      name: 'Black Knight',
      team: 'Dark Kingdom',
      weapons: [
        'Claymore',
      ],
      language: 'Wicked',
      damage: 8,
    });
// Hero object
    const hero = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 5,
        width: 4,
        height: 6,
        },
        healthPoints: 30,
        name: 'White Knight',
        team: 'Light Kingdom',
        weapons: [
          'Morning Star',
        ],
        language: 'Jovial',
        damage: 10,
      });
// Fight
// console.log(hero);
// console.log(villain);      
    console.log(hero.createdAt);
    console.log(villain.createdAt);
    console.log(hero.greet());
    console.log(villain.greet());
    villain.corrupt();
    hero.smite();
    villain.corrupt();
    hero.bless();
    villain.corrupt();
    hero.smite();
    villain.corrupt();
    hero.smite();
    villain.corrupt();
    