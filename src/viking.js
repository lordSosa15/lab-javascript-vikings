// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }


  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`
  } else {
    return `${this.name} has died in act of combat`
  }
}

  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`
  } else {
    return `A Saxon has died in combat`
  }
  }
}

// War
class War {
  constructor() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  }
   addViking(viking){
    this.vikingArmy.push(viking);
   }
   addSaxon(saxon){
    this.saxonArmy.push(saxon);
   }
   vikingAttack(){
  let attackedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

  let attackingViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

  let result = attackedSaxon.receiveDamage(attackingViking.attack());

  if (attackedSaxon.health <= 0) {
    this.saxonArmy.splice(attackedSaxon);
  }
  return result;
  }

   saxonAttack(){
    let attackedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let attackingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let result = attackedViking.receiveDamage(attackingSaxon.attack());
    
    if (attackedViking.health <= 0) {
      this.vikingArmy.splice(attackedViking);
    }
    return result;
   }
   showStatus(){
     if (this.saxonArmy.length === 0) {
       return "Vikings have won the war of the century!";
     } else if (this.vikingArmy.length === 0){
       return "Saxons have fought for their lives and survived another day...";
     }
     return "Vikings and Saxons are still in the thick of battle."
   }

}
function randomPick(value){
  return Math.floor(Math.random() * value)
}


 //initiate the game
const war = new War()
for(let i = 0; i < 10; i++){
  let viking = new Viking('Thor', (100 + randomPick(100)), (80 + randomPick(100)))
  let saxon = new Saxon((100 + randomPick(100)), (80 + randomPick(100)))

  war.vikingArmy.push(viking)
  war.saxonArmy.push(saxon)
}

for(let i = 0; i < 1000; i++){
  if(i%2===0){
    war.vikingAttack()
  }else war.saxonAttack()

  if(war.saxonArmy.length === 0 || war,vikingArmy.length === 0){
    console.log(`War is over - ${war.showStatus()}`)
    break
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
