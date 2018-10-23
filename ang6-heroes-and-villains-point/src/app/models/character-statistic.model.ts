export class CharacterStatistic {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  energy: number;
  combat: number;

  constructor(intelligence: number, strength: number, speed: number, durability: number, energy: number, combat: number) {
    this.intelligence = intelligence;
    this.strength = strength;
    this.speed = speed;
    this.durability = durability;
    this.energy = energy;
    this.combat = combat;
  }
}
