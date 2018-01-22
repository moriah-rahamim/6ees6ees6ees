class RetiredForagerBee extends ForagerBee {

  constructor() {
    // call ForagerBee constructor
    super();

    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    // inherit .food, .eat() .treasureChest from superclasses
  }

  forage() {
    return 'I am too old, let me play cards instead';
  }

  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
