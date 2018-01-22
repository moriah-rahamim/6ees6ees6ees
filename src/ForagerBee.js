class ForagerBee extends Bee {

  constructor() {
    // call Bee constructor function
    super();

    this.age = 10;
    this.job = 'find pollen';
    // .color, .food, .eat() inherited from Bee, Grub, Grub.prototype
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
