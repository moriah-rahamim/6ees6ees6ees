class HoneyMakerBee extends Bee {

  constructor() {
    // call Bee constructor function
    super();

    this.age = 10;
    this.job = 'make honey';
    // .color, .food, .eat() inherited from Bee, Grub, and Grub.prototype
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
};
